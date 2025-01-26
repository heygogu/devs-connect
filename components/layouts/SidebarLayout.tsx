import React from "react";
import { AppSidebar } from "../app-sidebar";

const SidebarLayout = ({ children }: { children: React.ReactNode }) => {
  return <AppSidebar>{children}</AppSidebar>;
};

export default SidebarLayout;
