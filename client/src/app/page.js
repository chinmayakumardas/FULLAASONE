
'use client'
import { useEffect, useState } from 'react';
import PublicLayout from '../components/layout/PublicLayout';
import Loader from './loader'; // Import the loader component (if you have it)

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time (for example, 2 seconds)
    setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Adjust the time as per your requirement
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader /> // Show loader while content is loading
      ) : (
        <PublicLayout>
          {/* Hero Section */}
          <section className="flex items-center justify-center w-full h-screen bg-blue-500">
            <h1 className="text-6xl font-bold text-white">Hero Section</h1>
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
