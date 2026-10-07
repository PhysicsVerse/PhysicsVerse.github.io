import React, { useState } from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';

const admissionData = {
  paper1: [
    { name: 'অধ্যায় ১: ভৌতজগত ও পরিমাপ', path: 'ch01-physical-world' },
    { name: 'অধ্যায় ২: ভেক্টর', path: 'ch02-vectors' },
    { name: 'অধ্যায় ৩: গতিবিদ্যা', path: 'ch03-dynamics' },
    { name: 'অধ্যায় ৪: নিউটনিয়ান বলবিদ্যা', path: 'ch04-newtonian-mechanics' },
    { name: 'অধ্যায় ৫: কাজ, শক্তি ও ক্ষমতা', path: 'ch05-work-energy-power' },
    { name: 'অধ্যায় ৬: মহাকর্ষ ও অভিকর্ষ', path: 'ch06-gravitation' },
    { name: 'অধ্যায় ৭: পদার্থের গাঠনিক ধর্ম', path: 'ch07-structural-properties' },
    { name: 'অধ্যায় ৮: পর্যাবৃত্তিক গতি', path: 'ch08-periodic-motion' },
    { name: 'অধ্যায় ৯: তরঙ্গ', path: 'ch09-waves' },
    { name: 'অধ্যায় ১০: আদর্শ গ্যাস ও গতিতত্ত্ব', path: 'ch10-ideal-gas' },
  ],
  paper2: [
    { name: 'অধ্যায় ১: তাপগতিবিদ্যা', path: 'ch11-thermodynamics' },
    { name: 'অধ্যায় ২: স্থির তড়িৎ', path: 'ch12-static-electricity' },
    { name: 'অধ্যায় ৩: চল তড়িৎ', path: 'ch13-current-electricity' },
    { name: 'অধ্যায় ৪: তড়িৎ প্রবাহের চৌম্বক ক্রিয়া ও চুম্বকত্ব', path: 'ch14-magnetic-effects' },
    { name: 'অধ্যায় ৫: তাড়িতচৌম্বকীয় আবেশ ও পরিবর্তী প্রবাহ', path: 'ch15-emi-ac' },
    { name: 'অধ্যায় ৬: জ্যামিতিক আলোকবিজ্ঞান', path: 'ch16-geometrical-optics' },
    { name: 'অধ্যায় ৭: ভৌত আলোকবিজ্ঞান', path: 'ch17-wave-optics' },
    { name: 'অধ্যায় ৮: আধুনিক পদার্থবিজ্ঞানের সূচনা', path: 'ch18-modern-physics' },
    { name: 'অধ্যায় ৯: পরমাণুর মডেল ও নিউক্লিয়ার পদার্থবিজ্ঞান', path: 'ch19-atomic-nuclear' },
    { name: 'অধ্যায় ১০: সেমিকন্ডাক্টর ও ইলেক্ট্রনিক্স', path: 'ch20-semiconductor' },
    { name: 'অধ্যায় ১১: জ্যোতির্বিজ্ঞান', path: 'ch21-astronomy' },
  ]
};

