const fs = require('fs');
const path = require('path');

// ২য় পত্রের অধ্যায়সমূহ
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

// এডমিশনের অধ্যায়সমূহ (১ম ও ২য় পত্র সমন্বিত)
const admissionChapters = [
  // ১ম পত্র
  { dir: 'ch01-physical-world', title: 'ভৌতজগত ও পরিমাপ', paper: '১ম পত্র' },
  { dir: 'ch02-vectors', title: 'ভেক্টর', paper: '১ম পত্র' },
  { dir: 'ch03-dynamics', title: 'গতিবিদ্যা', paper: '১ম পত্র' },
  { dir: 'ch04-newtonian-mechanics', title: 'নিউটনিয়ান বলবিদ্যা', paper: '১ম পত্র' },
  { dir: 'ch05-work-energy-power', title: 'কাজ, শক্তি ও ক্ষমতা', paper: '১ম পত্র' },
  { dir: 'ch06-gravitation', title: 'মহাকর্ষ ও অভিকর্ষ', paper: '১ম পত্র' },
  { dir: 'ch07-structural-properties', title: 'পদার্থের গাঠনিক ধর্ম', paper: '১ম পত্র' },
  { dir: 'ch08-periodic-motion', title: 'পর্যাবৃত্তিক গতি', paper: '১ম পত্র' },
  { dir: 'ch09-waves', title: 'তরঙ্গ', paper: '১ম পত্র' },
  { dir: 'ch10-ideal-gas', title: 'আদর্শ গ্যাস ও গতিতত্ত্ব', paper: '১ম পত্র' },
  // ২য় পত্র
  { dir: 'ch11-thermodynamics', title: 'তাপগতিবিদ্যা', paper: '২য় পত্র' },
  { dir: 'ch12-static-electricity', title: 'স্থির তড়িৎ', paper: '২য় পত্র' },
  { dir: 'ch13-current-electricity', title: 'চল তড়িৎ', paper: '২য় পত্র' },
  { dir: 'ch14-magnetic-effects', title: 'চৌম্বক ক্রিয়া ও চুম্বকত্ব', paper: '২য় পত্র' },
  { dir: 'ch15-emi-ac', title: 'তাড়িতচৌম্বকীয় আবেশ ও পরিবর্তী প্রবাহ', paper: '২য় পত্র' },
  { dir: 'ch16-geometrical-optics', title: 'জ্যামিতিক আলোকবিজ্ঞান', paper: '২য় পত্র' },
  { dir: 'ch17-wave-optics', title: 'ভৌত আলোকবিজ্ঞান', paper: '২য় পত্র' },
  { dir: 'ch18-modern-physics', title: 'আধুনিক পদার্থবিজ্ঞান', paper: '২য় পত্র' },
  { dir: 'ch19-atomic-nuclear', title: 'পরমাণু মডেল ও নিউক্লিয়ার পদার্থবিজ্ঞান', paper: '২য় পত্র' },
  { dir: 'ch20-semiconductor', title: 'সেমিকন্ডাক্টর ও ইলেক্ট্রনিক্স', paper: '২য় পত্র' },
  { dir: 'ch21-astronomy', title: 'জ্যোতির্বিজ্ঞান', paper: '২য় পত্র' }
];

// ২য় পত্রের ফাইল তৈরি
paper2Chapters.forEach((ch) => {
  const dirPath = path.join(__dirname, 'docs', 'paper-2', ch.dir);
  fs.mkdirSync(dirPath, { recursive: true });

  const content = `---
id: exam
title: ${ch.title} - অধ্যায়ভিত্তিক পরীক্ষা
---

import Quiz from '@site/src/components/Quiz';

export const questions = [
  {
    question: "${ch.title} সম্পর্কিত মৌলিক কনসেপ্ট যাচাইকরণ নমুনা প্রশ্ন?",
    options: ["বিকল্প ক", "বিকল্প খ", "বিকল্প গ", "বিকল্প ঘ"],
    correctAnswer: 0,
    explanation: "অধ্যায়ের বিস্তারিত পাঠ্য অনুযায়ী বিকল্প ক সঠিক।"
  }
];

# ${ch.title}: অধ্যায়ভিত্তিক মূল্যায়ন

নির্ধারিত সময়ের মধ্যে পরীক্ষা সম্পন্ন করে নিজের প্রস্তুতি যাচাই করো। প্রতিটি ভুল উত্তরের জন্য ০.২৫ নম্বর কাটা যাবে।

<Quiz 
  title="${ch.title} লাইভ টেস্ট" 
  timeInMinutes={10} 
  questions={questions} 
/>
`;

  fs.writeFileSync(path.join(dirPath, 'exam.md'), content, 'utf8');
});

// এডমিশন অংশের ফাইল তৈরি
admissionChapters.forEach((ch) => {
  const dirPath = path.join(__dirname, 'docs', 'admission', ch.dir);
  fs.mkdirSync(dirPath, { recursive: true });

  const content = `---
id: exam
title: ${ch.title} - এডমিশন মক টেস্ট
---

import Quiz from '@site/src/components/Quiz';

export const questions = [
  {
    question: "${ch.title} (${ch.paper}) এডমিশন স্ট্যান্ডার্ড নমুনা প্রশ্ন?",
    options: ["বিকল্প ক", "বিকল্প খ", "বিকল্প গ", "বিকল্প ঘ"],
    correctAnswer: 0,
    explanation: "বিশ্ববিদ্যালয় ভর্তি পরীক্ষার প্যাটার্ন অনুযায়ী বিকল্প ক সঠিক উত্তর।"
  }
];

# ${ch.title}: এডমিশন মডেল টেস্ট (${ch.paper})

বিশ্ববিদ্যালয় ও প্রকৌশল ভর্তি পরীক্ষার উপযোগী স্ট্যান্ডার্ড এমসিকিউ মক টেস্ট। প্রতিটি ভুল উত্তরের জন্য নেগেটিভ মার্কিং রয়েছে।

<Quiz 
  title="${ch.title} এডমিশন টেস্ট" 
  timeInMinutes={15} 
  questions={questions} 
/>
`;

  fs.writeFileSync(path.join(dirPath, 'exam.md'), content, 'utf8');
});

console.log('২য় পত্রের ১১টি এবং এডমিশনের ২১টি অধ্যায়ের exam.md ফাইল সফলভাবে তৈরি হয়েছে!');