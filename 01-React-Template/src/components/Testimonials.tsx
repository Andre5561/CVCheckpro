import React from 'react';

const testimonials = [
  {
    name: 'Alex, Recruiter',
    text: "This service has completely changed my workflow. I save hours daily by instantly identifying the strongest candidates. It's a game-changer for anyone in recruitment.",
  },
  {
    name: 'Natalie, Career Coach',
    text: 'Using this tool with my clients has made a huge difference. The detailed reports clearly show what needs improvement. My clients now get noticed by top employers.',
  },
  {
    name: 'Eric, Job Seeker',
    text: 'After using this service, I rewrote my resume and got an offer within a week. The insights and keyword optimization made all the difference.',
  },
  {
    name: 'Maria, HR Manager',
    text: 'We now pre-screen candidates with this tool and our quality of hire has improved drastically. It has streamlined the hiring process and saved the company time.',
  },
  {
    name: 'Jessica, Freelance Marketer',
    text: 'I optimized my CV with this service and noticed an immediate increase in client requests. The focus on measurable results really works.',
  },
  {
    name: 'Sam, Graduate',
    text: 'This tool helped me highlight my projects and skills effectively. I felt much more confident applying for jobs afterward.',
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 border-t border-black/10 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold uppercase mb-4 tracking-tight">
          What Our Users Say
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-16">
          Real feedback from professionals who used CVCheckPro to elevate their
          careers and streamline hiring.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="group relative border border-black/10 rounded-xl p-8 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_25px_rgba(0,0,0,0.08)]"
            >
              {/* Линия сверху */}
              <div className="absolute top-0 left-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full rounded-t-xl"></div>

              <p className="text-gray-800 text-sm leading-relaxed mb-6">
                “{t.text}”
              </p>

              <div className="text-sm font-semibold text-black">— {t.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
