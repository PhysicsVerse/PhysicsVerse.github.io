import React, { useState, useRef, useEffect } from 'react';

// আপনার Google API Key এখানে বসান (AQ... বা AIzaSy...)
const GEMINI_API_KEY = 'Your_API_Here';

export default function PhysicsAI() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: 'ai',
      text: 'কী খবর তোদের! আমি তোদের সাদাত ভাইয়ার এআই ক্লোন ⚡\n\nফিজিক্সের কোন টপিক, সমীকরণ বা ম্যাথে আটকে আছিস বল? কোনো সংকোচ করিস না, একদম সহজ করে বুঝিয়ে দিচ্ছি!'
    }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userText = input.trim();
    setInput('');
    setMessages((prev) => [...prev, { sender: 'user', text: userText }]);
    setLoading(true);

    const systemPrompt = `You are the authentic AI mentor clone of 'Sadat Bhaiya' (সাদাত ভাইয়া) on the PhysicsVerse platform.
You are talking directly to your beloved Bangladeshi HSC and University/Engineering Admission students.

STRICT DOMAIN RESTRICTION:
- You ONLY discuss Physics (পদার্থবিজ্ঞান) and academic guidance related to physics.
- If someone asks anything outside Physics, refuse with brotherly affection in Sadat Bhaiya's tone:
  "আরে শোন! আমি তোদের সাদাত ভাইয়ার ফিজিক্স ক্লোন। ফিজিক্স বাদ দিয়ে অন্য আড্ডা মারার সময় এখন নেই রে! সামনে পরীক্ষা, মন দিয়ে পড়াশোনা কর। ফিজিক্সে কোথায় সমস্যা বল?"

TONE & PERSONALITY (সাদাত ভাইয়ার খাঁটি ঢং):
- Address them affectionately and informally like their elder brother and mentor (use "তুই/তোরা" or "তুমি").
- Signature catchphrases: "আরে শোন...", "চাপ নিস না একদম...", "সহজভাবে চিন্তা কর...", "দেখ আসল খেলাটা কোথায়...", "বুয়েট/বোর্ডে এই জায়গায় প্যাঁচটা দেয়...".
- Language: 100% natural, colloquial, lively Bengali (খাঁটি বাংলা).
- Teaching style: Deep conceptual clarity, breaking down formulas intuitively with real-life analogies before rushing into math.
- For Mathematical Problems, structure the solution clearly:
  1. দেয়া আছে (Given data with units)
  2. সূত্র (Applicable Formula)
  3. হিসাব (Step-by-step arithmetic)
  4. উত্তর ও একক (Final answer with unit)
  5. সাদাত ভাইয়ার স্পেশাল হ্যাক/টিপ (Exam trap alert, shortcuts, or board/admission hacks).
- Always end with motivation and brotherly encouragement.`;

    // গুগলের লেটেস্ট ভ্যালিড মডেলগুলো
    const targetModels = [
      'gemini-2.5-flash',
      'gemini-flash-latest',
      'gemini-1.5-flash'
    ];

    let success = false;
    let lastErrorMsg = '';

    for (const model of targetModels) {
      try {
        const response = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${GEMINI_API_KEY.trim()}`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              systemInstruction: {
                parts: [{ text: systemPrompt }]
              },
              contents: [
                ...messages.slice(-4).map((m) => ({
                  role: m.sender === 'user' ? 'user' : 'model',
                  parts: [{ text: m.text }]
                })),
                {
                  role: 'user',
                  parts: [{ text: userText }]
                }
              ]
            })
          }
        );

        const data = await response.json();

        if (response.ok && data?.candidates?.[0]?.content?.parts?.[0]?.text) {
          setMessages((prev) => [
            ...prev,
            { sender: 'ai', text: data.candidates[0].content.parts[0].text }
          ]);
          success = true;
          break; // সফল হলে সাথে সাথে বের হবে
        } else {
          lastErrorMsg = data?.error?.message || `HTTP ${response.status}`;
        }
      } catch (err) {
        lastErrorMsg = err.message;
      }
    }

    if (!success) {
      setMessages((prev) => [
        ...prev,
        {
          sender: 'ai',
          text: `সার্ভারে সমস্যা হয়েছে (${lastErrorMsg})। একটু পর আবার চেষ্টা কর!`
        }
      ]);
    }

    setLoading(false);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: 'fixed',
          bottom: '2rem',
          right: '2rem',
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          gap: '0.6rem',
          padding: '0.85rem 1.4rem',
          borderRadius: '999px',
          background: 'linear-gradient(135deg, #00f2fe 0%, #8b5cf6 100%)',
          color: '#ffffff',
          border: 'none',
          boxShadow: '0 8px 30px rgba(0, 242, 254, 0.45)',
          fontWeight: '800',
          fontSize: '0.96rem',
          cursor: 'pointer',
          transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
        onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
        onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
      >
        <span style={{ fontSize: '1.25rem' }}>✨</span>
        <span>{isOpen ? 'চ্যাট বন্ধ কর' : 'সাদাত ভাইয়ার AI ক্লোন'}</span>
      </button>

      {isOpen && (
        <div
          style={{
            position: 'fixed',
            bottom: '5.8rem',
            right: '2rem',
            width: 'calc(100vw - 4rem)',
            maxWidth: '430px',
            height: '570px',
            backgroundColor: 'rgba(10, 16, 30, 0.96)',
            backdropFilter: 'blur(20px)',
            border: '1.5px solid rgba(0, 242, 254, 0.35)',
            borderRadius: '24px',
            boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.85)',
            zIndex: 9999,
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            fontFamily: 'inherit'
          }}
        >
          <div
            style={{
              padding: '1.1rem 1.3rem',
              background: 'linear-gradient(90deg, rgba(0, 242, 254, 0.15) 0%, rgba(139, 92, 246, 0.15) 100%)',
              borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <div
                style={{
                  width: '9px',
                  height: '9px',
                  borderRadius: '50%',
                  background: '#00f2fe',
                  boxShadow: '0 0 10px #00f2fe'
                }}
              />
              <span style={{ fontWeight: '800', color: '#ffffff', fontSize: '1.02rem' }}>
                সাদাত ভাইয়া (AI Clone) ⚡
              </span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              style={{
                background: 'rgba(255, 255, 255, 0.08)',
                border: 'none',
                color: '#cbd5e1',
                borderRadius: '50%',
                width: '28px',
                height: '28px',
                cursor: 'pointer',
                fontWeight: 'bold'
              }}
            >
              ✕
            </button>
          </div>

          <div
            style={{
              flex: 1,
              padding: '1.2rem',
              overflowY: 'auto',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem'
            }}
          >
            {messages.map((m, idx) => (
              <div
                key={idx}
                style={{
                  alignSelf: m.sender === 'user' ? 'flex-end' : 'flex-start',
                  maxWidth: '85%',
                  padding: '0.85rem 1.1rem',
                  borderRadius: m.sender === 'user' ? '18px 18px 4px 18px' : '18px 18px 18px 4px',
                  background:
                    m.sender === 'user'
                      ? 'linear-gradient(135deg, #0284c7 0%, #0369a1 100%)'
                      : 'rgba(255, 255, 255, 0.05)',
                  border:
                    m.sender === 'user'
                      ? '1px solid rgba(0, 242, 254, 0.4)'
                      : '1px solid rgba(255, 255, 255, 0.1)',
                  color: '#f8fafc',
                  fontSize: '0.92rem',
                  lineHeight: '1.6',
                  whiteSpace: 'pre-wrap'
                }}
              >
                {m.text}
              </div>
            ))}
            {loading && (
              <div
                style={{
                  alignSelf: 'flex-start',
                  padding: '0.7rem 1rem',
                  borderRadius: '16px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  color: '#00f2fe',
                  fontSize: '0.85rem',
                  fontStyle: 'italic'
                }}
              >
                ⚡ ভাইয়া ভাবছে এবং সাজিয়ে নিচ্ছে...
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          <form
            onSubmit={handleSend}
            style={{
              padding: '0.85rem',
              borderTop: '1px solid rgba(255, 255, 255, 0.1)',
              display: 'flex',
              gap: '0.6rem',
              background: 'rgba(3, 7, 18, 0.7)'
            }}
          >
            <input
              type="text"
              placeholder="ফিজিক্সের যেকোনো প্রশ্ন কর ভাইয়াকে..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              style={{
                flex: 1,
                padding: '0.75rem 1rem',
                borderRadius: '12px',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                backgroundColor: 'rgba(255, 255, 255, 0.04)',
                color: '#ffffff',
                outline: 'none',
                fontSize: '0.9rem'
              }}
            />
            <button
              type="submit"
              disabled={loading}
              style={{
                padding: '0.75rem 1.2rem',
                borderRadius: '12px',
                border: 'none',
                background: 'linear-gradient(135deg, #00f2fe 0%, #4facfe 100%)',
                color: '#030712',
                fontWeight: '800',
                cursor: loading ? 'not-allowed' : 'pointer'
              }}
            >
              পাঠাও
            </button>
          </form>
        </div>
      )}
    </>
  );
}