"use server";

import prisma from "@/lib/prisma";
import { IVisitor, NextProps } from "./types";

export async function getVisitorCount(): Promise<IVisitor> {
  const visitor = await prisma.visitor.findUnique({
    where: { id: 1 },
  });

  // Handle initial state if no visitor exists
  return visitor || { id: 1, count: 0 };
}


export const fetchNewQuote = async ({ next }: NextProps = {}) => {
  const response = await fetch(
    'https://api.chucknorris.io/jokes/random?category=dev',
    { next }
  )

  const data = await response.json()
  return data.value // returns just the quote string
}

