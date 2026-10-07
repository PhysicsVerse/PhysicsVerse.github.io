import React from 'react';
import Link from '@docusaurus/Link';
import { useLocation, useHistory } from '@docusaurus/router';

export default function TopNavBar() {
  const history = useHistory();
  const location = useLocation();
  const currentPath = location.pathname;

  let curriculumLink = '/';
  let curriculumLabel = 'মূল পাতা';

  if (currentPath.includes('/paper-1/')) {
    curriculumLink = '/curriculum-paper-1';
    curriculumLabel = '১ম পত্র কারিকুলাম';
  } else if (currentPath.includes('/paper-2/')) {
    curriculumLink = '/curriculum-paper-2';
    curriculumLabel = '২য় পত্র কারিকুলাম';
  } else if (currentPath.includes('/admission/')) {
    curriculumLink = '/curriculum-admission';
    curriculumLabel = 'এডমিশন কারিকুলাম';
  }

  // হোম পেজে থাকলে ব্যাক বার দেখানোর প্রয়োজন নেই
  if (currentPath === '/') {
    return null;
  }

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0.75rem 1.2rem',
        marginBottom: '1.8rem',
        borderRadius: '14px',
        backgroundColor: 'rgba(15, 23, 42, 0.85)',
        backdropFilter: 'blur(12px)',
        border: '1px solid rgba(0, 242, 254, 0.25)',
        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.45)',
        gap: '0.8rem',
        flexWrap: 'wrap'
      }}
    >
      {/* ১. ব্রাউজার হিস্ট্রি অনুযায়ী পূর্ববর্তী পেজে ফেরার বাটন */}
      <button
        onClick={() => history.goBack()}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.45rem',
          padding: '0.5rem 1rem',
          borderRadius: '10px',
          backgroundColor: 'rgba(255, 255, 255, 0.07)',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          color: '#f8fafc',
          fontWeight: '700',
          fontSize: '0.88rem',
          cursor: 'pointer',
          transition: 'all 0.2s ease'
        }}
        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.15)')}
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.07)')}
      >
        <span>←</span>
        <span>পেছনে যাও</span>
      </button>

      {/* ২. কারিকুলাম ও ড্যাশবোর্ডের সরাসরি লিঙ্ক */}
      <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'center' }}>
        <Link
          to="/"
          style={{
            padding: '0.5rem 0.9rem',
            borderRadius: '10px',
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            color: '#cbd5e1',
            fontWeight: '600',
            fontSize: '0.85rem',
            textDecoration: 'none'
          }}
        >
          🌌 ড্যাশবোর্ড
        </Link>

        <Link
          to={curriculumLink}
          style={{
            padding: '0.5rem 1.1rem',
            borderRadius: '10px',
            background: 'linear-gradient(135deg, #00c6ff 0%, #0072ff 100%)',
            color: '#ffffff',
            fontWeight: '800',
            fontSize: '0.86rem',
            textDecoration: 'none',
            boxShadow: '0 4px 15px rgba(0, 198, 255, 0.3)'
          }}
        >
          🚀 {curriculumLabel}
        </Link>
      </div>
    </div>
  );
}