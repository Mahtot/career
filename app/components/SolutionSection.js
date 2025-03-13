export function SolutionSection() {
  const steps = [
    "Daily Activity Tracking (Gamified)",
    "Behavioral & Interest Analysis",
    "AI Career Matching",
    "Real-Time Personalized Guidance",
  ];
  return (
    <section id="how-it-works" className="how bg-white text-black py-16 px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
        How CareerChain Works
      </h2>
      <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {steps.map((step, idx) => (
          <div key={idx} className="bg-purple-100 rounded-2xl p-6 shadow">
            <h3 className="text-xl font-semibold mb-2">Step {idx + 1}</h3>
            <p>{step}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
