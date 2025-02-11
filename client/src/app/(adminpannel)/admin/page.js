// import { AppSidebar } from "@/components/app-sidebar";
// import { SiteHeader } from "@/components/site-header";
// import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
// //import { Children } from "react";

// export default function Page() {
//   //const user = { role: 'admin' }; // Change role for testing
//   return (
//     <div className="[--header-height:calc(theme(spacing.14))]">
//       <SidebarProvider className="flex flex-col">
        
//         <div className="flex flex-1">
          
//           <SidebarInset>
//             <div className="flex flex-1 flex-col gap-4 p-4">
//               <div className="grid auto-rows-min gap-4 md:grid-cols-3">
//                 <div className="aspect-video rounded-xl bg-muted/50" />
//                 <div className="aspect-video rounded-xl bg-muted/50" />
//                 <div className="aspect-video rounded-xl bg-muted/50" />
//               </div>
//               <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
//             </div>
           
//           </SidebarInset>
//         </div>
//       </SidebarProvider>
//     </div>
//   );
// }

// pages/admin/dashboard.js
import { Card } from "@/components/ui/card"; // Your custom Card component
import { Users, Bell, FileText, BookOpen } from 'lucide-react';

const Dashboard = () => {
  const stats = [
    { title: 'Total Users', value: 120, icon: <Users className="text-3xl text-blue-600" /> },
    { title: 'Pending Notifications', value: 5, icon: <Bell className="text-3xl text-yellow-600" /> },
    { title: 'Published Blogs', value: 34, icon: <BookOpen className="text-3xl text-green-600" /> },
    { title: 'Pages', value: 10, icon: <FileText className="text-3xl text-purple-600" /> },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <Card key={stat.title} className="flex items-center p-4 shadow-lg">
            <div className="mr-4">{stat.icon}</div>
            <div>
              <span className="text-lg font-bold">{stat.value}</span>
              <span className="text-gray-500 block">{stat.title}</span>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;


