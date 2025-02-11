// // app/home/layout.js
// import Link from 'next/link';
// import LanguageIcon from '@mui/icons-material/Language';
// import MenuIcon from '@mui/icons-material/Menu';
// import SearchIcon from '@mui/icons-material/Search';

// export default function PublicLayout({ children }) {
//   return (
//     <>
//       <header className='bg-[#ffffff] flex justify-between items-center h-[80px] px-8'>
//         {/* Logo Section */}
//         <Link href="/" className='h-[40px]'>
//           <img
//             src="../image/aaslogo.png"
//             alt="Company Logo"
//             className="h-full object-contain"
//           />
//         </Link>

//         {/* Navigation Links Section */}
//         <nav className='flex justify-center items-center space-x-8 text-black'>
//           <Link href="/insights" className="text-black">Insights</Link>
//           <Link href="/services" className="text-black">Service</Link>
//           <Link href="/career" className="text-black">Career</Link>
//           <Link href="/contact" className="text-black">Contact</Link>
//           <Link href="/about" className="text-black">About</Link>
//           <Link href="" className="text-black">More</Link>
//           <Link href="/admin" className="text-black">Admin</Link>
//         </nav>

//         {/* Icons Section (Search, Language, Menu) */}
//         <div className="flex items-center gap-6">
//           {/* Search Icon */}
//           <div className="cursor-pointer">
//             <SearchIcon className="text-black" />
//           </div>

//           {/* Language Change Dropdown */}
//           <div className="relative">
//             <button className="text-black flex items-center">
//               <LanguageIcon />
//               <span className="ml-1">Language</span>
//             </button>
//           </div>

//           {/* Hamburger Menu Icon */}
//           <div className="cursor-pointer mr-6">
//             <MenuIcon className="text-black" />
//           </div>
//         </div>
//       </header>

//       {children}

//       <footer style={{ textAlign: 'center', padding: '20px', backgroundColor: '#0070f3', color: 'white' }}>
//         © 2025 Home Footer
//       </footer>
//     </>
//   );
// }








// app/home/layout.js
'use client';
import React from "react";
import Link from 'next/link';
import { Provider } from 'react-redux';
import store from "@/redux/store";
import LanguageIcon from '@mui/icons-material/Language';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { useRouter } from 'next/navigation';

import { useState } from 'react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"; // Adjust path

