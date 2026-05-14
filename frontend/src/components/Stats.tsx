const stats = [
  { value: '40+', label: 'GIS Data Layers' },
  { value: '1,000,000+', label: 'Parcels Indexed' },
  { value: '500,000+', label: 'Comparable Sales' },
  { value: '100%', label: 'Cyprus Coverage' },
];

export default function Stats() {
  return (
    <section className="bg-gray-50 border-y border-gray-100 py-14">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map(({ value, label }) => (
            <div key={label} className="text-center">
              <div className="text-3xl lg:text-4xl font-black text-blue-600 mb-1">{value}</div>
              <div className="text-sm text-gray-500 font-medium">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
