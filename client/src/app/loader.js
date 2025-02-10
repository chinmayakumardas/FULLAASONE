

// export default Loader;
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const BrandNameLoader = () => {
  const textRef = useRef(null);
  const spinnerRef = useRef(null);

  useEffect(() => {
    // GSAP animation to rotate the brand name and the spinner together
    gsap.to(spinnerRef.current, {
      rotation: '+=360',
      repeat: -1, // Infinite repeat
      duration: 5, // Duration for one full rotation
      ease: 'linear', // Smooth, continuous rotation
    });

    // GSAP animation for the "AAS1" brand name to make it rotate
    gsap.to(textRef.current, {
      rotation: '+=360',
      repeat: -1, // Infinite repeat
      duration: 2, // Duration for one full rotation
      ease: 'linear', // Smooth, continuous rotation
    });
  }, []);

  return (
    <div className="loader-container">
      <div ref={spinnerRef} className="spinner " >
      </div>
      

      <style jsx>{`
        .loader-container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          background-color: #f0f0f0; /* Optional background color */
        }

        .spinner {
          width: 100px;
          height: 100px;
          display: grid;
          color: #474bff;
          background: radial-gradient(farthest-side, currentColor calc(100% - 6.7px), #0000 calc(100% - 5.6px) 0);
          -webkit-mask: radial-gradient(farthest-side, #0000 calc(100% - 14.6px), #000 calc(100% - 13.4px));
          border-radius: 50%;
          position: relative;
          margin-right: 20px;
        }

        .spinner::before,
        .spinner::after {
          content: "";
          grid-area: 1/1;
          background: linear-gradient(currentColor 0 0) center,
            linear-gradient(currentColor 0 0) center;
          background-size: 100% 11.2px, 11.2px 100%;
          background-repeat: no-repeat;
        }

        .spinner::after {
          transform: rotate(45deg);
        }

       
      `}</style>
    </div>
  );
};

export default BrandNameLoader;
