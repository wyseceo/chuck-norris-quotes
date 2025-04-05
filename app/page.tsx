
import Home from '@/components/home'
import { fetchNewQuote } from '@/db/queries'

export default async function Page() {
  // Fetch initial data on the server

  const quote = await fetchNewQuote({ next: { tags: ['Quote'] } })

  return (
    <Home quote={quote} />
  )
}