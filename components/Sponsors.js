export default function Sponsors() {
  return (
    <section className="pb-1" id="sponsors"> {/* Reduced padding-bottom to pb-1 */}
      <div className="px-4 pb-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Section Title */}
        <h1 className="mb-8 text-2xl font-bold tracking-normal text-center text-offwhite md:leading-tight md:tracking-normal dark:text-offwhite md:text-4xl">
          Connecting filtration distributors with low-income communities
        </h1>
        
        {/* Subtitle */}
        <p className="max-w-md mx-auto mb-6 text-lg text-vanilla dark:text-vanilla text-left md:text-center md:text-lg">
          A one-of-a-kind AI model combined with a cost-effective pollutant detector allows us to create
          a denser AQI grid, ensuring no community is left unnoticed!
        </p>
        
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
        
        {/* Image Below the Video (Smaller with gap re-added) */}
        <div className="mt-8 flex justify-center">
          <img
            src="demomodel.webp"  // Changed to demomodel.webp
            alt="Demo Model Image"
            width="500"  // Smaller width
            height="445"  // Smaller height
            className="rounded-md shadow-lg"
          />
        </div>

        {/* Placeholder for Grid Content */}
        <div className="grid grid-cols-2 gap-8 mt-6 md:grid-cols-4">
          {/* Removed SVG boxes */}
        </div>
      </div>
    </section>
  );
}
