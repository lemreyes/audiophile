import { Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata = {
  title: "Audiophile | A FrontendMentor guru-level challenge",
  description: "Audiophile Fullstack NextJs Solution w/ React Server Components ",
  icons: {
    icon: '/assets/favicon-32x32.png'
  }
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon-32x32.png" sizes="any" />
      </head>
      <body className={`${manrope.className} relative`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
