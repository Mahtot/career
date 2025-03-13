import Link from "next/link";

const Hero = () => {
  return (
    <div className="flex flex-col gap-1 items-center mt-16">
      {/* Main Heading */}
      <div className="text-5xl md:text-6xl font-bold text-white">
        <h1 className="text-3xl md:text-4xl font-bold">Discover your ideal</h1>
        <div className="flex flex-col items-center gap-4 mt-3">
          <h1 className="text-3xl md:text-4xl font-bold ">Career</h1>
          <p className=" border-b-4 border-purple-500 w-16"></p>
        </div>
      </div>

      {/* Subtext */}
      <p className="mt-2  text-gray-200 md:text-2xl w-[80vw] md:w-[60vw] text-center">
        CareerChain helps you uncover the perfect career using AI and gamified
        insights from your daily activities.{" "}
      </p>

      {/* Call-to-Action Button */}
      <Link
        href="#about"
        className="inline-block mt-6 px-8 py-3 bg-purple-600 text-white font-medium rounded-full shadow hover:opacity-90 transition-all duration-300"
      >
        FIND OUT MORE
      </Link>
    </div>
  );
};

export default Hero;
