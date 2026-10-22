import { useState } from 'react';

const  RELEASES = 'https://github.com/Gunjan3472/dsa-partner/releases/latest';

const LEVELS = [
  { id: 'Nudge', color: '#10b981', text: 'What does the brute force look like, and where does it waste time? What are you re-checking again and again?' },
  { id: 'Concept', color: '#0ea5e9', text: 'Think about a data structure that can answer "have I seen this number before?" in constant time.' },
  { id: 'Approach', color: '#8b5cf6', text: 'Walk through the array once. For each number, work out which partner you need, check if you have seen it, and remember the current number for later.' },
  { id: 'Pseudocode', color: '#ec4899', text: 'for each index i:\n  need = target - nums[i]\n  if need was seen → return the pair\n  remember nums[i]' },
];

const FEATURES = [
  { t: 'Nudge', c: '#10b981', d: 'A guiding question, nothing more. Your brain does the work.' },
  { t: 'Concept', c: '#0ea5e9', d: 'Points at the idea or data structure to think about.' },
  { t: 'Approach', c: '#8b5cf6', d: 'The plan in plain words, still no code.' },
  { t: 'Pseudocode', c: '#ec4899', d: 'The steps laid out, only when you truly need them.' },
  { t: 'Code review', c: '#f59e0b', d: 'Reads your editor and flags bugs, edge cases and complexity.' },
  { t: 'Teach-back', c: '#14b8a6', d: 'Explain your idea in words and get honest feedback.' },
];

export default function Home() {
  const [lvl, setLvl] = useState(-1);
  const next = () => setLvl((l) => (l + 1) % LEVELS.length);
  const cur = lvl >= 0 ? LEVELS[lvl] : null;

  return (
    <>
      <nav className="top">
        <div className="wrap">
          <a className="logo" href="#/">DSA Partner 🦉</a>
          <div className="links">
            <a href="#features">Features</a>
            <a href="#install">Install</a>
            <a href="#/privacy">Privacy</a>
            <a className="pill" href={RELEASES}>Get it free</a>
          </div>
        </div>
      </nav>

      <header className="hero">
        <div className="fl left">
          <div className="av">🦉</div>
          <b>Your teacher</b>
          <small>Two Sum · Nudge</small>
          <p>“What are you re-checking again and again?”</p>
        </div>
        <div className="fl right">
          <b>Code review</b>
          <small>Two Sum · your code</small>
          <p>✅ Good start<br />⚠️ Duplicates break line 6<br />⏱️ O(n²). Can it be faster?</p>
        </div>

        <div className="wrap">
          <h1>Stop copying solutions. Start <span className="hl">thinking</span> like a problem solver.</h1>
          <p className="sub">A teacher beside every LeetCode problem. <span className="hl">Hints, not spoilers.</span></p>

          <div className="bar">
            <span>Two Sum · Easy</span>
            <button onClick={next}>{lvl < 0 ? 'Try a free hint' : 'Next hint →'}</button>
          </div>
          <div className="chips">
            {LEVELS.map((l, i) => (
              <button key={l.id} className={`chip ${i === lvl ? 'on' : ''}`} style={{ background: l.color }} onClick={() => setLvl(i)}>
                {l.id}
              </button>
            ))}
          </div>
          <div className="out">
            {cur ? (
              <>
                <b style={{ color: cur.color }}>{cur.id}</b>
                <span style={{ whiteSpace: 'pre-line' }}>{cur.text}</span>
              </>
            ) : (
              <span>This is a live demo on Two Sum. Press the button and climb from a small nudge to bigger hints.</span>
            )}
          </div>

          <div className="badges">
            <span>🆓 Free</span>
            <span>🔑 Bring your own AI key</span>
            <span>🙈 No account, no tracking</span>
          </div>
        </div>
      </header>

      <main className="wrap">
        <section>
          <h2>How it works</h2>
          <div className="steps">
            <div className="step"><div className="num">1</div><h3>Open any problem</h3><p>The panel appears beside LeetCode and reads the problem and your code.</p></div>
            <div className="step"><div className="num">2</div><h3>Ask for the smallest hint</h3><p>Stuck? Climb one level at a time. Never more help than you need.</p></div>
            <div className="step"><div className="num">3</div><h3>Explain and get checked</h3><p>Teach the idea back, or ask for a code review like from a mentor.</p></div>
          </div>
        </section>

        <section id="features">
          <h2>Your pocket teacher</h2>
          <div className="grid">
            {FEATURES.map((f) => (
              <div className="card" key={f.t} style={{ borderTopColor: f.c }}>
                <h3>{f.t}</h3>
                <p>{f.d}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="install">
          <div className="dark">
            <h2>Install in two minutes</h2>
            <ol>
              <li>Download the latest <code>.zip</code> from the <a href={RELEASES}>Releases page</a>.</li>
              <li>Unzip it into a folder you will keep.</li>
              <li>Open <code>edge://extensions</code> (or <code>chrome://extensions</code>) and turn on <b>Developer mode</b>.</li>
              <li>Click <b>Load unpacked</b> and select the unzipped folder.</li>
              <li>Open <b>Extension options</b>, pick Gemini or Groq, paste your free key and <b>Save</b>.</li>
            </ol>
            <p style={{ textAlign: 'center' }}><a className="cta" href={RELEASES}>Download (free)</a></p>
            <p className="note">Free plans, limits and model names are set by the AI providers and can change. If one is busy, switch to the other in settings.</p>
          </div>
        </section>
      </main>
    </>
  );
}