import React from 'react';

const plans = [
  {
    title: 'Starter',
    price: '$10/month',
    features: ['1 resume analysis per month', 'Basic report'],
  },
  {
    title: 'Standard',
    price: '$15/month',
    popular: true,
    features: [
      'Up to 10 resumes per month',
      'Full report + recommendations',
      'PDF export',
    ],
  },
  {
    title: 'Pro',
    price: '$39/month',
    features: [
      'Unlimited analyses',
      'Job description matching',
      'In-depth ATS optimization',
      'DOCX and PDF export',
    ],
  },
  {
    title: 'Corporate',
    price: 'From $499/month',
    features: [
      'For HR teams and agencies',
      'Multi-user access',
      'API integration',
    ],
  },
];

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="section bg-white border-t border-black/10">
      <div className="container text-center">
        <h2 className="h2 mb-4">Pricing Plans</h2>
        <p className="text-slate-600 mb-12 max-w-2xl mx-auto">
          Choose the plan that fits your hiring or career needs.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan) => (
            <div
              key={plan.title}
              className={`card relative flex flex-col justify-between border border-black/10 hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(0,0,0,0.05)] transition-all duration-300 ${
                plan.popular ? 'border-black' : ''
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-3 py-1 rounded-full">
                  Popular
                </span>
              )}

              <div>
                <h3 className="text-lg font-semibold mb-2">{plan.title}</h3>
                <p className="text-2xl font-bold mb-6">{plan.price}</p>

                <ul className="text-sm text-gray-700 space-y-2">
                  {plan.features.map((f) => (
                    <li key={f}>• {f}</li>
                  ))}
                </ul>
              </div>

              {/* === Buy Now scrolls to top === */}
              <a
                href="#top"
                className="btn border border-black text-black hover:bg-black hover:text-white mt-8 transition-all"
              >
                {plan.title === 'Corporate' ? 'Contact Sales' : 'Buy Now'}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
