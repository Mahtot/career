export function ValueSection() {
  const values = [
    { title: "Personalized AI Suggestions", icon: "🎯" },
    { title: "Gamified Data Collection", icon: "🎮" },
    { title: "Real-World Career Mapping", icon: "💡" },
    { title: "Progress Dashboard", icon: "📊" },
  ];
  return (
    <section className="bg-black text-white py-16 px-6">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-10">
        Why CareerChain?
      </h2>
      <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {values.map((v, i) => (
          <div key={i} className="bg-purple-700 rounded-2xl p-6 text-center">
            <div className="text-4xl mb-2">{v.icon}</div>
            <h4 className="text-lg font-semibold">{v.title}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}
