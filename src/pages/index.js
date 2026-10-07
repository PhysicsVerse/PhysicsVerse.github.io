import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';

export default function Home() {
  const portals = [
    {
      title: 'পদার্থবিজ্ঞান ১ম পত্র',
      badge: 'গতিধারা',
      accent: '#00f2fe',
      btnBg: 'linear-gradient(135deg, #00c6ff 0%, #0072ff 100%)',
      cardBg: 'linear-gradient(160deg, rgba(10, 25, 47, 0.85) 0%, rgba(4, 13, 26, 0.95) 100%)',
      link: '/curriculum-paper-1',
      // ১: কোয়ান্টাম অ্যাটম ও অরবিটাল গ্রাফিক্স
      graphics: (
        <svg viewBox="0 0 100 100" style={{ width: '85px', height: '85px' }}>
          <defs>
            <radialGradient id="atomCore" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#00f2fe" />
              <stop offset="100%" stopColor="#0072ff" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="50" cy="50" r="14" fill="url(#atomCore)" />
          <circle cx="50" cy="50" r="5" fill="#ffffff" />
          <ellipse cx="50" cy="50" rx="38" ry="13" fill="none" stroke="#00f2fe" strokeWidth="1.5" strokeDasharray="3 3" transform="rotate(30 50 50)" />
          <ellipse cx="50" cy="50" rx="38" ry="13" fill="none" stroke="#00f2fe" strokeWidth="1.5" transform="rotate(90 50 50)" />
          <ellipse cx="50" cy="50" rx="38" ry="13" fill="none" stroke="#00f2fe" strokeWidth="1.5" strokeDasharray="5 3" transform="rotate(150 50 50)" />
          <circle cx="78" cy="35" r="3" fill="#00f2fe" />
          <circle cx="50" cy="12" r="3" fill="#00f2fe" />
        </svg>
      )
    },
    {
      title: 'পদার্থবিজ্ঞান ২য় পত্র',
      badge: 'শক্তিজাল',
      accent: '#c084fc',
      btnBg: 'linear-gradient(135deg, #a855f7 0%, #6366f1 100%)',
      cardBg: 'linear-gradient(160deg, rgba(30, 16, 54, 0.85) 0%, rgba(12, 6, 26, 0.95) 100%)',
      link: '/curriculum-paper-2',
      // ২: ম্যাগনেটিক ফিল্ড ও এনার্জি ওয়েভ গ্রাফিক্স
      graphics: (
        <svg viewBox="0 0 100 100" style={{ width: '85px', height: '85px' }}>
          <defs>
            <linearGradient id="waveGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#c084fc" />
              <stop offset="100%" stopColor="#6366f1" />
            </linearGradient>
          </defs>
          <path d="M10 50 Q 30 15, 50 50 T 90 50" fill="none" stroke="#c084fc" strokeWidth="2.5" />
          <path d="M10 50 Q 30 85, 50 50 T 90 50" fill="none" stroke="#818cf8" strokeWidth="1.5" strokeDasharray="4 2" />
          <circle cx="50" cy="50" r="18" fill="none" stroke="#e879f9" strokeWidth="1.2" opacity="0.6" />
          <circle cx="50" cy="50" r="32" fill="none" stroke="#a855f7" strokeWidth="1" strokeDasharray="6 4" opacity="0.4" />
          <polygon points="50,30 55,45 70,50 55,55 50,70 45,55 30,50 45,45" fill="url(#waveGrad)" />
        </svg>
      )
    },
    {
      title: 'এডমিশন ফিজিক্স সলিউশন',
      badge: 'মহাযাত্রা',
      accent: '#fbbf24',
      btnBg: 'linear-gradient(135deg, #f59e0b 0%, #ea580c 100%)',
      cardBg: 'linear-gradient(160deg, rgba(45, 26, 12, 0.85) 0%, rgba(20, 10, 4, 0.95) 100%)',
      link: '/curriculum-admission',
      // ৩: ব্ল্যাকহোল, ইভেন্ট হরাইজন ও গ্যালাক্সি গ্রাফিক্স
      graphics: (
        <svg viewBox="0 0 100 100" style={{ width: '85px', height: '85px' }}>
          <defs>
            <radialGradient id="holeGlow" cx="50%" cy="50%" r="50%">
              <stop offset="20%" stopColor="#050508" />
              <stop offset="65%" stopColor="#f59e0b" />
              <stop offset="100%" stopColor="#ea580c" stopOpacity="0" />
            </radialGradient>
          </defs>
          <ellipse cx="50" cy="50" rx="42" ry="15" fill="none" stroke="#f59e0b" strokeWidth="2" transform="rotate(-20 50 50)" />
          <ellipse cx="50" cy="50" rx="34" ry="11" fill="none" stroke="#fbbf24" strokeWidth="1" strokeDasharray="5 3" transform="rotate(-20 50 50)" />
          <circle cx="50" cy="50" r="22" fill="url(#holeGlow)" />
          <circle cx="50" cy="50" r="12" fill="#03050a" stroke="#fbbf24" strokeWidth="1.5" />
          <path d="M50 15 L50 25 M50 75 L50 85 M15 50 L25 50 M75 50 L85 50" stroke="#f59e0b" strokeWidth="1.5" opacity="0.6" />
        </svg>
      )
    }
  ];

  return (
    <Layout title="PhysicsVerse">
      <main style={{
        minHeight: '100vh',
        backgroundColor: '#030712',
        backgroundImage: `
          radial-gradient(ellipse 90% 60% at 50% -20%, rgba(0, 242, 254, 0.18) 0%, transparent 65%),
          radial-gradient(circle at 12% 50%, rgba(168, 85, 247, 0.12) 0%, transparent 40%),
          radial-gradient(circle at 88% 70%, rgba(245, 158, 11, 0.08) 0%, transparent 40%)
        `,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '4.5rem 1.5rem',
        position: 'relative'
      }}>

        {/* কসমিক হেডার */}
        <div style={{ textAlign: 'center', marginBottom: '3.8rem' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.6rem',
            padding: '0.4rem 1.2rem',
            borderRadius: '999px',
            backgroundColor: 'rgba(255, 255, 255, 0.04)',
            border: '1px solid rgba(0, 242, 254, 0.25)',
            boxShadow: '0 0 25px rgba(0, 242, 254, 0.15)',
            marginBottom: '1.2rem'
          }}>
            <span style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: '#00f2fe',
              boxShadow: '0 0 10px #00f2fe'
            }}></span>
            <span style={{
              color: '#00f2fe',
              fontSize: '0.8rem',
              fontWeight: '800',
              letterSpacing: '1.5px',
              textTransform: 'uppercase'
            }}>
              Physics × Universe
            </span>
          </div>

          <h1 style={{
            fontSize: 'clamp(3rem, 7vw, 5rem)',
            fontWeight: '900',
            lineHeight: '1.1',
            margin: '0',
            letterSpacing: '-1.5px',
            color: '#ffffff'
          }}>
            Physics<span style={{
              background: 'linear-gradient(135deg, #00f2fe 0%, #c084fc 60%, #fbbf24 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>Verse</span>
          </h1>
        </div>

        {/* ৩টি কসমিক আর্ট কার্ড */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 350px))',
          gap: '2.2rem',
          justifyContent: 'center',
          width: '100%',
          maxWidth: '1160px'
        }}>
          {portals.map((item, idx) => (
            <Link
              key={idx}
              to={item.link}
              style={{ textDecoration: 'none', color: 'inherit', display: 'flex' }}
            >
              <div
                style={{
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  padding: '2.8rem 2rem 2.2rem 2rem',
                  borderRadius: '26px',
                  background: item.cardBg,
                  border: '1.5px solid rgba(255, 255, 255, 0.08)',
                  backdropFilter: 'blur(16px)',
                  boxShadow: '0 20px 45px -15px rgba(0, 0, 0, 0.8)',
                  transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                  cursor: 'pointer',
                  position: 'relative'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)';
                  e.currentTarget.style.borderColor = `${item.accent}90`;
                  e.currentTarget.style.boxShadow = `0 25px 50px -10px ${item.accent}35`;
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                  e.currentTarget.style.boxShadow = '0 20px 45px -15px rgba(0, 0, 0, 0.8)';
                }}
              >
                {/* ব্যাজ */}
                <div style={{
                  fontSize: '0.72rem',
                  fontWeight: '800',
                  letterSpacing: '1.2px',
                  color: item.accent,
                  backgroundColor: `${item.accent}15`,
                  border: `1px solid ${item.accent}35`,
                  padding: '0.3rem 0.9rem',
                  borderRadius: '999px',
                  marginBottom: '1.8rem'
                }}>
                  {item.badge}
                </div>

                {/* কসমিক এসভিজি গ্রাফিক্স */}
                <div style={{
                  marginBottom: '1.8rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  filter: `drop-shadow(0 0 15px ${item.accent}40)`
                }}>
                  {item.graphics}
                </div>

                {/* টাইটেল */}
                <h2 style={{
                  fontSize: '1.5rem',
                  fontWeight: '800',
                  color: '#f8fafc',
                  marginBottom: '2rem'
                }}>
                  {item.title}
                </h2>

                {/* বাটন */}
                <div style={{
                  width: '100%',
                  padding: '0.85rem',
                  borderRadius: '14px',
                  background: item.btnBg,
                  color: '#ffffff',
                  fontWeight: '800',
                  fontSize: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  boxShadow: `0 8px 25px -5px ${item.accent}50`
                }}>
                  <span>প্রবেশ করো</span>
                  <span style={{ fontSize: '1.1rem' }}>→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </Layout>
  );
}