import React from 'react';

const Cta: React.FC = () => {
  const audience = [
    {
      title: 'HR Professionals',
      text: 'Quickly analyze hundreds of resumes and identify top talent efficiently.',
    },
    {
      title: 'Recruiters',
      text: 'Instantly assess candidate CVs to ensure they match job requirements.',
    },
    {
      title: 'Job Seekers',
      text: 'Correct mistakes, boost your ATS score, and stand out to employers.',
    },
    {
      title: 'Career Counselors',
      text: 'Provide data-driven insights to your clients and speed up coaching sessions.',
    },
    {
      title: 'Companies',
      text: 'Save valuable time on hiring and minimize selection errors.',
    },
  ];

  return (
    <section className="relative w-full bg-white py-24 border-t border-black/10">
      <div className="container mx-auto text-center px-6">
        <h2 className="text-4xl font-bold mb-4 uppercase tracking-tight">
          Who This Service is For
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-16">
          Our intelligent resume tool is designed to empower every professional
          involved in hiring and career growth.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {audience.map((item, index) => (
            <div
              key={index}
              className="group relative border border-black/10 p-8 text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(0,0,0,0.1)]"
            >
              <h3 className="text-lg font-semibold mb-3 group-hover:text-black transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                {item.text}
              </p>
              <div className="absolute left-0 bottom-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cta;
