const fs = require('fs');
const path = require('path');

// ২য় পত্রের ১১টি অধ্যায়
const paper2Chapters = [
  { dir: 'ch01-thermodynamics', title: 'তাপগতিবিদ্যা' },
  { dir: 'ch02-static-electricity', title: 'স্থির তড়িৎ' },
  { dir: 'ch03-current-electricity', title: 'চল তড়িৎ' },
  { dir: 'ch04-magnetic-effects', title: 'তড়িৎ প্রবাহের চৌম্বক ক্রিয়া ও চুম্বকত্ব' },
  { dir: 'ch05-emi-ac', title: 'তাড়িতচৌম্বকীয় আবেশ ও পরিবর্তী প্রবাহ' },
  { dir: 'ch06-geometrical-optics', title: 'জ্যামিতিক আলোকবিজ্ঞান' },
  { dir: 'ch07-wave-optics', title: 'ভৌত আলোকবিজ্ঞান' },
  { dir: 'ch08-modern-physics', title: 'আধুনিক পদার্থবিজ্ঞানের সূচনা' },
  { dir: 'ch09-atomic-nuclear', title: 'পরমাণুর মডেল ও নিউক্লিয়ার পদার্থবিজ্ঞান' },
  { dir: 'ch10-semiconductor', title: 'সেমিকন্ডাক্টর ও ইলেক্ট্রনিক্স' },
  { dir: 'ch11-astronomy', title: 'জ্যোতির্বিজ্ঞান' }
];

const paper2Files = [
  { file: 'theory.md', id: 'theory', title: 'সম্পূর্ণ অধ্যায় থিওরি' },
  { file: 'conceptual.md', id: 'conceptual', title: 'জ্ঞান ও অনুধাবনমূলক' },
  { file: 'cq.md', id: 'cq', title: 'সৃজনশীল প্রশ্ন (CQ)' },
  { file: 'mcq.md', id: 'mcq', title: 'বহুনির্বাচনী প্রশ্ন (MCQ)' },
  { file: 'exam.md', id: 'exam', title: 'অধ্যায়ভিত্তিক পরীক্ষা' }
];

paper2Chapters.forEach(ch => {
  const dirPath = path.join(__dirname, 'docs', 'paper-2', ch.dir);
  fs.mkdirSync(dirPath, { recursive: true });
  paper2Files.forEach(f => {
    const filePath = path.join(dirPath, f.file);
    if (!fs.existsSync(filePath)) {
      const content = `---\nid: ${f.id}\ntitle: ${ch.title} - ${f.title}\n---\n\n# ${ch.title}: ${f.title}\n\nকনটেন্ট শীঘ্রই আপলোড করা হবে।\n`;
      fs.writeFileSync(filePath, content, 'utf8');
    }
  });
});

// এডমিশনের অধ্যায়সমূহ (১ম ও ২য় পত্র মিলিয়ে ২১টি)
const admissionChapters = [
  'ch01-physical-world', 'ch02-vectors', 'ch03-dynamics', 'ch04-newtonian-mechanics',
  'ch05-work-energy-power', 'ch06-gravitation', 'ch07-structural-properties',
  'ch08-periodic-motion', 'ch09-waves', 'ch10-ideal-gas',
  'ch11-thermodynamics', 'ch12-static-electricity', 'ch13-current-electricity',
  'ch14-magnetic-effects', 'ch15-emi-ac', 'ch16-geometrical-optics',
  'ch17-wave-optics', 'ch18-modern-physics', 'ch19-atomic-nuclear',
  'ch20-semiconductor', 'ch21-astronomy'
];

const admissionFiles = [
  { file: 'theory-shortcuts.md', id: 'theory-shortcuts', title: 'থিওরি ও শর্টকাট' },
  { file: 'practice-problems.md', id: 'practice-problems', title: 'অনুশীলনী সমস্যা' },
  { file: 'exam.md', id: 'exam', title: 'এডমিশন মক টেস্ট' }
];

admissionChapters.forEach(chDir => {
  const dirPath = path.join(__dirname, 'docs', 'admission', chDir);
  fs.mkdirSync(dirPath, { recursive: true });
  admissionFiles.forEach(f => {
    const filePath = path.join(dirPath, f.file);
    if (!fs.existsSync(filePath)) {
      const content = `---\nid: ${f.id}\ntitle: ${f.title}\n---\n\n# ${f.title}\n\nকনটেন্ট শীঘ্রই আপলোড করা হবে।\n`;
      fs.writeFileSync(filePath, content, 'utf8');
    }
  });
});

console.log('২য় পত্র ও এডমিশনের সব ফাইল এবং আইডি পারফেক্টলি তৈরি ও নিশ্চিত করা হয়েছে!');