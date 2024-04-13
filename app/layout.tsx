import type { Metadata } from "next";
import { Inter, Roboto_Condensed, Barlow_Condensed } from "next/font/google";
import { Poppins } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import { Toaster } from "@/components/ui/sonner";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["greek"] });
const roboto = Barlow_Condensed({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const warsaw = localFont({
  src: [
    {
      path: "../public/fonts/WarsawGothicSuExt.otf",
    },
  ],
  variable: "--font-warsaw",
});

export const metadata: Metadata = {
  title: {
    default: "BitSpectron",
    template: "%s | BitSpectron",
  },
  description:
    "We&apos;re a strategic freelance web development agency for people trying to reach the (almost) impossible",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={warsaw.variable}>
        {children}
        <Toaster richColors />
        <SpeedInsights />
      </body>
    </html>
  );
}
