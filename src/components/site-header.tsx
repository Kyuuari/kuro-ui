"use client";
import React from "react";
import MainNav from "./main-nav";
import Link from "next/link";
import { Icons } from "./icons";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import dynamic from "next/dynamic";

const ThemeToggleNoSSR = dynamic(() => import("@/components/theme-toggle"), {
  ssr: false,
});

type Props = {};

export default function SiteHeader({}: Props) {
  return (
    <header className="supports-backdrop-blur:bg-background/60 fixed top-0 z-40 w-full border-b bg-background/95 shadow-sm backdrop-blur">
      <div className="container flex h-14 items-center">
        <MainNav />
        {/* <MobileNav /> */}
        <div className="flex flex-1 items-center space-x-2 sm:space-x-4 justify-end ">
          <nav className="flex items-center space-x-1">
            {/* <Link
              href={"https://github.com/shadcn/ui"}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={cn(
                  buttonVariants({
                    size: "sm",
                    variant: "ghost",
                  }),
                  "w-9 px-0"
                )}
              >
                <Icons.gitHub className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </div>
            </Link> */}
            {/* <Link
              href={siteConfig.links.twitter}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={cn(
                  buttonVariants({
                    size: "sm",
                    variant: "ghost",
                  }),
                  "w-9 px-0"
                )}
              >
                <Icons.twitter className="h-5 w-5 fill-current" />
                <span className="sr-only">Twitter</span>
              </div>
            </Link> */}
            <ThemeToggleNoSSR />
          </nav>
        </div>
      </div>
    </header>
  );
}
