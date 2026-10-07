const fs = require('fs');
const path = require('path');

const titles = {
  'theory.md': 'থিওরি ও কনসেপ্ট',
  'conceptual.md': 'জ্ঞান ও অনুধাবন',
  'math-cq.md': 'গাণিতিক সমস্যা ও CQ',
  'exam.md': 'অবজেক্টিভ ও লাইভ এক্সাম'
};

function updateDocs(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      updateDocs(fullPath);
    } else if (titles[file]) {
      const banglaTitle = titles[file];
      const content = `---
sidebar_label: '${banglaTitle}'
title: '${banglaTitle}'
---

# ${banglaTitle}

কনটেন্ট শীঘ্রই আপলোড করা হবে।
`;
      fs.writeFileSync(fullPath, content, 'utf8');
    }
  }
}

updateDocs(path.join(__dirname, 'docs'));
console.log('সব সাব-টপিকের সাইডবার নাম সফলভাবে বাংলায় রূপান্তর করা হয়েছে!');