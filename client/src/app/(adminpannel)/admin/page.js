// // // app/about/page.js


// import { AppSidebar } from "@/components/app-sidebar"
// import { SiteHeader } from "@/components/site-header"
// import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
// import { Children } from "react"

// export default function Page() {
//   const user='admin'
//   return (
//     <div className="[--header-height:calc(theme(spacing.14))]">
//       <SidebarProvider className="flex flex-col">
//         <SiteHeader />
//         <div className="flex flex-1">
//           <AppSidebar user={user}/>
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
//   )
// }

import { AppSidebar } from "@/components/app-sidebar";
import { SiteHeader } from "@/components/site-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
//import { Children } from "react";

export default function Page() {
  //const user = { role: 'admin' }; // Change role for testing
  return (
    <div className="[--header-height:calc(theme(spacing.14))]">
      <SidebarProvider className="flex flex-col">
        
        <div className="flex flex-1">
          
          <SidebarInset>
            {/* <div className="flex flex-1 flex-col gap-4 p-4">
              <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                <div className="aspect-video rounded-xl bg-muted/50" />
                <div className="aspect-video rounded-xl bg-muted/50" />
                <div className="aspect-video rounded-xl bg-muted/50" />
              </div>
              <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
            </div> */}
           
          </SidebarInset>
        </div>
      </SidebarProvider>
    </div>
  );
}


