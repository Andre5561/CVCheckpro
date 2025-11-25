'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState<any>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let errs: any = {};

    if (!form.name.trim()) errs.name = 'Required field';
    if (!form.email.trim()) errs.email = 'Required field';
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) errs.email = 'Invalid email';

    if (!form.message.trim()) errs.message = 'Required field';

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitted(true);

    setTimeout(() => {
      alert('Message sent!');
      setSubmitted(false);
      setForm({ name: '', email: '', message: '' });
    }, 1200);
  };

  return (
    <section className="w-full bg-white py-24 border-t border-black">
      <div className="container mx-auto max-w-2xl px-4">
        {/* Заголовок */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold text-black tracking-tight text-center mb-8"
        >
          Contact Us
        </motion.h2>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="space-y-8"
        >
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-black mb-2">
              Your Name
            </label>
            <input
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-black rounded-lg outline-none focus:border-black"
            />
            {errors.name && (
              <p className="text-sm text-black mt-1">{errors.name}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-black mb-2">
              Email
            </label>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-black rounded-lg outline-none focus:border-black"
            />
            {errors.email && (
              <p className="text-sm text-black mt-1">{errors.email}</p>
            )}
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-black mb-2">
              Message
            </label>
            <textarea
              name="message"
              rows={6}
              value={form.message}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-black rounded-lg outline-none focus:border-black"
            />
            {errors.message && (
              <p className="text-sm text-black mt-1">{errors.message}</p>
            )}
          </div>

          <motion.button
            whileTap={{ scale: 0.97 }}
            whileHover={{ scale: 1.02 }}
            disabled={submitted}
            type="submit"
            className="w-full py-3.5 rounded-lg bg-black text-white font-semibold tracking-wide transition"
          >
            {submitted ? 'Sending...' : 'Send Message'}
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}
