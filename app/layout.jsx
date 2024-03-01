import { Inter } from "next/font/google";
import "./globals.css";
import Provider from "@/components/Provider";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ConnectIn",
  description: "Create a profile alike LinkedIn on ConnectIn",
  keywords: "ConnectIn, LinkedIn, Profile, Social Media, Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
