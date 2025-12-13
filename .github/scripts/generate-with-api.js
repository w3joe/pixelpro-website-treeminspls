const fs = require('fs');
const path = require('path');

async function generateCode() {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    console.error('❌ GEMINI_API_KEY not set');
    process.exit(1);
  }

  try {
    const spec = JSON.parse(fs.readFileSync('.gemini-specs/current-feature.json', 'utf8'));
    console.log('📋 Feature:', spec.title);
    
    // Get code context from affected files
    const codeContext = [];
    if (spec.affected_files) {
      for (const file of spec.affected_files) {
        if (fs.existsSync(file)) {
          codeContext.push({ path: file, content: fs.readFileSync(file, 'utf8') });
          console.log('  ✓ Loaded:', file);
        }
      }
    }
    
    const prompt = buildPrompt(spec, codeContext);
    
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

function buildPrompt(spec, codeContext) {
  const taskType = spec.type === 'feature' ? 'new feature' : 'bug fix';
  const contextStr = codeContext.map(ctx => 
    '### ' + ctx.path + '\n\`\`\`\n' + ctx.content + '\n\`\`\`'
  ).join('\n\n');
  
  return `You are a senior frontend developer implementing a ${taskType}.

## Task: ${spec.title}
**Type:** ${spec.type}

## Description
${spec.description}

## Technical Spec
${spec.spec || 'N/A'}

${codeContext.length > 0 ? '## Existing Code Context\n' + contextStr : ''}

## Instructions
1. Generate clean, production-ready code
2. Follow existing code patterns
3. Include all necessary imports
4. Add helpful comments

## Output Format
For EACH file you modify or create, use this EXACT format:

FILE: path/to/file.tsx
\`\`\`typescript
// Complete file content here
\`\`\`

Generate the implementation now:`;
}

generateCode();
