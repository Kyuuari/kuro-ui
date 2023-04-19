import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export function TypographyDisplay({ children }: Props) {
  return (
    <h1 className="font-display scroll-m-20 text-7xl font-extrabold tracking-tight lg:text-8xl">
      {children}
    </h1>
  );
}

export function TypographySub({ children }: Props) {
  return (
    <h3 className="font-sub scroll-m-20 text-2xl font-semibold tracking-tight;">
      {children}
    </h3>
  );
}

export function TypographyH1({ children }: Props) {
  return (
    <h1 className="font-sub scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
      {children}
    </h1>
  );
}

export function TypographyH2({ children }: Props) {
  return (
    <h2 className="font-sub scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
      {children}
    </h2>
  );
}

export function TypographyH3({ children }: Props) {
  return (
    <h3 className="font-sub scroll-m-20 text-2xl font-semibold tracking-tight">
      {children}
    </h3>
  );
}

export function TypographyH4({ children }: Props) {
  return (
    <h4 className="font-sub scroll-m-20 text-xl font-semibold tracking-tight">
      {children}
    </h4>
  );
}

export function TypographyP({ children }: Props) {
  return (
    <p className="leading-7 font-body [&:not(:first-child)]:mt-6 max-w-[60ch]">
      {children}
    </p>
  );
}

export function TypographyBlockquote({ children }: Props) {
  return (
    <blockquote
      className="mt-6 border-l-2 font-body border-red-600
 pl-6 italic"
    >
      {children}
    </blockquote>
  );
}

export function TypographyLead({ children }: Props) {
  return <p className="text-xl font-body text-muted-foreground">{children}</p>;
}

export function TypographyLarge({ children }: Props) {
  return <div className="text-lg font-body font-semibold">{children}</div>;
}

export function TypographySmall({ children }: Props) {
  return (
    <small className="text-sm font-body font-medium leading-none">
      {children}
    </small>
  );
}

export function TypographyMuted({ children }: Props) {
  return <p className="text-sm font-body text-muted-foreground">{children}</p>;
}
