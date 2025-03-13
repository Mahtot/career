const About = () => {
  return (
    <section
      id="about"
      className="bg-purple-500 text-white py-20 min-h-[70vh] flex flex-col items-center justify-center"
    >
      <div className="container mx-auto px-6 text-center max-w-3xl">
        <h2 className="text-4xl font-extrabold mb-4">
          We’ve Got What You Need!
        </h2>

        <div className="w-20 h-1 bg-white mx-auto mb-6 rounded-full" />

        <p className="text-lg leading-relaxed">
          CareerChain is your AI-powered career companion.
          <br className="hidden md:block" />
          We study your strengths, interests, and habits in a friendly, gamified
          way — then match you with a personalized career path that fits like a
          glove.
        </p>

        <p className="mt-4 text-base opacity-90">
          Whether you're starting out or planning a career pivot,
          <br className="hidden md:block" />
          we’re here to guide you with clarity, confidence, and purpose.
        </p>

        <a
          href="https://form.typeform.com/to/Hn0X9or2"
          className="mt-8 inline-block px-8 py-3 bg-white text-purple-600 rounded-full font-semibold shadow-md hover:bg-gray-100 transition duration-300"
        >
          GET STARTED!
        </a>
      </div>
    </section>
  );
};

export default About;
