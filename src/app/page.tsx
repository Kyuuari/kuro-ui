"use client";
import { AccordionDemo } from "@/components/accordion-demo";
import ThemeToggle from "@/components/theme-toggle";
import {
  TypographyBlockquote,
  TypographyDisplay,
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyH4,
  TypographyLarge,
  TypographyLead,
  TypographyMuted,
  TypographyP,
  TypographySmall,
  TypographySub,
} from "@/components/typography";

import dynamic from "next/dynamic";

const ThemeToggleNoSSR = dynamic(() => import("@/components/theme-toggle"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="">
      <section className="h-screen flex flex-1 flex-col items-center justify-center">
        <TypographyH1>黒</TypographyH1>
        <TypographyDisplay>KURO.UI</TypographyDisplay>
        <TypographyH1>ブラック</TypographyH1>
      </section>
    </main>
  );
}
