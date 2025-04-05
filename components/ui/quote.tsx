"use client";

import { useState } from "react";
import { Button } from "./button";
import { tagRevalidation } from "@/db/actions";

const CopyIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
  </svg>
);

const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

export function Quote({ quote }: { quote: string }) {
  const [icon, setIcon] = useState(CopyIcon);

  const copy = async () => {
    await navigator?.clipboard?.writeText(quote);
    setIcon(CheckIcon);
    setTimeout(() => setIcon(CopyIcon), 2000);
  };

  return (


    <div className="w-full flex flex-col items-center justify-center gap-4">
      <div className="w-full border border-foreground/10 bg-muted rounded-md p-10 my-6 relative">
        <Button
          size="icon"
          onClick={copy}
          variant={"outline"}
          className="absolute right-2 top-2"
        >
          {icon}
        </Button>
        <blockquote className="text-s p-3">{quote}</blockquote>
      </div>

      <div>
        <Button onClick={() => tagRevalidation("Quote")}
          size="sm" variant="default">
          Get New Quote
        </Button>
      </div>
    </div>


  );
}
