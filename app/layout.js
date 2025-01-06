import { ModalProvider } from "./context/modalContext";
import "./globals.css";

export const metadata = {
  title: "Canva Next",
  description: "Generated by create next app",
  icons: {
      icon: "/canva.svg",
  }
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