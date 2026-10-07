import React, { useState } from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';

const chapters = [
  { name: 'অধ্যায় ১: তাপগতিবিদ্যা', path: 'ch01-thermodynamics' },
  { name: 'অধ্যায় ২: স্থির তড়িৎ', path: 'ch02-static-electricity' },
  { name: 'অধ্যায় ৩: চল তড়িৎ', path: 'ch03-current-electricity' },
  { name: 'অধ্যায় ৪: তড়িৎ প্রবাহের চৌম্বক ক্রিয়া ও চুম্বকত্ব', path: 'ch04-magnetic-effects' },
  { name: 'অধ্যায় ৫: তাড়িতচৌম্বকীয় আবেশ ও পরিবর্তী প্রবাহ', path: 'ch05-emi-ac' },
  { name: 'অধ্যায় ৬: জ্যামিতিক আলোকবিজ্ঞান', path: 'ch06-geometrical-optics' },
  { name: 'অধ্যায় ৭: ভৌত আলোকবিজ্ঞান', path: 'ch07-wave-optics' },
  { name: 'অধ্যায় ৮: আধুনিক পদার্থবিজ্ঞানের সূচনা', path: 'ch08-modern-physics' },
  { name: 'অধ্যায় ৯: পরমাণুর মডেল ও নিউক্লিয়ার পদার্থবিজ্ঞান', path: 'ch09-atomic-nuclear' },
  { name: 'অধ্যায় ১০: সেমিকন্ডাক্টর ও ইলেক্ট্রনিক্স', path: 'ch10-semiconductor' },
  { name: 'অধ্যায় ১১: জ্যোতির্বিজ্ঞান', path: 'ch11-astronomy' },
];

export default function CurriculumPaper2() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (idx) => setOpenIndex(openIndex === idx ? null : idx);

  return (
    <Layout title="পদার্থবিজ্ঞান ২য় পত্র কারিকুলাম">
      <main style={{ maxWidth: '820px', margin: '0 auto', padding: '3.5rem 1.2rem 6rem 1.2rem' }}>
        
        {/* টপ হেডার ও হোমপেজে ফেরার লিংক */}
        <div style={{ marginBottom: '2.5rem', textAlign: 'center' }}>
          <Link
            to="/"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              color: '#c084fc',
              textDecoration: 'none',
              fontWeight: '700',
              fontSize: '0.95rem',
              padding: '0.35rem 0.9rem',
              borderRadius: '999px',
              backgroundColor: 'rgba(192, 132, 252, 0.08)',
              border: '1px solid rgba(192, 132, 252, 0.3)'
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
            পদার্থবিজ্ঞান ২য় পত্র
          </h1>
          <p style={{ color: '#94a3b8', fontSize: '1.05rem', margin: 0 }}>
            যেকোনো অধ্যায়ে ক্লিক করে প্রয়োজনীয় স্টাডি মডিউল বেছে নিন:
          </p>
        </div>

        {/* ১১টি অধ্যায়ের কসমিক অ্যাকর্ডিয়ন তালিকা */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {chapters.map((ch, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} style={{
                borderRadius: '20px',
                border: isOpen ? '1.5px solid rgba(192, 132, 252, 0.6)' : '1px solid rgba(255, 255, 255, 0.08)',
                backgroundColor: isOpen ? 'rgba(24, 16, 42, 0.9)' : 'rgba(15, 23, 42, 0.65)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                boxShadow: isOpen ? '0 15px 35px -10px rgba(192, 132, 252, 0.25)' : '0 10px 25px -10px rgba(0, 0, 0, 0.6)',
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
                    background: isOpen ? 'linear-gradient(90deg, rgba(192, 132, 252, 0.1), transparent)' : 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left'
                  }}
                >
                  <span style={{
                    fontSize: '1.18rem',
                    fontWeight: '700',
                    color: isOpen ? '#c084fc' : '#f8fafc'
                  }}>
                    {ch.name}
                  </span>
                  <span style={{
                    fontSize: '1rem',
                    fontWeight: 'bold',
                    color: isOpen ? '#c084fc' : '#94a3b8',
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
                    backgroundColor: 'rgba(5, 3, 12, 0.5)'
                  }}>
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(135px, 1fr))',
                      gap: '0.75rem',
                      marginBottom: '0.85rem'
                    }}>
                      <Link
                        to={`/docs/paper-2/${ch.path}/theory`}
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
                        to={`/docs/paper-2/${ch.path}/conceptual`}
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
                        to={`/docs/paper-2/${ch.path}/cq`}
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
                        to={`/docs/paper-2/${ch.path}/mcq`}
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
                      to={`/docs/paper-2/${ch.path}/exam`}
                      style={{
                        display: 'block',
                        borderRadius: '12px',
                        padding: '0.85rem',
                        fontSize: '1rem',
                        fontWeight: '800',
                        background: 'linear-gradient(135deg, #a855f7 0%, #6366f1 100%)',
                        color: '#ffffff',
                        textAlign: 'center',
                        textDecoration: 'none',
                        boxShadow: '0 6px 20px rgba(168, 85, 247, 0.35)'
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