import React from 'react';

const Hero: React.FC = () => {
  // функция для перезагрузки страницы
  const handleReload = () => {
    window.location.reload();
  };

  return (
    <section className="relative w-full bg-white pt-24 pb-32 overflow-hidden border-b border-black/10">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-12">
        {/* ==== LEFT VISUAL ==== */}
        <div className="relative flex justify-center md:justify-start w-full md:w-[45%]">
          <div className="w-[420px] h-[420px] rounded-3xl bg-gradient-to-b from-gray-50 to-gray-100 flex items-center justify-center border border-black/10">
            <div className="w-48 h-48 border border-black/20 rounded-full flex items-center justify-center">
              <span className="text-[11px] tracking-widest text-gray-600">
                AI RESUME
              </span>
            </div>
          </div>
        </div>

        {/* ==== RIGHT TEXT ==== */}
        <div className="w-full md:w-[55%] flex flex-col justify-center">
          <p className="uppercase text-xs tracking-[3px] text-gray-500 mb-3">
            Resume Optimization Powered by AI
          </p>

          <h1 className="text-[64px] leading-[1.1] font-extrabold uppercase mb-6">
            Instantly <br /> Optimize <br /> Your Resume
          </h1>

          <p className="text-gray-700 text-base leading-relaxed mb-10 max-w-[520px]">
            Our intelligent algorithm identifies weaknesses in your CV within
            seconds and provides a clear, data-driven action plan to boost your
            visibility.
          </p>

          <div className="flex flex-wrap gap-4">
            {/* === Upload Resume === */}
            <button
              onClick={handleReload}
              className="btn bg-black text-white border border-black hover:bg-neutral-800 transition-all duration-300"
            >
              Upload your resume
            </button>

            {/* === Learn More === */}
            <a
              href="#pricing"
              className="btn border border-black text-black hover:bg-black hover:text-white transition-all duration-300"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
