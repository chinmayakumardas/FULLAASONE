
'use client'
import { useEffect, useState,useRef } from 'react';
import PublicLayout from '../components/layout/PublicLayout';
import Loader from './loader'; // Import the loader component (if you have it)
import { VolumeUp, VolumeMute } from "@mui/icons-material"; 
export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true);
  const [isMuted, setIsMuted] = useState(true); // Track mute state
  const videoRef = useRef(null);

  const handleToggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted); // Toggle mute state
    }
  };


  useEffect(() => {
    // Simulate loading time (for example, 2 seconds)
    setTimeout(() => {
      setIsLoading(false);
    }, 0); // Adjust the time as per your requirement
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader /> // Show loader while content is loading
      ) : (
        <PublicLayout>
          {/* Hero Section */}
          <section className=" w-full  ">
                  <video
                
                className="w-full h-auto"
                autoPlay
                loop
                muted
              >
                <source
                  src="https://video.wixstatic.com/video/cf83c9_89098cea681b46f9849103ffb3f81460/720p/mp4/file.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
          </section>

          {/* Core Services Overview */}
          <section className="flex items-center justify-center w-full h-screen bg-gray-100">
            <h2 className="text-5xl font-bold">Core Services Overview</h2>
          </section>

          {/* Client Testimonials */}
          <section className="flex items-center justify-center w-full h-screen bg-gray-200">
            <h2 className="text-5xl font-bold">Client Testimonials</h2>
          </section>

          {/* Featured Case Studies */}
          <section className="flex items-center justify-center w-full h-screen bg-gray-300">
            <h2 className="text-5xl font-bold">Featured Case Studies</h2>
          </section>

          {/* Latest Insights/Blog Posts */}
          <section className="flex items-center justify-center w-full h-screen bg-gray-400">
            <h2 className="text-5xl font-bold">Latest Insights/Blog Posts</h2>
          </section>

          {/* Newsletter Subscription */}
          <section className="flex items-center justify-center w-full h-screen bg-gray-500">
            <h2 className="text-5xl font-bold">Newsletter Subscription</h2>
          </section>
        </PublicLayout>
      )}
    </>
  );
}
