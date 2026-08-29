'use client';

import { useState } from 'react';
import {
  Code2,
  Terminal,
  Play,
  CheckCircle2,
  ArrowUpRight,
  Lock,
  Mail,
  User,
  Sparkles,
  ShieldCheck,
  Zap,
  Globe,
  Layers,
  Award,
} from 'lucide-react';

type LangKey = 'javascript' | 'python' | 'sql';

const codeSnippets: Record<LangKey, { filename: string; code: string; output: string }> = {
  javascript: {
    filename: 'developerProfile.js',
    code: `// Selamat datang di NalaCode Academy!
const developer = {
  name: 'Alex Pratama',
  currentRole: 'Junior Web Developer',
  skills: ['React', 'Next.js', 'TypeScript', 'Node.js'],
  isReadyForJob: true,
  applyJob: function() {
    return \`🚀 Siap melamar kerja ke 500+ Hiring Partner tech!\`;
  }
};

console.log(developer.applyJob());`,
    output: '✓ Code compiled successfully in 0.04s\n> 🚀 Siap melamar kerja ke 500+ Hiring Partner tech!\n> Status: Portfolio Ready (Score: 98/100)',
  },
  python: {
    filename: 'aiModelPredict.py',
    code: `# Analisis Data & Model Machine Learning
import numpy as np

def predict_career_growth(months_learning):
    base_salary = 6000000  # Rp6.000.000
    multiplier = 1.35 ** (months_learning / 3)
    return f"Rp{int(base_salary * multiplier):,} / bulan"

print("Gaji setelah 6 bulan:", predict_career_growth(6))`,
    output: '✓ Python 3.12 Interpreter OK\n> Gaji setelah 6 bulan: Rp10,935,000 / bulan\n> Akurasi Model AI: 96.4%',
  },
  sql: {
    filename: 'queryHiringPartners.sql',
    code: `-- Cari lowongan remote developer gaji USD
SELECT company_name, role, salary_usd, remote_policy
FROM tech_jobs
WHERE skills_required LIKE '%FullStack%'
  AND remote_policy = '100% Remote Global'
ORDER BY salary_usd DESC
LIMIT 3;`,
    output: '✓ Query executed (3 rows returned):\n1. Stripe Inc. | Frontend Engineer | $4,500/mo | Remote\n2. Automattic | Full-Stack Dev | $4,200/mo | Remote\n3. Gitlab Corp | Node.js Backend | $3,800/mo | Remote',
  },
};

