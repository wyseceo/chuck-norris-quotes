'use client'

import { useEffect, useState } from 'react'
import { getVisitorCount } from '@/db/queries'
import { incrementVisitorCount } from '@/db/actions'
import { ThemeSwitcher } from "@/components/theme-switcher";

export default function Footer() {
  const [count, setCount] = useState<number | null>(null)

  useEffect(() => {
    const updateVisitorCount = async () => {
      try {
        await incrementVisitorCount()
        const result = await getVisitorCount()
        setCount(result?.count ?? 0)
      } catch (error) {
        console.error('Failed to update visitor count:', error)
      }
    }

    updateVisitorCount()
  }, [])

  return (
    <footer className="w-full flex items-center justify-center border-t mx-auto text-center text-s gap-8 py-16">
      <p>Current visitor count: {count}</p>
      <ThemeSwitcher />
    </footer>
  )
}
