// "use client"

// import * as React from "react"
// import {
//   BookOpen,
//   Bot,
//   Command,
//   Frame,
//   LifeBuoy,
//   Map,
//   PieChart,
//   Send,
//   Settings2,
//   SquareTerminal,
// } from "lucide-react"

// import { NavMain } from "@/components/nav-main"
// import { NavSecondary } from "@/components/nav-secondary"
// import { NavUser } from "@/components/nav-user"
// import {
//   Sidebar,
//   SidebarContent,
//   SidebarFooter,
//   SidebarHeader,
//   SidebarMenu,
//   SidebarMenuButton,
//   SidebarMenuItem,
// } from "@/components/ui/sidebar"

// const data = {
//   user: {
//     name: "admin",
//     email: "admin@aasint.com",
//     avatar: "/avatars/shadcn.jpg",
//   },
//   navMain: [
//     {
//       title: "Playground",
//       url: "#",
//       icon: SquareTerminal,
//       isActive: true,
//       items: [
//         {
//           title: "History",
//           url: "#",
//         },
//         {
//           title: "Starred",
//           url: "#",
//         },
//         {
//           title: "Settings",
//           url: "#",
//         },
//       ],
//     },
//     {
//       title: "User",
//       url: "#",
//       icon: Bot,
//       items: [
//         {
//           title: "All Users",
//           url: "/admin/user",
//         },
//         {
//           title: "Registration",
//           url: "#",
//         },
       
//       ],
//     },
//     {
//       title: "Page",
//       url: "#",
//       icon: BookOpen,
//       items: [
//         {
//           title: "Add Page",
//           url: "#",
//         },
//         {
//           title: "All Pages",
//           url: "#",
//         },
       
//       ],
//     },
//     {
//       title: "Settings",
//       url: "#",
//       icon: Settings2,
//       items: [
//         {
//           title: "Profile",
//           url: "#",
//         },
//         {
//           title: "Password change",
//           url: "#",
//         },
//         {
//           title: "Customization",
//           url: "#",
//         },
      
//       ],
//     },
//   ],
 

// }

// export function AppSidebar({
//   ...props
// }) {
//   return (
//     (<Sidebar
//       className="top-[--header-height] !h-[calc(100svh-var(--header-height))]"
//       {...props}>
//       <SidebarHeader>
//         <SidebarMenu>
//           <SidebarMenuItem>
//             <SidebarMenuButton size="lg" asChild>
//               <a href="#">
//                 <div
//                   className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
//                   <Command className="size-4" />
//                 </div>
//                 <div className="grid flex-1 text-left text-sm leading-tight">
//                   <span className="truncate font-semibold">AAS ONE</span>
//                   <span className="truncate text-xs"></span>
//                 </div>
//               </a>
//             </SidebarMenuButton>
//           </SidebarMenuItem>
//         </SidebarMenu>
//       </SidebarHeader>
//       <SidebarContent>
//         <NavMain items={data.navMain} />
       
     
//       </SidebarContent>
//       <SidebarFooter>
//         <NavUser user={data.user} />
//       </SidebarFooter>
//     </Sidebar>)
//   );
// }

"use client";

import * as React from "react";
import {
  BookOpen,
  Bot,
  Command,
  Settings2,
  SquareTerminal,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const navData = {
  admin: [
    {
      title: "Dashboard",
      url: "/admin/dashboard",
      icon: SquareTerminal,
      isActive: true,
    },
    {
      title: "Notification",
      url: "#",
      icon: SquareTerminal,
      
      items: [
        { title: "All Request", url: "/admin/blog" },
        { title: "Notification", url: "/admin/notification" },
        { title: "Alerts", url: "/admin/alert" },
      ],
    },
    {
      title: "User",
      url: "#",
      icon: Bot,
      items: [
        { title: "All Users", url: "/admin/user" },
        { title: "Registration", url: "/admin/registration" },
      ],
    },
    {
      title: "Pages",
      url: "#",
      icon: Bot,
      items: [
        { title: "All Page", url: "/admin/page" },
        { title: "Add Page", url: "/admin/addpage" },
      ],
    },
    {
      title: "Blog",
      url: "#",
      icon: Bot,
      items: [
        { title: "All Blog", url: "/admin/blog" },
        { title: "Master", url: "/admin/master" },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [
        { title: "Profile", url: "/admin/profile" },
        { title: "Password change", url: "/admin/resetpassword" },
       
      ],
    },
  ],
  auther: [
    {
      title: "Playground",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        { title: "History", url: "#" },
        { title: "Settings", url: "#" },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [
        { title: "Profile", url: "#" },
        { title: "Password change", url: "#" },
      ],
    },
  ],
  editor: [
    {
      title: "Home",
      url: "#",
      icon: BookOpen,
      items: [],
    },
    {
      title: "Login",
      url: "#",
      icon: Bot,
      items: [],
    },
  ],
};

const userData = {
  admin: {
    name: "Admin User",
    email: "admin@example.com",
    avatar: "/avatars/admin.jpg",
  },
  editor: {
    name: "Editor",
    email: "editor@example.com",
    avatar: "/avatars/user.jpg",
  },
  auther: {
    name: "Auther",
    email: "auther@example.com",
    avatar: "/avatars/guest.jpg",
  },
};

export function AppSidebar({ user }) {
  const { role } = user;
  const navItems = navData[role] || navData.guest;
  const userInfo = userData[role] || userData.guest;

  return (
    <Sidebar className="top-[--header-height] !h-[calc(100svh-var(--header-height))]">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <Command className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">AAS ONE</span>
                  <span className="truncate text-xs"></span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={navItems} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={userInfo} />
      </SidebarFooter>
    </Sidebar>
  );
}
