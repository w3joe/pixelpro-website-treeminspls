const fs = require('fs');
const path = require('path');

// Scan repository to understand codebase structure
function scanRepository() {
  const structure = { directories: [], files: [], keyFiles: {} };
  const ignoreDirs = ['node_modules', '.git', '.next', 'dist', 'build', '.gemini-specs'];
  const keyFilePatterns = ['package.json', 'tsconfig.json', 'next.config', 'tailwind.config'];
  const codeExtensions = ['.ts', '.tsx', '.js', '.jsx', '.css', '.scss'];
  
  function scan(dir, depth = 0) {
    if (depth > 3) return; // Limit depth
    try {
      const items = fs.readdirSync(dir);
      for (const item of items) {
        if (ignoreDirs.includes(item) || item.startsWith('.')) continue;
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          structure.directories.push(fullPath);
          scan(fullPath, depth + 1);
        } else if (stat.isFile()) {
          structure.files.push(fullPath);
          // Capture key config files
          if (keyFilePatterns.some(p => item.includes(p))) {
            try {
              structure.keyFiles[fullPath] = fs.readFileSync(fullPath, 'utf8').slice(0, 2000);
            } catch (e) {}
          }
        }
      }
    } catch (e) {}
  }
  
  scan('.');
  return structure;
}

// Get sample files from each directory to understand code patterns
function getSampleCode(structure) {
  const samples = [];
  const seenDirs = new Set();
  const codeExtensions = ['.ts', '.tsx', '.js', '.jsx'];
  
  for (const file of structure.files) {
    const ext = path.extname(file);
    const dir = path.dirname(file);
    
    // Get one sample per directory
    if (codeExtensions.includes(ext) && !seenDirs.has(dir)) {
      try {
        const content = fs.readFileSync(file, 'utf8');
        if (content.length < 5000) { // Only include smaller files
          samples.push({ path: file, content: content.slice(0, 3000) });
          seenDirs.add(dir);
        }
      } catch (e) {}
    }
    
    if (samples.length >= 5) break; // Limit samples
  }
  
  return samples;
}

async function generateCode() {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    console.error('❌ GEMINI_API_KEY not set');
    process.exit(1);
  }

  try {
    const spec = JSON.parse(fs.readFileSync('.gemini-specs/current-feature.json', 'utf8'));
    console.log('📋 Feature:', spec.title);
    
    // Scan repository for context
    console.log('🔍 Scanning repository...');
    const repoStructure = scanRepository();
    console.log('  Found', repoStructure.files.length, 'files in', repoStructure.directories.length, 'directories');
    
    // Get sample code to understand patterns
    const sampleCode = getSampleCode(repoStructure);
    console.log('  Loaded', sampleCode.length, 'sample files for context');
    
    // Get code context from affected files if specified
    const affectedFiles = [];
    if (spec.affected_files) {
      for (const file of spec.affected_files) {
        if (fs.existsSync(file)) {
          affectedFiles.push({ path: file, content: fs.readFileSync(file, 'utf8') });
          console.log('  ✓ Loaded affected file:', file);
        }
      }
    }
    
    const prompt = buildPrompt(spec, repoStructure, sampleCode, affectedFiles);
    
    console.log('🤖 Calling Gemini API...');
    const response = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent?key=' + apiKey, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: { temperature: 0.2, maxOutputTokens: 8192 }
      })
    });
    
    const data = await response.json();
    const text = data.candidates?.[0]?.content?.parts?.[0]?.text || '';
    
    if (!text) {
      console.error('❌ No response from Gemini');
      console.log('Response:', JSON.stringify(data, null, 2));
      process.exit(1);
    }
    
    fs.writeFileSync('.gemini-specs/output.md', text);
    console.log('✅ Generated output saved');
    
  } catch (error) {
    console.error('❌ Error:', error);
    process.exit(1);
  }
}

function buildPrompt(spec, repoStructure, sampleCode, affectedFiles) {
  const taskType = spec.type === 'feature' ? 'new feature' : 'bug fix';
  
  // Build repository structure overview
  const structureOverview = repoStructure.directories.slice(0, 20).join('\n');
  
  // Build key files context (package.json, config files)
  const keyFilesContext = Object.entries(repoStructure.keyFiles)
    .map(([file, content]) => '### ' + file + '\n\`\`\`json\n' + content + '\n\`\`\`')
    .join('\n\n');
  
  // Build sample code context
  const sampleContext = sampleCode
    .map(s => '### ' + s.path + '\n\`\`\`\n' + s.content + '\n\`\`\`')
    .join('\n\n');
  
  // Build affected files context
  const affectedContext = affectedFiles
    .map(f => '### ' + f.path + ' (TO BE MODIFIED)\n\`\`\`\n' + f.content + '\n\`\`\`')
    .join('\n\n');
  
  return `You are a senior developer working on an existing codebase. Your task is to implement a ${taskType}.

**IMPORTANT:** You are integrating into an EXISTING project. Study the repository structure, coding patterns, and conventions below before generating any code. Your output must seamlessly fit into this codebase.

## Repository Structure
\`\`\`
${structureOverview}
\`\`\`

## Project Configuration
${keyFilesContext || 'No config files found'}

## Existing Code Patterns (Study these carefully!)
${sampleContext || 'No sample code available'}

## Files to Modify
${affectedContext || 'No specific files specified - determine best location'}

---

## Task: ${spec.title}
**Type:** ${spec.type}

## Description
${spec.description}

## Technical Specification
${spec.spec || 'No detailed spec provided'}

## Requirements
1. **MUST** follow the existing code patterns shown above
2. **MUST** use the same styling conventions (Tailwind, CSS modules, etc.)
3. **MUST** use the same component patterns
4. **MUST** include all necessary imports
5. **MUST** be production-ready code
6. Add helpful comments where appropriate

## Output Format
For EACH file you modify or create, use this EXACT format:

FILE: path/to/file.tsx
\`\`\`typescript
// Complete file content here
\`\`\`

Generate the implementation that integrates seamlessly with this codebase:`;
}

generateCode();
