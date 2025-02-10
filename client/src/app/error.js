'use client';
import React, { useEffect } from "react";
import { useRouter } from 'next/navigation';
import { gsap } from "gsap";

const Error = () => {
  const router = useRouter();  // Next.js router for navigation

  useEffect(() => {
    // GSAP animations for the page elements
    gsap.fromTo(
      ".error-number",
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 1, ease: "bounce.out" }
    );

    gsap.fromTo(
      ".error-message",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, delay: 0.5 }
    );

    gsap.fromTo(
      ".error-button",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, delay: 0.7 }
    );

    // Background gradient animation with golden and black color
    gsap.to(".background-gradient", {
      backgroundImage: "linear-gradient(45deg,rgb(190, 154, 36), #000)",
      duration: 10,
      repeat: -1,
      ease: "linear",
    });
  }, []);

  // Handle the click to navigate to the homepage using Next.js router
  const handleGoHome = () => {
    router.push('/'); // Redirect to the homepage using Next.js routing
  };

  return (
    <div className="min-h-screen w-full overflow-hidden bg-white relative flex justify-center items-center">
      <div className="background-gradient absolute top-0 left-0 w-full h-full z-[-1]"></div>

      <section className="relative z-10 h-full w-full py-[120px] flex items-center justify-center text-gold">
        <div className="container mx-auto text-center">
          <div className="max-w-[400px] mx-auto">
            <h2 className="error-number mb-2 text-[50px] font-bold leading-none sm:text-[80px] md:text-[100px]">
              404
            </h2>
            <h4 className="error-message mb-3 text-[22px] font-semibold leading-tight">
              Oops! That page can’t be found
            </h4>
            <p className="error-message mb-8 text-lg">
              The page you are looking for may have been removed or deleted.
            </p>
            <button
              onClick={handleGoHome} // Trigger the navigation when clicked
              className="error-button inline-block rounded-lg bg-[#f4d35e] border border-gold px-8 py-3 text-center text-base font-semibold text-black transition hover:bg-gold hover:text-white"
            >
              Go To Home
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Error;
