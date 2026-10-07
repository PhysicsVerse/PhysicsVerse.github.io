import React, { useState, useEffect } from 'react';

export default function Quiz({ title, timeInMinutes = 5, questions = [] }) {
  const [userAnswers, setUserAnswers] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(timeInMinutes * 60);

  useEffect(() => {
    if (isSubmitted || timeLeft <= 0) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setIsSubmitted(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [isSubmitted, timeLeft]);

  const handleSelectOption = (qIndex, optionIndex) => {
    if (isSubmitted) return;
    setUserAnswers((prev) => ({ ...prev, [qIndex]: optionIndex }));
  };

  const calculateResults = () => {
    let correct = 0;
    let incorrect = 0;
    questions.forEach((q, idx) => {
      if (userAnswers[idx] !== undefined) {
        if (userAnswers[idx] === q.correctAnswer) correct += 1;
        else incorrect += 1;
      }
    });
    const unattempted = questions.length - (correct + incorrect);
    const score = (correct * 1 - incorrect * 0.25).toFixed(2);
    return { correct, incorrect, unattempted, score };
  };

  const results = isSubmitted ? calculateResults() : null;

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
  <div style={{
    width: '100%',
    boxSizing: 'border-box',
    borderRadius: '24px',
    padding: '2.5rem 2rem',
    margin: '2rem auto',
    backgroundColor: 'rgba(15, 23, 42, 0.85)',
    backdropFilter: 'blur(16px)',
    border: '1.5px solid rgba(0, 242, 254, 0.25)',
    boxShadow: '0 20px 45px -15px rgba(0, 0, 0, 0.8)',
    color: '#f8fafc'
  }}>
    {/* বাকি কুইজ কোড অপরিবর্তিত থাকবে */}
      {/* হেডার ও লাইভ টাইমার */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: '1.2rem',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        marginBottom: '2rem',
        flexWrap: 'wrap',
        gap: '1rem'
      }}>
        <h2 style={{ margin: 0, fontSize: '1.5rem', color: '#00f2fe' }}>
          {title || 'অধ্যায় মূল্যায়ন'}
        </h2>

        <div style={{
          background: timeLeft < 60 ? 'linear-gradient(135deg, #ef4444, #dc2626)' : 'linear-gradient(135deg, #00c6ff, #0072ff)',
          color: '#ffffff',
          padding: '0.5rem 1.2rem',
          borderRadius: '999px',
          fontWeight: '800',
          fontSize: '1rem',
          boxShadow: '0 4px 15px rgba(0, 198, 255, 0.3)',
          display: 'flex',
          alignItems: 'center',
          gap: '0.4rem'
        }}>
          <span>⏱️</span>
          <span>সময়: {formatTime(timeLeft)}</span>
        </div>
      </div>

      {/* ফলাফল কার্ড */}
      {isSubmitted && (
        <div style={{
          padding: '1.8rem',
          borderRadius: '16px',
          background: 'rgba(0, 242, 254, 0.06)',
          border: '1.5px solid #00f2fe',
          marginBottom: '2rem',
          textAlign: 'center'
        }}>
          <h3 style={{ margin: '0 0 1rem 0', fontSize: '1.5rem', color: '#ffffff' }}>📊 পরীক্ষার ফলাফল</h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
            gap: '1rem',
            margin: '1.2rem 0'
          }}>
            <div style={{ padding: '0.8rem', background: 'rgba(16, 185, 129, 0.15)', borderRadius: '12px', border: '1px solid #10b981', color: '#34d399' }}>
              <div style={{ fontSize: '0.8rem', fontWeight: 'bold' }}>সঠিক</div>
              <div style={{ fontSize: '1.5rem', fontWeight: '900' }}>{results.correct}</div>
            </div>
            <div style={{ padding: '0.8rem', background: 'rgba(239, 68, 68, 0.15)', borderRadius: '12px', border: '1px solid #ef4444', color: '#f87171' }}>
              <div style={{ fontSize: '0.8rem', fontWeight: 'bold' }}>ভুল (-০.২৫)</div>
              <div style={{ fontSize: '1.5rem', fontWeight: '900' }}>{results.incorrect}</div>
            </div>
            <div style={{ padding: '0.8rem', background: 'rgba(148, 163, 184, 0.15)', borderRadius: '12px', border: '1px solid #64748b', color: '#cbd5e1' }}>
              <div style={{ fontSize: '0.8rem', fontWeight: 'bold' }}>উত্তরহীন</div>
              <div style={{ fontSize: '1.5rem', fontWeight: '900' }}>{results.unattempted}</div>
            </div>
            <div style={{ padding: '0.8rem', background: 'linear-gradient(135deg, #00c6ff, #0072ff)', borderRadius: '12px', color: '#ffffff' }}>
              <div style={{ fontSize: '0.8rem', fontWeight: 'bold' }}>মোট নম্বর</div>
              <div style={{ fontSize: '1.5rem', fontWeight: '900' }}>{results.score} / {questions.length}</div>
            </div>
          </div>
        </div>
      )}

      {/* প্রশ্নসমূহ */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.8rem' }}>
        {questions.map((q, qIdx) => (
          <div key={qIdx} style={{
            padding: '1.4rem',
            borderRadius: '16px',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            backgroundColor: 'rgba(3, 7, 18, 0.6)'
          }}>
            <h4 style={{ margin: '0 0 1.2rem 0', fontSize: '1.15rem', color: '#f8fafc', lineHeight: '1.6' }}>
              <span style={{ color: '#00f2fe', marginRight: '0.5rem' }}>{qIdx + 1}.</span>
              {q.question}
            </h4>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
              {q.options.map((opt, oIdx) => {
                const isSelected = userAnswers[qIdx] === oIdx;
                let bg = 'rgba(255, 255, 255, 0.03)';
                let border = '1px solid rgba(255, 255, 255, 0.1)';
                let textCol = '#cbd5e1';

                if (isSelected && !isSubmitted) {
                  bg = 'rgba(0, 242, 254, 0.12)';
                  border = '1.5px solid #00f2fe';
                  textCol = '#00f2fe';
                }

                if (isSubmitted) {
                  if (oIdx === q.correctAnswer) {
                    bg = 'rgba(16, 185, 129, 0.2)';
                    border = '1.5px solid #10b981';
                    textCol = '#34d399';
                  } else if (isSelected && oIdx !== q.correctAnswer) {
                    bg = 'rgba(239, 68, 68, 0.2)';
                    border = '1.5px solid #ef4444';
                    textCol = '#f87171';
                  }
                }

                return (
                  <div
                    key={oIdx}
                    onClick={() => handleSelectOption(qIdx, oIdx)}
                    style={{
                      padding: '0.9rem 1.2rem',
                      borderRadius: '12px',
                      background: bg,
                      border: border,
                      color: textCol,
                      cursor: isSubmitted ? 'default' : 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.8rem',
                      fontWeight: isSelected || (isSubmitted && oIdx === q.correctAnswer) ? '700' : '500',
                      transition: 'all 0.2s'
                    }}
                  >
                    <span style={{
                      width: '26px',
                      height: '26px',
                      borderRadius: '50%',
                      background: isSelected ? '#00f2fe' : 'rgba(255, 255, 255, 0.08)',
                      color: isSelected ? '#000000' : '#cbd5e1',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.85rem',
                      fontWeight: '800'
                    }}>
                      {['ক', 'খ', 'গ', 'ঘ'][oIdx]}
                    </span>
                    <span>{opt}</span>
                  </div>
                );
              })}
            </div>

            {isSubmitted && q.explanation && (
              <div style={{
                marginTop: '1.2rem',
                padding: '1rem',
                borderRadius: '10px',
                background: 'rgba(0, 242, 254, 0.08)',
                borderLeft: '4px solid #00f2fe',
                fontSize: '0.95rem',
                color: '#e2e8f0'
              }}>
                <strong style={{ color: '#00f2fe' }}>💡 সমাধান ও ব্যাখ্যা: </strong>
                {q.explanation}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* পরীক্ষা জমা / রিসেট বাটন */}
      <div style={{ marginTop: '2.5rem', textAlign: 'center' }}>
        {!isSubmitted ? (
          <button
            onClick={() => setIsSubmitted(true)}
            style={{
              padding: '0.85rem 3rem',
              borderRadius: '14px',
              border: 'none',
              background: 'linear-gradient(135deg, #00c6ff 0%, #0072ff 100%)',
              color: '#ffffff',
              fontWeight: '800',
              fontSize: '1.05rem',
              cursor: 'pointer',
              boxShadow: '0 6px 20px rgba(0, 198, 255, 0.35)'
            }}
          >
            পরীক্ষা সমাপ্ত করো 🚀
          </button>
        ) : (
          <button
            onClick={() => {
              setUserAnswers({});
              setIsSubmitted(false);
              setTimeLeft(timeInMinutes * 60);
            }}
            style={{
              padding: '0.85rem 2.5rem',
              borderRadius: '14px',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              background: 'rgba(255, 255, 255, 0.05)',
              color: '#ffffff',
              fontWeight: '800',
              fontSize: '1rem',
              cursor: 'pointer'
            }}
          >
            পুনরায় চেষ্টা করুন 🔄
          </button>
        )}
      </div>
    </div>
  );
}