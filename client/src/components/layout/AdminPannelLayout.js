// // app/home/layout.js
// import Link from 'next/link';

// export default function AdminPannelLayout({ children }) {
//   return (
//     <>
//       {/* Header */}
     


//       {/* Main Content */}
//       <main>{children}</main>

//       {/* Footer
//       <footer className="text-center py-4 bg-[#0070f3] text-white">
//         © 2025 Admin Footer
//       </footer> */}
//     </>
//   );
// }
// components/layout/AdminPannelLayout.js
import { AppSidebar } from "@/components/app-sidebar";
import { SiteHeader } from "@/components/site-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

export default function AdminPannelLayout({ children }) {
  const user = { role: 'auther' }; // Replace with actual user logic

  return (
    <div className="[--header-height:calc(theme(spacing.14))]">
      <SidebarProvider className="flex flex-col">
        <SiteHeader />
        <div className="flex flex-1">
          <AppSidebar user={user} />
          <SidebarInset>
            {children} {/* This renders the selected page's content */}
          </SidebarInset>
        </div>
      </SidebarProvider>
    </div>
  );
}
