import image from "../images/img-1.avif";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
export function Home() {
  return (
    <div>
      <section className="bg-white dark:bg-gray-900 min-h-screen">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              <Typewriter
                options={{
                  strings: "New AI Tools shaping the Future!",
                  autoStart: true,
                  loop: true,
                  cursor: ".",
                }}
              />
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              Step into our AI Model Showcase and embark on a journey through
              the ever-evolving landscape of artificial intelligence and
              Language Models (LLMs). Our platform offers an immersive
              experience, inviting you to explore the cutting-edge models
              crafted by pioneering minds and organizations. Delve into various
              categories spanning from image recognition to sentiment analysis,
              each offering a glimpse into the possibilities of AI-driven
              innovation. With our interactive interface, you can select any
              model that piques your curiosity and uncover its full potential.
              Embrace the future of technology as you navigate through our
              dynamic application, where the boundaries of possibility are
              continually being redefined. Welcome to the forefront of
              innovation.
            </p>
            <Link
              to="/explore"
              className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
            >
              Get started
              <svg
                className="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                ></path>
              </svg>
            </Link>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src={image} alt="mockup"></img>
          </div>
        </div>
      </section>
    </div>
  );
}
