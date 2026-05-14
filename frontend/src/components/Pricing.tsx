import { Check, Zap } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: '149',
    period: '/month',
    description: 'For individual agents and small teams getting started.',
    features: [
      'Interactive GIS Map',
      '10 GIS Data Layers',
      'Parcel Identification (100/mo)',
      'Sales comparables (50/mo)',
      '1 user seat',
      'Email support',
    ],
    cta: 'Start Free Trial',
    popular: false,
  },
  {
    name: 'Professional',
    price: '349',
    period: '/month',
    description: 'For growing agencies that need full market intelligence.',
    features: [
      'Everything in Starter',
      'All 40+ GIS Data Layers',
      'Parcel Identification (unlimited)',
      'Sales & Rental comparables (unlimited)',
      'Portfolio management',
      'Power BI dashboards',
      '5 user seats',
      'Priority support',
    ],
    cta: 'Start Free Trial',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'For large firms with advanced data and compliance needs.',
    features: [
      'Everything in Professional',
      'Unlimited user seats',
      'Custom data integrations',
      'Dedicated account manager',
      'SLA & uptime guarantee',
      'Custom Power BI reports',
      'SSO & advanced security',
      'On-boarding training',
    ],
    cta: 'Contact Sales',
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-blue-600 text-sm font-semibold uppercase tracking-widest">Pricing</span>
          <h2 className="text-4xl font-black text-gray-900 mt-3 mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            No hidden fees. Start with a 14-day free trial on any plan.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {plans.map(({ name, price, period, description, features, cta, popular }) => (
            <div
              key={name}
              className={`relative rounded-2xl p-8 border transition-all ${
                popular
                  ? 'pricing-popular text-white border-transparent shadow-2xl scale-105'
                  : 'border-gray-200 bg-white card-hover'
              }`}
            >
              {popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="flex items-center gap-1.5 bg-amber-400 text-amber-900 text-xs font-bold px-4 py-1.5 rounded-full shadow">
                    <Zap size={11} />
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className={`text-lg font-bold mb-1 ${popular ? 'text-white' : 'text-gray-900'}`}>{name}</h3>
                <p className={`text-sm mb-5 ${popular ? 'text-blue-100' : 'text-gray-500'}`}>{description}</p>
                <div className="flex items-end gap-1">
                  <span className={`text-4xl font-black ${popular ? 'text-white' : 'text-gray-900'}`}>{price === 'Custom' ? '' : '€'}{price}</span>
                  {period && <span className={`text-sm mb-1 ${popular ? 'text-blue-200' : 'text-gray-400'}`}>{period}</span>}
                  {price === 'Custom' && <span className={`text-4xl font-black ${popular ? 'text-white' : 'text-gray-900'}`}>Custom</span>}
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <div className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${popular ? 'bg-white/20' : 'bg-blue-50'}`}>
                      <Check size={10} className={popular ? 'text-white' : 'text-blue-600'} strokeWidth={3} />
                    </div>
                    <span className={`text-sm ${popular ? 'text-blue-50' : 'text-gray-600'}`}>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-xl font-semibold text-sm transition-all ${
                  popular
                    ? 'bg-white text-blue-700 hover:bg-blue-50 shadow-lg'
                    : 'bg-blue-600 text-white hover:bg-blue-700 shadow-sm hover:shadow-md'
                }`}
              >
                {cta}
              </button>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-400 text-sm mt-8">
          All prices exclusive of VAT. Annual billing available with 20% discount.
        </p>
      </div>
    </section>
  );
}
