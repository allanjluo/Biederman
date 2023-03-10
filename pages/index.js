import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import {Footer} from '../components'
/* import styles from '@/styles/Home.module.css'; */


const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      {/* <div className='is-preload'> */}
        {/* <!-- Wrapper --> */}
        {/* <div id='wrapper'> */}
          {/* 	<!-- Header --> */}
     

          {/* 	<!-- Menu --> */}
      {/*     <nav id='menu'>
            <h2>Menu</h2>
            <ul>
              <li>
                <a href='index.html'>Home</a>
              </li>
              <li>
                <a href='generic.html'>Ipsum veroeros</a>
              </li>
              <li>
                <a href='generic.html'>Tempus etiam</a>
              </li>
              <li>
                <a href='generic.html'>Consequat dolor</a>
              </li>
              <li>
                <a href='elements.html'>Elements</a>
              </li>
            </ul>
          </nav> */}

          {/* <!-- Main --> */}
          <div id='main'>
            <div className='inner'>
              <header>
                <h1>
                  Welcome To Biederman Photography
                  <br />
                  designed by Allan Luo
                  .
                </h1>
                <p>
                  Etiam quis viverra lorem, in semper lorem. Sed nisl arcu
                  euismod sit amet nisi euismod sed cursus arcu elementum ipsum
                  arcu vivamus quis venenatis orci lorem ipsum et magna feugiat
                  veroeros aliquam. Lorem ipsum dolor sit amet nullam dolore.
                </p>
              </header>
              <section className='tiles'>
                <article className='style1'>
                  <span className='image'>
                    <img src='pic01.jpg' alt='' />
                  </span>
                  <a href='generic.html'>
                    <h2>Magna</h2>
                    <div className='content'>
                      <p>
                        Sed nisl arcu euismod sit amet nisi lorem etiam dolor
                        veroeros et feugiat.
                      </p>
                    </div>
                  </a>
                </article>
                <article className='style2'>
                  <span className='image'>
                    <img src='pic02.jpg' alt='' />
                  </span>
                  <a href='generic.html'>
                    <h2>Lorem</h2>
                    <div className='content'>
                      <p>
                        Sed nisl arcu euismod sit amet nisi lorem etiam dolor
                        veroeros et feugiat.
                      </p>
                    </div>
                  </a>
                </article>
                <article className='style3'>
                  <span className='image'>
                    <img src='pic03.jpg' alt='' />
                  </span>
                  <a href='generic.html'>
                    <h2>Feugiat</h2>
                    <div className='content'>
                      <p>
                        Sed nisl arcu euismod sit amet nisi lorem etiam dolor
                        veroeros et feugiat.
                      </p>
                    </div>
                  </a>
                </article>
                <article className='style4'>
                  <span className='image'>
                    <img src='pic04.jpg' alt='' />
                  </span>
                  <a href='generic.html'>
                    <h2>Tempus</h2>
                    <div className='content'>
                      <p>
                        Sed nisl arcu euismod sit amet nisi lorem etiam dolor
                        veroeros et feugiat.
                      </p>
                    </div>
                  </a>
                </article>
                <article className='style5'>
                  <span className='image'>
                    <img src='pic05.jpg' alt='' />
                  </span>
                  <a href='generic.html'>
                    <h2>Aliquam</h2>
                    <div className='content'>
                      <p>
                        Sed nisl arcu euismod sit amet nisi lorem etiam dolor
                        veroeros et feugiat.
                      </p>
                    </div>
                  </a>
                </article>
                <article className='style6'>
                  <span className='image'>
                    <img src='pic06.jpg' alt='' />
                  </span>
                  <a href='generic.html'>
                    <h2>Veroeros</h2>
                    <div className='content'>
                      <p>
                        Sed nisl arcu euismod sit amet nisi lorem etiam dolor
                        veroeros et feugiat.
                      </p>
                    </div>
                  </a>
                </article>
                <article className='style2'>
                  <span className='image'>
                    <img src='pic07.jpg' alt='' />
                  </span>
                  <a href='generic.html'>
                    <h2>Ipsum</h2>
                    <div className='content'>
                      <p>
                        Sed nisl arcu euismod sit amet nisi lorem etiam dolor
                        veroeros et feugiat.
                      </p>
                    </div>
                  </a>
                </article>
                <article className='style3'>
                  <span className='image'>
                    <img src='pic08.jpg' alt='' />
                  </span>
                  <a href='generic.html'>
                    <h2>Dolor</h2>
                    <div className='content'>
                      <p>
                        Sed nisl arcu euismod sit amet nisi lorem etiam dolor
                        veroeros et feugiat.
                      </p>
                    </div>
                  </a>
                </article>
                <article className='style1'>
                  <span className='image'>
                    <img src='pic09.jpg' alt='' />
                  </span>
                  <a href='generic.html'>
                    <h2>Nullam</h2>
                    <div className='content'>
                      <p>
                        Sed nisl arcu euismod sit amet nisi lorem etiam dolor
                        veroeros et feugiat.
                      </p>
                    </div>
                  </a>
                </article>
                <article className='style5'>
                  <span className='image'>
                    <img src='pic10.jpg' alt='' />
                  </span>
                  <a href='generic.html'>
                    <h2>Ultricies</h2>
                    <div className='content'>
                      <p>
                        Sed nisl arcu euismod sit amet nisi lorem etiam dolor
                        veroeros et feugiat.
                      </p>
                    </div>
                  </a>
                </article>
                <article className='style6'>
                  <span className='image'>
                    <img src='pic11.jpg' alt='' />
                  </span>
                  <a href='generic.html'>
                    <h2>Dictum</h2>
                    <div className='content'>
                      <p>
                        Sed nisl arcu euismod sit amet nisi lorem etiam dolor
                        veroeros et feugiat.
                      </p>
                    </div>
                  </a>
                </article>
                <article className='style4'>
                  <span className='image'>
                    <img src='pic12.jpg' alt='' />
                  </span>
                  <a href='generic.html'>
                    <h2>Pretium</h2>
                    <div className='content'>
                      <p>
                        Sed nisl arcu euismod sit amet nisi lorem etiam dolor
                        veroeros et feugiat.
                      </p>
                    </div>
                  </a>
                </article>
              </section>
            </div>
          </div>


        {/* </div> */}
      {/* </div> */}
    </>
  );
}
