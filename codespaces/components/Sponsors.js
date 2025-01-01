export default function Sponsors() {
  return (
    <section className="pb-1" id="sponsors"> {/* Reduced padding-bottom to pb-1 */}
      <div className="px-4 pb-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <h1 className="mb-8 text-2xl font-bold tracking-normal text-center text-offwhite md:leading-tight md:tracking-normal dark:text-offwhite md:text-4xl">
           Connecting filtration distributors with low-income communities
        </h1>
        <p className="max-w-md mx-auto mb-12 text-lg text-vanilla dark:text-vanilla text-left md:text-center md:text-lg">
          <b></b> A one-of-a-kind AI model that uses geospatial neural networks
          in tandem with infrared spectroscopy sensors to create
          a denser AQI grid, ensuring no community is left unnoticed!
        </p>
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
        <div className="grid grid-cols-2 gap-8 mt-6 md:grid-cols-4">
          {/* Removed SVG boxes */}
        </div>
      </div>
    </section>
  );
}
