import { Inter, IBM_Plex_Mono } from "next/font/google";

export const inter = Inter({
  weight: ["600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const ibm = IBM_Plex_Mono({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-ibm",
});
