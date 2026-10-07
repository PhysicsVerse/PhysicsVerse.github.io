import React, { useState } from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';

const chapters = [
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
];

export default function CurriculumPaper1() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (idx) => setOpenIndex(openIndex === idx ? null : idx);

  return (
    <Layout title="পদার্থবিজ্ঞান ১ম পত্র কারিকুলাম">
      <main style={{ maxWidth: '820px', margin: '0 auto', padding: '3.5rem 1.2rem 6rem 1.2rem' }}>
        
        {/* টপ হেডার ও হোমপেজে ফেরার লিংক */}
        <div style={{ marginBottom: '2.5rem', textAlign: 'center' }}>
          <Link
            to="/"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              color: '#00f2fe',
              textDecoration: 'none',
              fontWeight: '700',
              fontSize: '0.95rem',
              padding: '0.35rem 0.9rem',
              borderRadius: '999px',
              backgroundColor: 'rgba(0, 242, 254, 0.08)',
              border: '1px solid rgba(0, 242, 254, 0.25)'
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
            পদার্থবিজ্ঞান ১ম পত্র
          </h1>
          <p style={{ color: '#94a3b8', fontSize: '1.05rem', margin: 0 }}>
            যেকোনো অধ্যায়ে ক্লিক করে প্রয়োজনীয় স্টাডি মডিউল বেছে নিন:
          </p>
        </div>

        {/* ১০টি অধ্যায়ের কসমিক অ্যাকর্ডিয়ন তালিকা */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {chapters.map((ch, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} style={{
                borderRadius: '20px',
                border: isOpen ? '1.5px solid rgba(0, 242, 254, 0.6)' : '1px solid rgba(255, 255, 255, 0.08)',
                backgroundColor: isOpen ? 'rgba(15, 23, 42, 0.9)' : 'rgba(15, 23, 42, 0.65)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                boxShadow: isOpen ? '0 15px 35px -10px rgba(0, 242, 254, 0.25)' : '0 10px 25px -10px rgba(0, 0, 0, 0.6)',
                transition: 'all 0.3s ease',
                overflow: 'hidden'
              }}>
                {/* অধ্যায়ের টাইটেল বাটন */}
                <button
                  onClick={() => toggle(idx)}
                  style={{
                    width: '100%',
                    padding: '1.3rem 1.6rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    background: isOpen ? 'linear-gradient(90deg, rgba(0, 242, 254, 0.08), transparent)' : 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left'
                  }}
                >
                  <span style={{
                    fontSize: '1.18rem',
                    fontWeight: '700',
                    color: isOpen ? '#00f2fe' : '#f8fafc'
                  }}>
                    {ch.name}
                  </span>
                  <span style={{
                    fontSize: '1rem',
                    fontWeight: 'bold',
                    color: isOpen ? '#00f2fe' : '#94a3b8',
                    transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.25s ease'
                  }}>
                    ▼
                  </span>
                </button>

                {/* ক্লিকে খুলে যাওয়া ৪টি বাটন এবং পরীক্ষা বাটন */}
                {isOpen && (
                  <div style={{
                    padding: '1.4rem',
                    borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                    backgroundColor: 'rgba(3, 7, 18, 0.5)'
                  }}>
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(135px, 1fr))',
                      gap: '0.75rem',
                      marginBottom: '0.85rem'
                    }}>
                      <Link
                        to={`/docs/paper-1/${ch.path}/theory`}
                        style={{
                          padding: '0.75rem 0.5rem',
                          borderRadius: '12px',
                          backgroundColor: 'rgba(255, 255, 255, 0.04)',
                          border: '1px solid rgba(255, 255, 255, 0.1)',
                          color: '#e2e8f0',
                          fontWeight: '600',
                          fontSize: '0.9rem',
                          textAlign: 'center',
                          textDecoration: 'none',
                          display: 'block'
                        }}
                      >
                        📖 থিওরি
                      </Link>

                      <Link
                        to={`/docs/paper-1/${ch.path}/conceptual`}
                        style={{
                          padding: '0.75rem 0.5rem',
                          borderRadius: '12px',
                          backgroundColor: 'rgba(255, 255, 255, 0.04)',
                          border: '1px solid rgba(255, 255, 255, 0.1)',
                          color: '#e2e8f0',
                          fontWeight: '600',
                          fontSize: '0.9rem',
                          textAlign: 'center',
                          textDecoration: 'none',
                          display: 'block'
                        }}
                      >
                        💡 জ্ঞান-অনুধাবন
                      </Link>

                      <Link
                        to={`/docs/paper-1/${ch.path}/cq`}
                        style={{
                          padding: '0.75rem 0.5rem',
                          borderRadius: '12px',
                          backgroundColor: 'rgba(255, 255, 255, 0.04)',
                          border: '1px solid rgba(255, 255, 255, 0.1)',
                          color: '#e2e8f0',
                          fontWeight: '600',
                          fontSize: '0.9rem',
                          textAlign: 'center',
                          textDecoration: 'none',
                          display: 'block'
                        }}
                      >
                        📝 সৃজনশীল (CQ)
                      </Link>

                      <Link
                        to={`/docs/paper-1/${ch.path}/mcq`}
                        style={{
                          padding: '0.75rem 0.5rem',
                          borderRadius: '12px',
                          backgroundColor: 'rgba(255, 255, 255, 0.04)',
                          border: '1px solid rgba(255, 255, 255, 0.1)',
                          color: '#e2e8f0',
                          fontWeight: '600',
                          fontSize: '0.9rem',
                          textAlign: 'center',
                          textDecoration: 'none',
                          display: 'block'
                        }}
                      >
                        🔘 বহুনির্বাচনী
                      </Link>
                    </div>

                    {/* বড় পরীক্ষা বাটন */}
                    <Link
                      to={`/docs/paper-1/${ch.path}/exam`}
                      style={{
                        display: 'block',
                        borderRadius: '12px',
                        padding: '0.85rem',
                        fontSize: '1rem',
                        fontWeight: '800',
                        background: 'linear-gradient(135deg, #00c6ff 0%, #0072ff 100%)',
                        color: '#ffffff',
                        textAlign: 'center',
                        textDecoration: 'none',
                        boxShadow: '0 6px 20px rgba(0, 198, 255, 0.35)'
                      }}
                    >
                      ⏱️ অধ্যায়ভিত্তিক পরীক্ষা দিন →
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