export default function CurriculumAdmission() {
  const [selectedPaper, setSelectedPaper] = useState('paper1');
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (idx) => setOpenIndex(openIndex === idx ? null : idx);
  const currentChapters = admissionData[selectedPaper];

  return (
    <Layout title="এডমিশন ফিজিক্স সলিউশন">
      <main style={{ maxWidth: '820px', margin: '0 auto', padding: '3.5rem 1.2rem 6rem 1.2rem' }}>
        
        {/* টপ হেডার ও হোমপেজে ফেরার লিংক */}
        <div style={{ marginBottom: '2.5rem', textAlign: 'center' }}>
          <Link
            to="/"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              color: '#fbbf24',
              textDecoration: 'none',
              fontWeight: '700',
              fontSize: '0.95rem',
              padding: '0.35rem 0.9rem',
              borderRadius: '999px',
              backgroundColor: 'rgba(251, 191, 36, 0.08)',
              border: '1px solid rgba(251, 191, 36, 0.3)'
            }}
          >
            ← মূল ড্যাশবোর্ডে ফিরে যান
          </Link>

          <h1 style={{
            fontSize: '2.4rem',
            fontWeight: '900',
            marginTop: '1.2rem',
            marginBottom: '0.5rem',
            color: '#ffffff'
          }}>
            এডমিশন ফিজিক্স সলিউশন
          </h1>
          <p style={{ color: '#94a3b8', fontSize: '1.05rem', margin: 0 }}>
            ভার্সিটি ও ইঞ্জিনিয়ারিং ভর্তি প্রস্তুতির পত্র ও অধ্যায় নির্বাচন করুন:
          </p>
        </div>

        {/* ১ম ও ২য় পত্র নির্বাচন করার গ্লাস ট্যাব বাটন */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '2.5rem' }}>
          <button
            onClick={() => { setSelectedPaper('paper1'); setOpenIndex(null); }}
            style={{
              flex: '1',
              maxWidth: '220px',
              padding: '0.85rem',
              borderRadius: '16px',
              fontWeight: '800',
              fontSize: '1rem',
              cursor: 'pointer',
              border: selectedPaper === 'paper1' ? '1.5px solid #fbbf24' : '1px solid rgba(255, 255, 255, 0.1)',
              background: selectedPaper === 'paper1' 
                ? 'linear-gradient(135deg, rgba(251, 191, 36, 0.2) 0%, rgba(245, 158, 11, 0.1) 100%)' 
                : 'rgba(15, 23, 42, 0.6)',
              color: selectedPaper === 'paper1' ? '#fbbf24' : '#94a3b8',
              boxShadow: selectedPaper === 'paper1' ? '0 4px 20px rgba(251, 191, 36, 0.2)' : 'none',
              transition: 'all 0.25s ease'
            }}
          >
            ⚛️ ১ম পত্র
          </button>

          <button
            onClick={() => { setSelectedPaper('paper2'); setOpenIndex(null); }}
            style={{
              flex: '1',
              maxWidth: '220px',
              padding: '0.85rem',
              borderRadius: '16px',
              fontWeight: '800',
              fontSize: '1rem',
              cursor: 'pointer',
              border: selectedPaper === 'paper2' ? '1.5px solid #fbbf24' : '1px solid rgba(255, 255, 255, 0.1)',
              background: selectedPaper === 'paper2' 
                ? 'linear-gradient(135deg, rgba(251, 191, 36, 0.2) 0%, rgba(245, 158, 11, 0.1) 100%)' 
                : 'rgba(15, 23, 42, 0.6)',
              color: selectedPaper === 'paper2' ? '#fbbf24' : '#94a3b8',
              boxShadow: selectedPaper === 'paper2' ? '0 4px 20px rgba(251, 191, 36, 0.2)' : 'none',
              transition: 'all 0.25s ease'
            }}
          >
            ⚡ ২য় পত্র
          </button>
        </div>

        {/* অধ্যায়ের কসমিক তালিকা */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {currentChapters.map((ch, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} style={{
                borderRadius: '20px',
                border: isOpen ? '1.5px solid rgba(251, 191, 36, 0.6)' : '1px solid rgba(255, 255, 255, 0.08)',
                backgroundColor: isOpen ? 'rgba(30, 20, 10, 0.9)' : 'rgba(15, 23, 42, 0.65)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                boxShadow: isOpen ? '0 15px 35px -10px rgba(251, 191, 36, 0.25)' : '0 10px 25px -10px rgba(0, 0, 0, 0.6)',
                transition: 'all 0.3s ease',
                overflow: 'hidden'
              }}>
                <button
                  onClick={() => toggle(idx)}
                  style={{
                    width: '100%',
                    padding: '1.3rem 1.6rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    background: isOpen ? 'linear-gradient(90deg, rgba(251, 191, 36, 0.1), transparent)' : 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left'
                  }}
                >
                  <span style={{
                    fontSize: '1.18rem',
                    fontWeight: '700',
                    color: isOpen ? '#fbbf24' : '#f8fafc'
                  }}>
                    {ch.name}
                  </span>
                  <span style={{
                    fontSize: '1rem',
                    fontWeight: 'bold',
                    color: isOpen ? '#fbbf24' : '#94a3b8',
                    transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.25s ease'
                  }}>
                    ▼
                  </span>
                </button>

                {isOpen && (
                  <div style={{
                    padding: '1.4rem',
                    borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                    backgroundColor: 'rgba(8, 4, 2, 0.5)'
                  }}>
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                      gap: '0.75rem',
                      marginBottom: '0.85rem'
                    }}>
                      <Link
                        to={`/docs/admission/${ch.path}/theory-shortcuts`}
                        style={{
                          padding: '0.8rem',
                          borderRadius: '12px',
                          backgroundColor: 'rgba(255, 255, 255, 0.04)',
                          border: '1px solid rgba(255, 255, 255, 0.1)',
                          color: '#e2e8f0',
                          fontWeight: '700',
                          fontSize: '0.95rem',
                          textAlign: 'center',
                          textDecoration: 'none',
                          display: 'block'
                        }}
                      >
                        📖 থিওরি ও শর্টকাট
                      </Link>

                      <Link
                        to={`/docs/admission/${ch.path}/practice-problems`}
                        style={{
                          padding: '0.8rem',
                          borderRadius: '12px',
                          backgroundColor: 'rgba(255, 255, 255, 0.04)',
                          border: '1px solid rgba(255, 255, 255, 0.1)',
                          color: '#e2e8f0',
                          fontWeight: '700',
                          fontSize: '0.95rem',
                          textAlign: 'center',
                          textDecoration: 'none',
                          display: 'block'
                        }}
                      >
                        🎯 অনুশীলনী সমস্যা
                      </Link>
                    </div>

                    <Link
                      to={`/docs/admission/${ch.path}/exam`}
                      style={{
                        display: 'block',
                        borderRadius: '12px',
                        padding: '0.85rem',
                        fontSize: '1rem',
                        fontWeight: '800',
                        background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
                        color: '#ffffff',
                        textAlign: 'center',
                        textDecoration: 'none',
                        boxShadow: '0 6px 20px rgba(245, 158, 11, 0.35)'
                      }}
                    >
                      ⏱️ এডমিশন মক টেস্ট দিন →
                    </Link>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </main>
    </Layout>
  );
}