import Link from 'next/link'

export default function Nav () {
  return (
  /*   <nav>
      <Link href="/engagements">
      Surprise Engagements
      </Link>
      <Link href="/weddings">
        Weddings
      </Link>
    </nav> */
    <header id='header'>

    <div className='inner'>
      {/* 	<!-- Logo --> */}
      <a href='index.html' className='logo'>
        <span className='symbol'>
          <img src='logo.svg' alt='' />
        </span>
        <span>
          <img className='banner' src='banner.png' alt='' />
        </span>
        <span className='title'>Biederman</span>
      </a>

      {/* <!-- Nav --> */}
      <nav>
        <h3>
        <ul>
          <li>
            {/* <Link href='#menu'>Menu</Link> */}
            <Link href="/engagements">
      Engagements
      </Link>
          </li>
          <li><Link href="/weddings">
        Weddings
      </Link></li>
      <li><Link href="/corporate">
        Corporate
      </Link></li>
      <li><Link href="/portraits">
        Portraits
      </Link></li>
      <li><Link href="/faq">
        FAQ
      </Link></li>
      <li><Link href="/about">
        About
      </Link></li>
        </ul>
        </h3>
      </nav>
    </div>
  </header>
  )
}


