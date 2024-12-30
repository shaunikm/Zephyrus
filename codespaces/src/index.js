import Head from "next/head";
import Link from "next/link";
import { NextSeo } from "next-seo";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sponsors from "../components/Sponsors";
import Features from "../components/Features";
// Create a container for the app
const app = document.getElementById('app');

// Render components
app.innerHTML = `
  ${Header()}
  <main>
    ${Sponsors()}
  </main>
  ${Footer()}
`;
export default function Home() {
  return (
    <div className="bg-uranianBlue dark:bg-uranianBlue">
      <NextSeo
        title="Zephryus"
        description="Zephryus – where darkness meets the web."
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
          site_name: "Plutonium",
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
            <h1 className="mb-3 text-5xl font-bold tracking-tight text-darkvanilla dark:text-darkvanilla md:text-6xl">
              Pure Air
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r dark:bg-gradient-to-r from-offwhite via-vanilla to-darkvanilla dark:from-offwhite dark:via-vanilla dark:to-darkvanilla">
                Blessed by Zephryus, Perfected by AI.
              </span>
            </h1>
            <p className="max-w-xl pt-5 mx-auto text-lg text-vanilla dark:text-vanilla md:text-lg">
              Zephryus is the most recent evolution of air quality technology. 
              Revolutionary sensors combined with enhanced AI models 
              ensures that every community can be supplied with filters!
            </p>
            <div className="mt-6 text-center md:ml-6">
              <a
                className="inline-flex items-center px-5 py-3 text-sm font-medium text-vanilla transition duration-300 bg-uranianBlue rounded hover:bg-offwhite dark:hover:bg-uranianBlue dark:text-darkvanilla dark:bg-uranianBlue"
                aria-label="learn more"
                rel="noreferrer"
                href="https://github.com/minor/plutonium/"
              >
                <span className="flex justify-center"></span>
              </a>
              <br className="sm:hidden" />
              <Link href="404">
                <a
                  className="inline-flex items-center px-5 py-3 mt-2 ml-0 text-sm font-medium text-vanilla transition duration-300 border rounded shadow dark:hover:border-gray-500 hover:shadow-md md:ml-2 dark:text-gray-300"
                  aria-label="learn more"
                >
                  <span className="flex justify-center"></span>
                </a>
              </Link>
            </div>
          </div>
          <div className="relative w-full py-10 mx-auto text-center md:py-32 md:my-12 md:w-10/12">
            <div className="relative z-10">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://unsplash.com/photos/e9TrFZZ72DQ"
              >
                <img
                  className="transition duration-700 shadow-xl rounded-xl ring-1 ring-black ring-opacity-5 hover:transform hover:scale-105"
                  src="/images/placeholder.webp"
                  alt="Placeholder Image"
                />
              </a>
            </div>
            <p className="z-10 my-8 text-sm font-medium text-darkvanilla">
              illuminating a path to helping those in need
            </p>
          </div>
        </div>
        {/* <div
          style={{ backgroundImage: "url(/images/blur.png)" }}
          className="absolute inset-0 w-full h-full bg-bottom bg-no-repeat bg-cover -z-1"
        /> */}
      </section>
      <Sponsors />
      <Features />
      <Footer />
    </div>
  );
}
