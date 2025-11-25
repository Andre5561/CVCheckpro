import React, { useState } from 'react';

const faqs = [
  {
    question: "What if I don't have any work experience?",
    answer:
      'Our AI helps you highlight academic projects, volunteer work, and extracurriculars — showing transferable skills that make your resume competitive even without job history.',
  },
  {
    question: 'How is this different from free online resume templates?',
    answer:
      'Templates give you structure. CVCheckPro gives you insight. Our algorithm is trained on thousands of real resumes and hiring criteria, identifying what’s missing and what to improve.',
  },
  {
    question: 'Can I use the service on my phone?',
    answer:
      'Yes, our web app is fully responsive. Upload your resume, run the analysis, and view your full report right from any mobile browser.',
  },
  {
    question: "I'm an HR professional. Can I upload resumes in bulk?",
    answer:
      'Absolutely. The Pro and Corporate plans include a bulk uploader so HR teams can process multiple resumes at once — saving time on screening.',
  },
];

const FAQ: React.FC = () => {
  const [active, setActive] = useState<number>(0);

  return (
    <section id="faq" className="py-28 border-t border-black/10 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Заголовок */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold uppercase mb-4 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find clear, straightforward answers about how CVCheckPro works and
            how it can help you.
          </p>
        </div>

        {/* Основная сетка */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Левая колонка — вопросы */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <button
                key={index}
                onClick={() => setActive(index)}
                className={`w-full text-left border border-black/10 px-6 py-4 rounded-xl transition-all duration-300
                ${
                  active === index
                    ? 'bg-black text-white'
                    : 'bg-white text-black hover:bg-neutral-50'
                }`}
              >
                <h3
                  className={`text-base font-medium ${
                    active === index ? 'text-white' : 'text-black'
                  }`}
                >
                  {faq.question}
                </h3>
              </button>
            ))}
          </div>

          {/* Правая колонка — ответ */}
          <div className="relative border border-black/10 rounded-2xl p-10 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.04)] transition-all duration-300">
            <p className="text-gray-800 text-base leading-relaxed min-h-[160px]">
              {faqs[active].answer}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
