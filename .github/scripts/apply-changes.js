const fs = require('fs');
const path = require('path');

const outputFile = process.argv[2] || '.gemini-specs/output.md';

if (!fs.existsSync(outputFile)) {
  console.log('No output file found at', outputFile);
  process.exit(0);
}

const content = fs.readFileSync(outputFile, 'utf8');
const pattern = /FILE:\s*(.+?)\n\`\`\`(?:typescript|tsx|jsx|javascript|css|scss|json|html)?\n([\s\S]+?)\`\`\`/g;

let match;
let count = 0;

while ((match = pattern.exec(content)) !== null) {
  const filePath = match[1].trim();
  const fileContent = match[2].trim();
  
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    console.log('📁 Created directory:', dir);
  }
  
  fs.writeFileSync(filePath, fileContent + '\n');
  console.log('✓ Updated:', filePath);
  count++;
}

console.log('\n✅ Applied', count, 'file(s)');
