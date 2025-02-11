
// import AdminPannelLayout from '@/components/layout/AdminPannelLayout';


// export default function AdminLayout({ children }) {
//   return (
//     <>
//       <AdminPannelLayout>
//         {children}
//       </AdminPannelLayout>
//     </>
//   );
// }




// app/admin/layout.js
import { AppSidebar } from "@/components/app-sidebar";
import { SiteHeader } from "@/components/site-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

export default function AdminLayout({ children }) {
  const user = { role: 'admin' }; // Replace with actual user logic

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
