// app/home/layout.js
import Link from 'next/link';

export default function AdminPannelLayout({ children }) {
  return (
    <>
      {/* Header */}
      <header className="bg-[#ffffff] text-black flex justify-between items-center h-[80px] px-8">
        {/* Logo Section */}
        <div className="h-[40px]">
          <img
            src="../image/aaslogo.png"
            alt="Admin Panel Logo"
            className="h-full object-contain"
          />
        </div>

        {/* Navigation Links Section */}
        <nav className="flex justify-center items-center space-x-8">
          <Link href="/blog" className="text-black">Blog</Link>
          <Link href="/users" className="text-black">Users</Link>
          <Link href="/notification" className="text-black">Notice</Link>
          <Link href="/profile" className="text-black">Profile</Link>
        </nav>

      </header>


      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="text-center py-4 bg-[#0070f3] text-white">
        © 2025 Admin Footer
      </footer>
    </>
  );
}
