"use client";
import * as React from "react";
import { Frame, Sun, Moon, Rss, Waypoints, NotebookPen } from "lucide-react";

import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";

import { NavUser } from "@/components/nav-user";

import ProjectLogo from "@/assets/images/devsconnect.png";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarInset,
  SidebarProvider,
  SidebarRail,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import Image from "next/image";
import { Button } from "./ui/button";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";

// Sample data
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Feed",
      url: "/feed",
      icon: Rss,
      isActive: true,
    },
    {
      title: "Blogs",
      url: "/blogs",
      icon: NotebookPen,
    },
    {
      title: "Connections",
      url: "/connections",
      icon: Waypoints,
    },
    {
      title: "Saved",
      url: "/saved",
      icon: Frame,
    },
  ],
};

export function AppSidebar({ children }: { children: React.ReactNode }) {
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();
  // const memoizedProjectLogo = React.useMemo(() => ProjectLogo, []);
  return (
    <SidebarProvider>
      <Sidebar className="" collapsible="icon">
        <SidebarHeader className="mb-4 flex items-center justify-center mt-3">
          {/* <TeamSwitcher teams={data.teams} /> */}
          <Image
            src={ProjectLogo?.src}
            className="object-contain"
            height={200}
            width={200}
            priority
            alt="project logo"
            // unoptimized
          />
        </SidebarHeader>
        <SidebarContent className="">
          <SidebarGroup className="">
            {/* <SidebarGroupLabel className="font-semibold">MAIN MENU</SidebarGroupLabel> */}

            <SidebarMenu>
              {data?.navMain?.map((item: any) => (
                <SidebarMenuItem className="h-14  ">
                  <Link href={item?.url} prefetch={false}>
                    <SidebarMenuButton
                      tooltip={item?.title}
                      className="p-5"
                      isActive={pathname === item?.url}
                    >
                      {item?.icon && <item.icon />}
                      <span className="text-lg">{item?.title}</span>
                      {/* <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" /> */}
                    </SidebarMenuButton>
                  </Link>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter></SidebarFooter>
        <SidebarRail />
      </Sidebar>
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex w-full items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            {/* <Separator orientation="vertical" className="mr-2 h-4" /> */}
            {/* <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">
                    Building Your Application
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb> */}
            <div className="ml-auto  flex items-center gap-6">
              <NavUser user={data.user} />
              <Button
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                className="rounded-full px-4"
                variant="outline"
                size="icon"
              >
                <motion.div
                  initial={{
                    rotate: theme === "light" ? 0 : 90,
                    scale: theme === "light" ? 1 : 0,
                  }}
                  animate={{
                    rotate: theme === "light" ? 0 : 90,
                    scale: theme === "light" ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <Sun className="h-[1.2rem] w-[1.2rem]" />
                </motion.div>
                <motion.div
                  initial={{
                    rotate: theme === "light" ? -90 : 0,
                    scale: theme === "light" ? 0 : 1,
                  }}
                  animate={{
                    rotate: theme === "light" ? -90 : 0,
                    scale: theme === "light" ? 0 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                  className="absolute"
                >
                  <Moon className="h-[1.2rem] w-[1.2rem]" />
                </motion.div>
                <span className="sr-only">Toggle theme</span>
              </Button>
            </div>
          </div>
        </header>
        {/* <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            <div className="aspect-video rounded-xl bg-muted/50" />
            <div className="aspect-video rounded-xl bg-muted/50" />
            <div className="aspect-video rounded-xl bg-muted/50" />
          </div>
          <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
        </div> */}
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
}
