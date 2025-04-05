"use server";

import prisma from "@/lib/prisma";
import { IVisitor } from "./types";
import { revalidateTag } from "next/cache";


export async function tagRevalidation(tag: string) {
  revalidateTag(tag);
}


export async function incrementVisitorCount(): Promise<IVisitor> {
  const visitor = await prisma.visitor.upsert({
    where: { id: 1 },
    create: { count: 1 },
    update: { count: { increment: 1 } },
  });

  return visitor;
}