export default function AuthRegisterWidget() {
  const [authMode, setAuthMode] = useState<'signup' | 'login'>('signup');
  const [activeLang, setActiveLang] = useState<LangKey>('javascript');
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [consoleOutput, setConsoleOutput] = useState<string>(codeSnippets.javascript.output);

  // Form states
  const [fullName, setFullName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [careerTrack, setCareerTrack] = useState<string>('fullstack');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleRunCode = () => {
    setIsRunning(true);
    setTimeout(() => {
      setConsoleOutput(codeSnippets[activeLang].output);
      setIsRunning(false);
    }, 450);
  };

  const handleLangChange = (lang: LangKey) => {
    setActiveLang(lang);
    setConsoleOutput(codeSnippets[lang].output);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="nc-hero-split-grid">
      {/* ================= LEFT SIDE: In-Browser Code Playground ================= */}
      <div className="nc-code-showcase-box">
        <div className="nc-editor-window">
          {/* Editor Header / Tabs */}
          <div className="nc-editor-header">
            <div className="nc-window-dots">
              <span className="nc-dot-red" />
              <span className="nc-dot-yellow" />
              <span className="nc-dot-green" />
            </div>

            <div className="nc-lang-tabs">
              <button
                type="button"
                className={`nc-lang-tab ${activeLang === 'javascript' ? 'active' : ''}`}
                onClick={() => handleLangChange('javascript')}
              >
                <span>JS / React</span>
              </button>
              <button
                type="button"
                className={`nc-lang-tab ${activeLang === 'python' ? 'active' : ''}`}
                onClick={() => handleLangChange('python')}
              >
                <span>Python AI</span>
              </button>
              <button
                type="button"
                className={`nc-lang-tab ${activeLang === 'sql' ? 'active' : ''}`}
                onClick={() => handleLangChange('sql')}
              >
                <span>SQL Data</span>
              </button>
            </div>

            <button
              type="button"
              className="nc-btn-run-code"
              onClick={handleRunCode}
              disabled={isRunning}
            >
              <Play size={13} fill="#059669" color="#059669" />
              <span>{isRunning ? 'Running...' : 'Run Code'}</span>
            </button>
          </div>

          {/* Code Text Area */}
          <div className="nc-code-body">
            <pre>
              <code>{codeSnippets[activeLang].code}</code>
            </pre>
          </div>

          {/* Output Terminal Console */}
          <div className="nc-terminal-console">
            <div className="nc-terminal-head">
              <Terminal size={13} className="nc-icon-cyan" />
              <span>Interactive Output Terminal</span>
            </div>
            <pre className="nc-console-output">{consoleOutput}</pre>
          </div>
        </div>

        <div className="nc-editor-features-bar">
          <div className="nc-feat-mini">
            <CheckCircle2 size={14} className="nc-icon-cyan" />
            <span>Praktik Langsung Tanpa Install</span>
          </div>
          <div className="nc-feat-mini">
            <CheckCircle2 size={14} className="nc-icon-cyan" />
            <span>AI Code Reviewer 24 Jam</span>
          </div>
          <div className="nc-feat-mini">
            <CheckCircle2 size={14} className="nc-icon-cyan" />
            <span>Portofolio GitHub Siap Kerja</span>
          </div>
        </div>
      </div>

      {/* ================= RIGHT SIDE: Simple Registration & Login Card ================= */}
      <div id="daftar" className="nc-auth-card">
        <div className="nc-auth-tabs">
          <button
            type="button"
            className={`nc-auth-tab-btn ${authMode === 'signup' ? 'active' : ''}`}
            onClick={() => {
              setAuthMode('signup');
              setIsSubmitted(false);
            }}
          >
            <strong>Daftar Akun Baru</strong>
            <small>Gratis 30 Hari</small>
          </button>
          <button
            type="button"
            className={`nc-auth-tab-btn ${authMode === 'login' ? 'active' : ''}`}
            onClick={() => {
              setAuthMode('login');
              setIsSubmitted(false);
            }}
          >
            <strong>Masuk Akun</strong>
            <small>Lanjutkan Belajar</small>
          </button>
        </div>

        {isSubmitted ? (
          <div className="nc-auth-success">
            <div className="nc-success-icon">
              <CheckCircle2 size={32} />
            </div>
            <h3>Selamat Datang di NalaCode!</h3>
            <p>
              Akun belajar coding Anda telah siap. Silakan klik tombol di bawah untuk langsung membuka dashboard kurikulum interaktif.
            </p>
            <a
              href="https://wa.me/6281573550017?text=Halo%20NalaCode%20Academy%2C%20saya%20sudah%20mendaftar%20akun%20belajar%20dan%20ingin%20konsultasi%20career%20path."
              target="_blank"
              rel="noreferrer"
              className="nc-btn-auth-submit"
            >
              <Zap size={16} />
              <span>Buka Dashboard Belajar Sekarang</span>
              <ArrowUpRight size={16} />
            </a>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="nc-form-body">
            {/* Quick 1-Click Social Sign-in */}
            <div className="nc-social-auth-grid">
              <button
                type="button"
                className="nc-btn-social"
                onClick={() => setIsSubmitted(true)}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
                </svg>
                <span>Google</span>
              </button>

              <button
                type="button"
                className="nc-btn-social"
                onClick={() => setIsSubmitted(true)}
              >
                <Code2 size={16} />
                <span>GitHub</span>
              </button>
            </div>

            <div className="nc-auth-divider">
              <span>atau gunakan email</span>
            </div>

            {authMode === 'signup' && (
              <div className="nc-field">
                <label htmlFor="fullName">Nama Lengkap</label>
                <div className="nc-input-icon-wrap">
                  <User size={16} className="nc-input-icon" />
                  <input
                    id="fullName"
                    type="text"
                    required
                    placeholder="Contoh: Dimas Pratama"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="nc-input"
                  />
                </div>
              </div>
            )}

            <div className="nc-field">
              <label htmlFor="email">Email Aktif</label>
              <div className="nc-input-icon-wrap">
                <Mail size={16} className="nc-input-icon" />
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="nama@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="nc-input"
                />
              </div>
            </div>

            <div className="nc-field">
              <label htmlFor="password">Kata Sandi (Password)</label>
              <div className="nc-input-icon-wrap">
                <Lock size={16} className="nc-input-icon" />
                <input
                  id="password"
                  type="password"
                  required
                  placeholder="Minimal 8 karakter"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="nc-input"
                />
              </div>
            </div>

            {authMode === 'signup' && (
              <div className="nc-field">
                <label htmlFor="careerTrack">Pilihan Career Track Impian</label>
                <select
                  id="careerTrack"
                  value={careerTrack}
                  onChange={(e) => setCareerTrack(e.target.value)}
                  className="nc-select"
                >
                  <option value="fullstack">Full-Stack Web Development (React &amp; Node.js)</option>
                  <option value="python">Python, AI &amp; Machine Learning</option>
                  <option value="data">Data Science &amp; Big Data Analytics</option>
                  <option value="mobile">Mobile App Developer (Flutter &amp; Kotlin)</option>
                  <option value="devops">Cloud DevOps &amp; Cybersecurity</option>
                </select>
              </div>
            )}

            <button type="submit" className="nc-btn-auth-submit">
              <Zap size={16} />
              <span>{authMode === 'signup' ? 'Mulai Belajar Coding Gratis' : 'Masuk ke Akun Belajar'}</span>
              <ArrowUpRight size={16} />
            </button>

            <div className="nc-auth-guarantee">
              <ShieldCheck size={14} className="nc-icon-cyan" />
              <span>Tanpa Kartu Kredit · Batalkan Kapan Saja · 100% Garansi Kerja</span>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
