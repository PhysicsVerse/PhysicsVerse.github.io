const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, 'src', 'theme', 'DocItem', 'Layout');
fs.mkdirSync(targetDir, { recursive: true });

const content = `import React from 'react';
import Layout from '@theme-original/DocItem/Layout';
import Link from '@docusaurus/Link';
import { useLocation } from '@docusaurus/router';

export default function LayoutWrapper(props) {
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

  return (
    <>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0.8rem 1.2rem',
        marginBottom: '1.5rem',
        borderRadius: '12px',
        backgroundColor: 'rgba(2, 132, 199, 0.06)',
        border: '1.5px solid var(--ifm-color-primary-lighter)',
        gap: '0.8rem',
        flexWrap: 'wrap'
      }}>
        <Link
          to="/"
          className="button button--secondary button--sm"
          style={{ borderRadius: '8px', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '0.4rem' }}
        >
          🏠 মূল ড্যাশবোর্ড
        </Link>

        <Link
          to={curriculumLink}
          className="button button--primary button--sm"
          style={{ borderRadius: '8px', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '0.4rem' }}
        >
          📚 {curriculumLabel}
        </Link>
      </div>
      <Layout {...props} />
    </>
  );
}
`;

fs.writeFileSync(path.join(targetDir, 'index.js'), content, 'utf8');
console.log('src/theme/DocItem/Layout/index.js সফলভাবে তৈরি হয়েছে!');