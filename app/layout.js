import { ModalProvider } from "./context/modalContext";
import "./globals.css";
import ReduxProvider from "./ReduxProvider";

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
            <ReduxProvider>
              {children}
            </ReduxProvider>
        </ModalProvider>
      </body>
    </html>
  );
}
