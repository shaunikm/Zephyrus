import React from "react";

const AboutUs = () => {
  return (
    <section className="bg-lightgray dark:bg-darkgray py-16">
      <div className="px-4 mx-auto max-w-7xl text-center">
        {/* Title with Gradient Effect */}
        <h1 className="mb-8 text-2xl font-bold tracking-normal text-center text-transparent bg-clip-text bg-gradient-to-r from-[#fdf6e3] via-[#f4e8cf] to-[#e9dab3] dark:from-[#fdf6e3] dark:via-[#f4e8cf] dark:to-[#e9dab3] md:leading-tight md:tracking-normal md:text-4xl">
          About{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fdf6e3] via-[#f4e8cf] to-[#e9dab3] dark:from-[#fdf6e3] dark:via-[#f4e8cf] dark:to-[#e9dab3] font-extrabold">
            Us
          </span>
        </h1>

        {/* Subtitle */}
        <h2 className="mb-12 text-xl font-bold text-[#ffffff] dark:text-[#fbfbfb] md:text-2xl">
  Ensuring everyone receives equal climate protections
</h2>

        {/* Trifecta Image and Text Layout */}
        <div className="grid gap-12 md:grid-cols-3">
          {/* Card 1 */}
          <div className="flex flex-col items-center text-center bg-white dark:bg-darkgray shadow-lg rounded-lg p-6 transform transition-transform hover:scale-105">
            <img
              className="w-full h-64 object-cover rounded-md mb-4 shadow-md"
              src="ayushaboutus.webp"
              alt="Vision"
            />
            <p className="text-base text-feldgrau dark:text-feldgrau leading-relaxed">
              Ayush Iyengar, junior in the Bay Area, loves to hike through nature and work with fellow students.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r dark:bg-gradient-to-r from-feldgrau via-davysgray to-black dark:from-feldgrau dark:via-davysgray dark:to-black font-extrabold">
                I aspire to generate concrete change in my community
              </span>{" "}
              — starting from my school's Unity Council to creating the only youth-led organization for California's unrecognized tribes, my current goals focus on providing environmental justice for air quality support!
            </p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-center text-center bg-white dark:bg-darkgray shadow-lg rounded-lg p-6 transform transition-transform hover:scale-105">
            <img
              className="w-full h-64 object-cover rounded-md mb-4 shadow-md"
              src="shaunikaboutus.webp"
              alt="Team"
            />
            <p className="text-base text-feldgrau dark:text-feldgrau leading-relaxed">
              Shaunik Musukula, junior,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r dark:bg-gradient-to-r from-feldgrau via-davysgray to-black dark:from-feldgrau dark:via-davysgray dark:to-black font-extrabold">
                math has always been my passion
              </span>, helping me decode the world through equations. I aim to simplify complex community issues with practical solutions.
            </p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-center text-center bg-white dark:bg-darkgray shadow-lg rounded-lg p-6 transform transition-transform hover:scale-105">
            <img
              className="w-full h-64 object-cover rounded-md mb-4 shadow-md"
              src="aarushaboutus.webp"
              alt="Technology"
            />
            <p className="text-base text-feldgrau dark:text-feldgrau leading-relaxed">
              Aarush Gupta, found a pathway to achieving my goals through{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r dark:bg-gradient-to-r from-feldgrau via-davysgray to-black dark:from-feldgrau dark:via-davysgray dark:to-black font-extrabold">
                artificial intelligence
              </span>. After years of studying advanced AI networks and coding, I am thrilled to apply these skills to solve community challenges and shape a brighter future.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
