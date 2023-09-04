import Link from 'next/link';
import React from 'react';

export default function Nav () {

  //scrolling function
  const handleScroll = (e) => {
    e.preventDefault();
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    // get the element by id and use scrollIntoView
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
  };
  
  

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
      {/* <a href='/' className='logo'>
        <span className='symbol'>
          <img src='logo.svg' alt='' />
        </span>
        <span>
          <img className='banner' src='banner.png' alt='' />
        </span>
        <span className='title'>Biederman</span>
      </a>   */}

      {/* <!-- Nav --> */}
      <nav>
        
        <ul>
          <li className="left-link">
            {/* <Link href='#menu'>Menu</Link> */}
            {/* <Link href="/engagements"> */}
            <Link href="/">
      Engagements
      </Link>
          </li>

        {/* optional links  */}
          {/* <li><Link href="/weddings">
        Weddings
      </Link></li>
      <li><Link href="/corporate">
        Corporate
      </Link></li>
      <li><Link href="/portraits">
        Portraits
      </Link></li> */}
      <li>
        <Link href="/faq">
         FAQ
        </Link>
      </li>
      <li>
        <Link href="/about">
        About
        </Link>
      </li>
      <li>
          <Link href="#footer" onClick={handleScroll}>
            Contact Me
          </Link>
      </li>


        </ul>
        
      </nav>
    </div>
  </header>
  )
}


