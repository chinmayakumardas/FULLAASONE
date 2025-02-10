// // app/about/page.js


// export default function AdminPage() {
//   return (
//     <div className="h-full w-full">
//        {/* Technical Research Reports Section */}
//     <section className="flex items-center justify-center w-full h-screen bg-gray-100">
//       <h2 className="text-5xl font-bold">Technical Research Reports</h2>
//     </section>
//     {/* Market Trends Analysis Section */}
//     <section className="flex items-center justify-center w-full h-screen bg-blue-500">
//       <h1 className="text-6xl font-bold text-white">Market Trends Analysis</h1>
//     </section>


//     {/* Webinars & Online Workshops Section */}
//     <section className="flex items-center justify-center w-full h-screen bg-green-200">
//       <h2 className="text-5xl font-bold">Webinars & Online Workshops</h2>
//     </section>
//     </div>
//   );
// }

import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"

export default function Page() {
  return (
    <div className="[--header-height:calc(theme(spacing.14))]">
      <SidebarProvider className="flex flex-col">
        <SiteHeader />
        <div className="flex flex-1">
          <AppSidebar />
          <SidebarInset>
            <div className="flex flex-1 flex-col gap-4 p-4">
              <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                <div className="aspect-video rounded-xl bg-muted/50" />
                <div className="aspect-video rounded-xl bg-muted/50" />
                <div className="aspect-video rounded-xl bg-muted/50" />
              </div>
              <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
            </div>
          </SidebarInset>
        </div>
      </SidebarProvider>
    </div>
  )
}
