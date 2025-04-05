
import { useState, useEffect } from 'react'
import Image from "next/image";
import chuck from "@/assets/chuck.png";
import { Quote } from "./ui/quote"
import { tagRevalidation, incrementVisitorCount } from "@/db/actions";


export default async function Home({ quote }: { quote: string }) {



  return (
    <main className="w-full max-w-5xl">
      <div className="grid md:grid-cols-[1fr_1fr] gap-[50px] w-full gap-8 p-4">
        <div className="h-[700px] w-full relative border border-foreground/10 rounded-lg overflow-hidden">
          <Image
            fill={true}
            src={chuck}
            alt="Chuck Norris"
            priority
            className="h-auto object-cover"
          />
        </div>


        <Quote quote={quote} />

      </div>
    </main>
  )
}