import Image from "next/image";
import { Bebas_Neue } from "next/font/google";
import { AccordionDemo } from "@/components/accordion-demo";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="font-display scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        KURO.UI
      </h1>
      <AccordionDemo />
    </main>
  );
}
