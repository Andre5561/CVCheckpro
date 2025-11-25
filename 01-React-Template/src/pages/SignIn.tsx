import React, { useState } from 'react';

const SignIn: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Incorrect email or password. Please try again.');
  };

  return (
    <section className="min-h-[80vh] flex items-center justify-center bg-gradient-to-b from-white to-slate-50 py-20">
      <div className="w-full max-w-md bg-white border border-slate-200 rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.05)] p-10">
        {/* ===== HEADER ===== */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-extrabold tracking-tight mb-2 text-slate-900">
            Sign In
          </h1>
          <p className="text-slate-500 text-base">
            Access your <strong>CVCheckPro</strong> account
          </p>
        </div>

        {/* ===== FORM ===== */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="text-left">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-slate-700 mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
              className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm shadow-sm focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all"
            />
          </div>

          <div className="text-left">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-slate-700 mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm shadow-sm focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all"
            />
          </div>

          {/* ===== BUTTON ===== */}
          <button
            type="submit"
            className="w-full py-3.5 text-sm font-semibold tracking-wide bg-black text-white rounded-xl shadow-[0_4px_14px_rgba(0,0,0,0.15)] hover:bg-neutral-800 active:scale-[0.99] transition-transform duration-150"
          >
            Sign In
          </button>
        </form>
      </div>
    </section>
  );
};

export default SignIn;
