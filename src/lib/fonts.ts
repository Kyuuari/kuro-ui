import { Bebas_Neue, Playfair_Display, Spectral_SC } from "next/font/google";


export const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
});

export const spectral = Spectral_SC({
  subsets: ["latin"],
  weight: ["400"],
  style: ["italic"],
  variable: "--font-sub",
});

export const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400"],
  style: ["italic"],
  variable: "--font-body",
});