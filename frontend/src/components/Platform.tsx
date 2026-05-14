import { Shield, Users, Activity, Lock, UserCheck, BarChart2 } from 'lucide-react';

const platformFeatures = [
  {
    icon: Shield,
    title: 'Access Control & Security',
    description: 'Multi-tenant architecture with granular permissions, role-based access control, and two-factor authentication.',
    items: ['Role-based access control', 'Two-factor authentication (PIN)', 'Per-company data isolation', 'Subscription plan enforcement', 'Activity logging'],
  },
  {
    icon: Users,
    title: 'User & Company Management',
    description: 'Manage your team and company settings in one place with Google OAuth and full self-service capabilities.',
    items: ['Invite & manage team members', 'Company profile & branding', 'Per-user usage limit tracking', 'Google OAuth sign-in', 'Password & profile self-service'],
  },
  {
    icon: Activity,
    title: 'Usage & Subscription',
    description: 'Transparent quota tracking tied to your subscription plan with real-time dashboards and graceful limit enforcement.',
    items: ['Real-time usage dashboard', 'Per-feature quota limits', 'Graceful limit enforcement', 'Subscription plan tiers', 'Release notes & changelog'],
  },
];

export default function Platform() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-blue-600 text-sm font-semibold uppercase tracking-widest">Platform & Security</span>
          <h2 className="text-4xl font-black text-gray-900 mt-3 mb-4">
            Enterprise-grade, built to scale
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Secure multi-tenant architecture designed for real estate professionals and enterprise teams.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {platformFeatures.map(({ icon: Icon, title, description, items }) => (
            <div key={title} className="bg-white rounded-2xl p-8 border border-gray-100 card-hover">
              <div className="w-12 h-12 rounded-xl bg-gray-900 flex items-center justify-center mb-5">
                <Icon size={20} className="text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">{title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-5">{description}</p>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-gray-600">
                    <div className="w-4 h-4 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: Lock, label: 'End-to-end Encryption' },
            { icon: Shield, label: 'GDPR Compliant' },
            { icon: UserCheck, label: '2FA Authentication' },
            { icon: BarChart2, label: 'Audit Logging' },
          ].map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-3 bg-white rounded-xl px-4 py-3.5 border border-gray-100 shadow-sm">
              <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center">
                <Icon size={15} className="text-blue-600" />
              </div>
              <span className="text-sm font-medium text-gray-700">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