const components = [
  { title: 'Alert Dialog', href: '/docs/primitives/alert-dialog', description: 'A modal dialog that interrupts the user with important content and expects a response.' },
  { title: 'Hover Card', href: '/docs/primitives/hover-card', description: 'For sighted users to preview content available behind a link.' },
  { title: 'Progress', href: '/docs/primitives/progress', description: 'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.' },
  { title: 'Scroll-area', href: '/docs/primitives/scroll-area', description: 'Visually or semantically separates content.' },
  { title: 'Tabs', href: '/docs/primitives/tabs', description: 'A set of layered sections of content—known as tab panels—that are displayed one at a time.' },
  { title: 'Tooltip', href: '/docs/primitives/tooltip', description: 'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.' },
];
export default function PublicLayout({ children }) {
  const router = useRouter();
  
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleDropdownToggle = (index) => {
    if (openDropdown === index) {
      setOpenDropdown(null); // Close dropdown if already open
    } else {
      setOpenDropdown(index); // Open the clicked item's dropdown
    }
  };
  return (
    <Provider store={store}>
  
      <header className="py-4  bg-white text-black flex items-center justify-between shadow-md">
               {/* ShadCN Navigation Menu */}
               <NavigationMenu >
                    {/* Company Logo */}
                    <Link href="/">
                      <img
                        src="https://static.wixstatic.com/media/cf83c9_72a1f255167a4937ab112637b060a6d4~mv2.png/v1/crop/x_32,y_0,w_320,h_300/fill/w_89,h_84,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/cf83c9_72a1f255167a4937ab112637b060a6d4~mv2.png"
                        alt="Company Logo"
                        className="h-8 mr-4 ml-6"
                      />
                    </Link>
                  <NavigationMenuList className="relative ">
                  
                    {/* Static More section 1 */}
                    <NavigationMenuItem className="group ">
                      <NavigationMenuTrigger className="">Insights</NavigationMenuTrigger>
                      <NavigationMenuContent className=" transition-all duration-300 group-hover:w-[100vw]">
                        <ul className="grid  p-4  lg:grid-cols-[.75fr_1fr] w-[100vw]">
                         
                          {components.map((component) => (
                            <ListItem
                              key={component.title}
                              title={component.title}
                              href={component.href}
                            >
                              {component.description}
                            </ListItem>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                    {/* Static Getting Started Section 2 */}
                    <NavigationMenuItem className="group ">
                      <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                      <NavigationMenuContent className="transition-all duration-300 group-hover:w-[100vw]">
                      <ul className="grid gap-3 p-4 lg:grid-cols-[.75fr_1fr] w-[100vw]">
                          {[
                            { label: 'About', route: 'about' },
                            { label: 'Login', route: 'auth' },
                            { label: 'Contact Us', route: 'contact' }
                          ].map((component, index) => (
                            <li key={index}>
                              <Link
                                href={`/${component.route}`} // Use the route value for the URL
                                className="text-blue-600 hover:text-blue-800 cursor-pointer"
                              >
                                {component.label} {/* Use the label value for display text */}
                              </Link>
                            </li>
                          ))}
                        </ul>

                      </NavigationMenuContent>
                    </NavigationMenuItem>
                    {/* Static Getting Started Section 3 */}
                    <NavigationMenuItem className="group ">
                      <NavigationMenuTrigger>Cases Studies</NavigationMenuTrigger>
                      <NavigationMenuContent className="transition-all duration-300 group-hover:w-[100vw]">
                      <ul className="grid gap-3 p-4 lg:grid-cols-[.75fr_1fr] w-[100vw]">
                          {[
                            { label: 'About', route: 'about' },
                            { label: 'Login', route: 'auth' },
                            { label: 'Contact Us', route: 'contact' }
                          ].map((component, index) => (
                            <li key={index}>
                              <Link
                                href={`/${component.route}`} // Use the route value for the URL
                                className="text-blue-600 hover:text-blue-800 cursor-pointer"
                              >
                                {component.label} {/* Use the label value for display text */}
                              </Link>
                            </li>
                          ))}
                        </ul>

                      </NavigationMenuContent>
                    </NavigationMenuItem>
                    {/* Static Getting Started Section 4 */}
                    <NavigationMenuItem className="group ">
                      <NavigationMenuTrigger>Blog</NavigationMenuTrigger>
                      <NavigationMenuContent className="transition-all duration-300 group-hover:w-[100vw]">
                      <ul className="grid gap-3 p-4 lg:grid-cols-[.75fr_1fr] w-[100vw]">
                          {[
                            { label: 'About', route: 'about' },
                            { label: 'Login', route: 'auth' },
                            { label: 'Contact Us', route: 'contact' }
                          ].map((component, index) => (
                            <li key={index}>
                              <Link
                                href={`/${component.route}`} // Use the route value for the URL
                                className="text-blue-600 hover:text-blue-800 cursor-pointer"
                              >
                                {component.label} {/* Use the label value for display text */}
                              </Link>
                            </li>
                          ))}
                        </ul>

                      </NavigationMenuContent>
                    </NavigationMenuItem>
                    {/* Static Getting Started Section 5 */}
                    <NavigationMenuItem className="group ">
                      <NavigationMenuTrigger>About us</NavigationMenuTrigger>
                      <NavigationMenuContent className="transition-all duration-300 group-hover:w-[100vw]">
                      <ul className="grid gap-3 p-4 lg:grid-cols-[.75fr_1fr] w-[100vw]">
                          {[
                            { label: 'Mission & Vision', route: 'mission' },
                            { label: 'Awards and Recognition', route: 'awards' },
                            { label: 'Team Profiles', route: 'team' },
                            { label: 'Strategic Partnerships', route: 'strategi' },
                          ].map((component, index) => (
                            <li key={index}>
                              <Link
                                href={`/${component.route}`} // Use the route value for the URL
                                className="text-blue-600 hover:text-blue-800 cursor-pointer"
                              >
                                {component.label} {/* Use the label value for display text */}
                              </Link>
                            </li>
                          ))}
                        </ul>

                      </NavigationMenuContent>
                    </NavigationMenuItem>
                    {/* Static Getting Started Section 6 */}
                    <NavigationMenuItem className="group ">
                      <NavigationMenuTrigger>More</NavigationMenuTrigger>
                      <NavigationMenuContent className="transition-all duration-300 group-hover:w-[100vw]">
                      <ul className="grid gap-3 p-4 lg:grid-cols-[.75fr_1fr] w-[100vw]">
                          {[
                            { label: 'Career', route: 'career' },
                            { label: 'Contact Us', route: 'contact' },
                            { label: 'SiteMap', route: 'sitemap' },
                            { label: 'Login', route: 'auth' },
                          ].map((component, index) => (
                            <li key={index}>
                              <Link
                                href={`/${component.route}`} // Use the route value for the URL
                                className="text-blue-600 hover:text-blue-800 cursor-pointer"
                              >
                                {component.label} {/* Use the label value for display text */}
                              </Link>
                            </li>
                          ))}
                        </ul>

                      </NavigationMenuContent>
                    </NavigationMenuItem>

                
                  </NavigationMenuList>
                </NavigationMenu>

              <div className="flex items-center gap-6">
                {/* Search Icon */}
                <div className="cursor-pointer">
                  <SearchIcon className="text-black" />
                </div>
                {/* Language Change Dropdown */}
                <div className="relative">
                  <button className="text-black flex items-center">
                    <LanguageIcon />
                    <span className="ml-1">Language</span>
                  </button>
                </div>
                {/* Hamburger Menu Icon */}
                <div className="cursor-pointer mr-6">
                  <MenuIcon className="text-black" />
                </div>
              </div>
      </header>
      {children}

      <footer style={{ textAlign: 'center', padding: '20px', backgroundColor: '#0070f3', color: 'white' }}>
        © 2025 Home Footer
      </footer>
    </Provider>
  );
}



// ListItem Component without TypeScript types
const ListItem = React.forwardRef(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={`block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground ${className}`}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});

ListItem.displayName = "ListItem";