import React from 'react';

const features = [
  {
    title: 'Instant Results',
    text: 'Get your full resume analysis in just 15 seconds.',
    icon: (
      <svg
        viewBox="0 0 60 60"
        xmlns="http://www.w3.org/2000/svg"
        className="w-10 h-10 stroke-black"
        fill="none"
        strokeWidth="2"
      >
        <circle cx="30" cy="30" r="26" strokeOpacity="0.25" />
        <path d="M30 10 L30 50 M10 30 L50 30" strokeOpacity="0.6" />
      </svg>
    ),
  },
  {
    title: 'Keyword Optimization',
    text: 'AI automatically checks your CV for ATS-friendly keywords.',
    icon: (
      <svg
        viewBox="0 0 60 60"
        xmlns="http://www.w3.org/2000/svg"
        className="w-10 h-10 stroke-black"
        fill="none"
        strokeWidth="2"
      >
        <rect
          x="10"
          y="15"
          width="40"
          height="30"
          rx="6"
          strokeOpacity="0.25"
        />
        <path d="M18 25h24M18 35h12" strokeOpacity="0.6" />
      </svg>
    ),
  },
  {
    title: 'In-Depth Analytics',
    text: 'Visualize your strengths and weaknesses with clear charts.',
    icon: (
      <svg
        viewBox="0 0 60 60"
        xmlns="http://www.w3.org/2000/svg"
        className="w-10 h-10 stroke-black"
        fill="none"
        strokeWidth="2"
      >
        <rect x="14" y="25" width="6" height="20" fill="black" />
        <rect x="27" y="18" width="6" height="27" fill="black" />
        <rect x="40" y="10" width="6" height="35" fill="black" />
      </svg>
    ),
  },
  {
    title: 'Actionable Recommendations',
    text: 'Follow precise steps to make your resume stand out.',
    icon: (
      <svg
        viewBox="0 0 60 60"
        xmlns="http://www.w3.org/2000/svg"
        className="w-10 h-10 stroke-black"
        fill="none"
        strokeWidth="2"
      >
        <circle cx="30" cy="30" r="26" strokeOpacity="0.2" />
        <path
          d="M18 30 L28 40 L42 20"
          stroke="black"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

const Features: React.FC = () => {
  return (
    <section
      id="features"
      className="relative py-28 border-b border-black/10 overflow-hidden bg-white"
    >
      {/* фон */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.04)_1px,transparent_1px)] bg-[length:22px_22px]" />

      <div className="container text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Key Features</h2>
        <p className="text-gray-600 text-lg mb-14 max-w-2xl mx-auto">
          Each function is designed to give you a clear and accurate resume
          improvement process.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item) => (
            <div
              key={item.title}
              className="group relative border border-black/10 rounded-2xl p-8 bg-white hover:-translate-y-1 transition-all duration-300 shadow-[0_0_0_rgba(0,0,0,0)] hover:shadow-[0_6px_25px_rgba(0,0,0,0.08)]"
            >
              <div className="flex justify-center mb-6 opacity-80 group-hover:opacity-100 transition-opacity">
                {item.icon}
              </div>
              <h3 className="font-semibold text-lg mb-3">{item.title}</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                {item.text}
              </p>

              {/* нижняя линия при hover */}
              <div className="absolute left-0 bottom-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
