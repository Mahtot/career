const Services = () => {
 const services = [
  { title: "Career Guidance", desc: "Get data-driven AI career recommendations." },
  { title: "Incentivized Learning", desc: "Earn rewards for completing courses." },
  { title: "AI Course Suggestions", desc: "Receive AI-recommended courses based on your career path." },
  { title: "Certificate Verification", desc: "Showcase verified certifications securely." },
];


  return (
    <section id="services" className="py-16">
      <div className="container mx-auto px-4 text-center">
        {/* Section Header */}
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-3xl font-bold">Our Services</h2>
          <p className="border-b-4 border-purple-500 w-16"></p>
        </div>

        {/* Services Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition duration-300">
              <i className={`bi ${service.icon} text-purple-700 text-5xl mb-4`}></i>
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="text-gray-600 mt-2">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
