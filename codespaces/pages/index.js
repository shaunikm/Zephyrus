import Head from "next/head";
import Link from "next/link";
import { NextSeo } from "next-seo";
import Header from "../components/Header"; 
import Footer from "../components/Footer"; 
import Sponsors from "../components/Sponsors"; 
import Features from "../components/Features"; 
import AboutUs from "../components/AboutUs";  // Import AboutUs

export default function Home() {
  return (
    <div className="bg-feldgrau dark:bg-feldgrau">
      <NextSeo
        title="Zephyrus"
        description="Zephyrus – where darkness meets the web."
        canonical="https://plutonium.vercel.app/"
        openGraph={{
          url: "https://plutonium.vercel.app/",
          title: "Zephyrus",
          description: "Zephyrus – where darkness meets the web.",
          images: [
            {
              url: "blob:https://og-playground.vercel.app/8baff750-c782-4a04-b198-7ee3dd1e1974",
            },
          ],
          site_name: "Zephyrus",
        }}
        twitter={{
          handle: "@saurishhh",
          site: "https://plutonium.vercel.app/",
          cardType: "summary_large_image",
        }}
      />
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <section className="relative">
        <div className="px-4 pt-10 mx-auto max-w-7xl md:pt-16">
          <div className="w-full pb-5 mx-auto text-center md:w-11/12">
            <h1 className="mb-3 text-5xl font-bold tracking-tight text-offwhite dark:text-offwhite md:text-6xl">
              Pure Air
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r dark:bg-gradient-to-r from-offwhite via-vanilla to-darkvanilla dark:from-offwhite dark:via-vanilla dark:to-darkvanilla">
                Blessed by Zephryus, Perfected by AI.
              </span>
            </h1>
            <p className="max-w-xl pt-5 mx-auto text-lg text-vanilla dark:text-vanilla md:text-lg">
              Zephryus is the most recent evolution of air quality tracking and protection. Over a third (120 million) of Americans live without air quality trackers.
            </p>
            <div className="mt-6 text-center md:ml-6">
              <a
                className="inline-flex items-center px-5 py-3 text-sm font-medium text-feldgrau transition duration-300 bg-vanilla rounded hover:bg-offwhite dark:hover:bg-offwhite"
                aria-label="learn more"
                rel="noreferrer"
                href="#sponsors"
              >
                View Demo
              </a>
              <br className="sm:hidden" />
              <Link href="/">
                <a
                  className="inline-flex items-center px-5 py-3 mt-2 ml-0 text-sm font-medium text-feldgrau transition duration-300 border rounded shadow bg-vanilla hover:shadow-md dark:hover:border-gray-500 md:ml-2"
                  aria-label="return home"
                >
                  Return Home
                </a>
              </Link>
            </div>

            {/* Added Space Between Buttons and Subtitle */}
            <div className="mt-8"></div> {/* Space between buttons and subtitle */}

            {/* Gradient Subtitle */}
            <h3 className="mb-8 text-lg font-medium tracking-normal text-center text-transparent bg-clip-text bg-gradient-to-r dark:bg-gradient-to-r from-offwhite via-vanilla to-neutralgray dark:from-offwhite dark:via-vanilla dark:to-neutralgray md:leading-tight md:tracking-normal dark:text-offwhite md:text-xl">
              Low-Income Communities (LIC) face harsher air quality, with almost double the pollutant concentration in some areas
            </h3>

            {/* Offwhite, Smaller Centered Text Line */}
            <p className="text-sm text-offwhite text-center dark:text-offwhite">
              (From 2004 to 2016, 85% of afflicted residents were Black or Hispanic)
            </p>
          </div>
        </div>
      </section>
      <Sponsors />
      <Features />
      <AboutUs /> {/* Added AboutUs component here */}
      <Footer />
    </div>
  );
}
