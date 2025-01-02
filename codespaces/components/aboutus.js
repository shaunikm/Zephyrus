import React from "react";

const AboutUs = () => {
  return (
    <section className="bg-lightgray dark:bg-darkgray py-16">
      <div className="px-4 mx-auto max-w-7xl text-center">
        {/* Title with Gradient Effect */}
        <h1 className="mb-8 text-2xl font-bold tracking-normal text-center text-offwhite md:leading-tight md:tracking-normal dark:text-offwhite md:text-4xl">
          About{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r dark:bg-gradient-to-r from-offwhite via-vanilla to-neutralgray dark:from-offwhite dark:via-vanilla dark:to-neutralgray">
            Us
          </span>
        </h1>

        {/* Subtitle */}
        <h2 className="mb-12 text-xl font-bold text-offwhite dark:text-offwhite md:text-2xl">
          We are revolutionizing air quality through AI technology.
        </h2>

        {/* Trifecta Image and Text Layout */}
        <div className="mt-12 flex justify-between items-center">
          {/* Left Image and Text */}
          <div className="flex flex-col items-center text-center max-w-xs mx-4">
            <img
              className="w-full h-64 object-cover rounded-md mb-4"
              src="placeholder.webp"
              alt="Vision"
            />
            <p className="text-lg text-vanilla dark:text-vanilla">
              Our Vision is to leverage AI to deliver cleaner, healthier air for
              all.
            </p>
          </div>

          {/* Vanilla Colored Line */}
          <div className="h-full w-1 bg-vanilla mx-4"></div>

          {/* Center Image and Text */}
          <div className="flex flex-col items-center text-center max-w-xs mx-4">
            <img
              className="w-full h-64 object-cover rounded-md mb-4"
              src="placeholder.webp"
              alt="Team"
            />
            <p className="text-lg text-vanilla dark:text-vanilla">
              A talented and dedicated team works every day to innovate and improve
              air quality solutions.
            </p>
          </div>

          {/* Vanilla Colored Line */}
          <div className="h-full w-1 bg-vanilla mx-4"></div>

          {/* Right Image and Text */}
          <div className="flex flex-col items-center text-center max-w-xs mx-4">
            <img
              className="w-full h-64 object-cover rounded-md mb-4"
              src="placeholder.webp"
              alt="Technology"
            />
            <p className="text-lg text-vanilla dark:text-vanilla">
              Our cutting-edge air filtration technology empowers smarter, cleaner
              environments.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
