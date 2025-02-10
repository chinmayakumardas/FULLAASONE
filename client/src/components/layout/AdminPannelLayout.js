// app/home/layout.js
import Link from 'next/link';

export default function AdminPannelLayout({ children }) {
  return (
    <>
      {/* Header */}
     


      {/* Main Content */}
      <main>{children}</main>

      {/* Footer
      <footer className="text-center py-4 bg-[#0070f3] text-white">
        © 2025 Admin Footer
      </footer> */}
    </>
  );
}
