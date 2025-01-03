export default function Sponsors() {
  return (
    <section className="pb-1" id="sponsors"> {/* Reduced padding-bottom to pb-1 */}
      <div className="px-4 pb-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Section Title */}
        <h1 className="mb-8 text-2xl font-bold tracking-normal text-center text-offwhite md:leading-tight md:tracking-normal dark:text-offwhite md:text-4xl">
          Connecting filtration distributors with low-income communities
        </h1>
        
        {/* Gradient Card and Image Side by Side */}
        <div className="flex justify-center items-center mb-6 space-x-6">
          {/* Gradient Card */}
          <div className="p-6 bg-gradient-to-r from-offwhite via-vanilla to-neutralgray dark:from-offwhite dark:via-vanilla dark:to-neutralgray rounded-xl shadow-lg w-80">
            <p className="text-lg text-center text-feldgrau dark:text-feldgrau">
            Our unique AI model and cost-effective pollutant detector create a denser AQI grid, ensuring every community is covered!
            </p>
          </div>
          
          {/* Demo Model Image */}
          <div>
            <img
              src="demomodel.webp"  // Changed to demomodel.webp
              alt="Demo Model Image"
              width="300"  // Smaller width for alignment
              height="267"  // Adjusted height
              className="rounded-md shadow-lg"
            />
          </div>
        </div>
        
        {/* New Subtitle */}
        <h3 className="mb-8 text-lg font-medium tracking-normal text-center text-transparent bg-clip-text bg-gradient-to-r dark:bg-gradient-to-r from-offwhite via-vanilla to-neutralgray dark:from-offwhite dark:via-vanilla dark:to-neutralgray md:leading-tight md:tracking-normal dark:text-offwhite md:text-xl">
          Companies can use our live tracker to distribute filters to 223 million unprotected individuals.
        </h3>
        
        {/* YouTube Video */}
        <div className="flex justify-center">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/u31qwQUeGuM"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-lg shadow-lg"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
