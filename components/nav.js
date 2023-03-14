import Link from 'next/link'

export default function Nav () {
  return (
    <nav>
      <Link href="/engagements">
      Surprise Engagements
      </Link>
      <Link href="/weddings">
        Weddings
      </Link>
    </nav>
  )
}


