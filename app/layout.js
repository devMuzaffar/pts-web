import { ModalProvider } from "./context/modalContext";
import "./globals.css";

export const metadata = {
  title: "PTS Education",
  description: "Learn with PTS Education",
  icons: {
    icon: "/icon.png", 
    },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <ModalProvider>
          {children}
        </ModalProvider>
      </body>
    </html>
  );
}
