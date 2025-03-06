import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import "./globals.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import AppLayout from "./AppLayout";

export const metadata = {
  title: "PTS Dashboard",
  description: "Dashboard for managing your studies",
};

export default function DashboardLayout({ children }) {
  return (
      <AppRouterCacheProvider>
          <AppLayout>{children}</AppLayout>
      </AppRouterCacheProvider>
  );
}
