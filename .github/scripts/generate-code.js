const { GoogleGenerativeAI } = require('@google/generative-ai');
const fs = require('fs');
const path = require('path');

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function generateCode() {
  try {
    const featureFiles = process.env.FEATURE_FILES.split(',').filter(Boolean);
    console.log(`Processing ${featureFiles.length} feature file(s)...`);
    
    for (const featureFile of featureFiles) {
      console.log(`\n📄 Processing: ${featureFile}`);
      
      const spec = JSON.parse(fs.readFileSync(featureFile, 'utf8'));
      const codeContext = getCodeContext(spec);
      const prompt = buildPrompt(spec, codeContext);
      
      console.log('🤖 Calling Gemini API...');
      const model = genAI.getGenerativeModel({ 
        model: 'gemini-2.0-flash-exp',
        generationConfig: { temperature: 0.2, maxOutputTokens: 8192 }
      });
      
      const result = await model.generateContent(prompt);
      const response = result.response.text();
      
      console.log('✅ Code generated');
      applyCodeChanges(response, spec);
    }
    
    console.log('\n🎉 All files processed!');
  } catch (error) {
    console.error('❌ Error:', error);
    process.exit(1);
  }
}

function getCodeContext(spec) {
  const context = [];
  if (spec.affected_files) {
    for (const file of spec.affected_files) {
      if (fs.existsSync(file)) {
        context.push({ path: file, content: fs.readFileSync(file, 'utf8') });
        console.log(`  ✓ Loaded: ${file}`);
      } else {
        context.push({ path: file, content: '// New file' });
      }
    }
  }
  return context;
}

function buildPrompt(spec, codeContext) {
  const taskType = spec.type === 'feature' ? 'new feature' : 'bug fix';
  return `You are a senior frontend developer implementing a ${taskType}.

## Task: ${spec.title}
**Type:** ${spec.type}
**Priority:** ${spec.priority}

## Description
${spec.description}

## Technical Spec
${spec.spec || 'N/A'}

## Acceptance Criteria
${(spec.acceptance_criteria || []).map((c, i) => `${i + 1}. ${c}`).join('\n')}

## Existing Code
${codeContext.map(ctx => `### ${ctx.path}\n\`\`\`\n${ctx.content}\n\`\`\``).join('\n')}

## Output Format
For each file, output:

FILE: path/to/file.tsx
\`\`\`typescript
// Complete file content
\`\`\`

Generate the implementation:`;
}

function applyCodeChanges(response, spec) {
  const pattern = /FILE:\s*(.+?)\n\`\`\`(?:typescript|tsx|jsx|javascript|css|json)?\n([\s\S]+?)\`\`\`/g;
  let match;
  let count = 0;
  
  while ((match = pattern.exec(response)) !== null) {
    const [, filePath, content] = match;
    const dir = path.dirname(filePath.trim());
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(filePath.trim(), content.trim() + '\n');
    console.log(`  ✓ Updated: ${filePath.trim()}`);
    count++;
  }
  
  console.log(`✅ Modified ${count} file(s)`);
}

generateCode();
