const fs = require('fs');
const path = require('path');

const curriculum = {
  'paper-1': [
    'ch01-physical-world', 'ch02-vectors', 'ch03-dynamics', 'ch04-newtonian-mechanics',
    'ch05-work-energy-power', 'ch06-gravitation', 'ch07-structural-properties',
    'ch08-periodic-motion', 'ch09-waves', 'ch10-ideal-gas'
  ],
  'paper-2': [
    'ch01-thermodynamics', 'ch02-static-electricity', 'ch03-current-electricity',
    'ch04-magnetic-effects', 'ch05-emi-ac', 'ch06-geometrical-optics',
    'ch07-wave-optics', 'ch08-modern-physics', 'ch09-atomic-nuclear',
    'ch10-semiconductor', 'ch11-astronomy'
  ]
};

const modules = [
  { file: 'theory.md', id: 'theory', title: 'সম্পূর্ণ অধ্যায় থিওরি' },
  { file: 'conceptual.md', id: 'conceptual', title: 'জ্ঞান ও অনুধাবনমূলক' },
  { file: 'cq.md', id: 'cq', title: 'সৃজনশীল প্রশ্ন (CQ)' },
  { file: 'mcq.md', id: 'mcq', title: 'বহুনির্বাচনী প্রশ্ন (MCQ)' },
  { file: 'exam.md', id: 'exam', title: 'অধ্যায়ভিত্তিক পরীক্ষা' }
];

for (const [paper, chapters] of Object.entries(curriculum)) {
  for (const ch of chapters) {
    const dir = path.join(__dirname, 'docs', paper, ch);
    fs.mkdirSync(dir, { recursive: true });

    for (const item of modules) {
      const filePath = path.join(dir, item.file);
      const content = `---\nid: ${item.id}\ntitle: ${item.title}\n---\n\n# ${item.title}\n\nকনটেন্ট শীঘ্রই আপলোড করা হবে।\n`;
      fs.writeFileSync(filePath, content, 'utf8');
    }
  }
}

console.log('সব অধ্যায়ের ৫টি করে সমন্বিত ফাইল তৈরি সম্পন্ন হয়েছে!');