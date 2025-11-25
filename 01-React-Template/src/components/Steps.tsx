import React from 'react';

const steps = [
  {
    number: '01',
    title: 'Upload Your Resume File',
    text: 'We accept all standard formats, including PDF and DOCX. Just drag and drop your file.',
  },
  {
    number: '02',
    title: 'AI Analyzes Your CV',
    text: 'Our powerful AI examines your resume against over 50 key criteria to find areas for improvement.',
  },
  {
    number: '03',
    title: 'Get Your Report',
    text: 'Receive a detailed analysis with a rating, clear recommendations, and examples to help you stand out.',
  },
];

const Steps: React.FC = () => {
  return (
    <section
      id="steps"
      className="relative py-28 border-b border-black/10 bg-white overflow-hidden"
    >
      {/* ===== ФОН ===== */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.035)_1px,transparent_1px)] bg-[length:22px_22px]" />

      <div className="container text-center">
        {/* ===== ЗАГОЛОВОК ===== */}
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Just 3 Simple Steps
        </h2>
        <p className="text-gray-600 text-lg mb-14 max-w-2xl mx-auto">
          From upload to insight — get your professional CV analysis in minutes.
        </p>

        {/* ===== СЕТКА СТЕПОВ ===== */}
        <div className="relative grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {/* ===== ЛИНИЯ-КОННЕКТОР ===== */}
          <div className="absolute top-1/2 left-0 w-full h-[2px] bg-black/10 hidden md:block -z-10" />

          {steps.map((step, i) => (
            <div
              key={step.title}
              className="group relative bg-white border border-black/10 rounded-2xl p-10 text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(0,0,0,0.08)]"
            >
              {/* ===== НОМЕР ===== */}
              <div className="flex items-center gap-3 mb-6">
                <div className="relative w-10 h-10 flex items-center justify-center rounded-full border border-black/20">
                  <span className="font-mono text-sm text-gray-800">
                    {step.number}
                  </span>
                  <div className="absolute inset-0 rounded-full bg-black/5 scale-0 group-hover:scale-100 transition-transform duration-300" />
                </div>
                {/* ===== SVG-МАРКЕР ===== */}
                <svg
                  viewBox="0 0 50 50"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 stroke-black"
                  fill="none"
                  strokeWidth="2"
                >
                  <path
                    d="M10 25 L25 10 L40 25 L25 40 Z"
                    strokeOpacity="0.4"
                    className="group-hover:stroke-opacity-80 transition-all"
                  />
                </svg>
              </div>

              {/* ===== ТЕКСТ ===== */}
              <h3 className="font-semibold text-lg mb-3">{step.title}</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                {step.text}
              </p>

              {/* ===== ПОЛОСКА ПРИ HOVER ===== */}
              <div className="absolute left-0 bottom-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Steps;
