import Head from 'next/head';
import Image from 'next/image';
import {useAuthContext} from "../context/authcontext"
import { Inter } from 'next/font/google';
import {Gallery, UploadForm} from '../components'
/* import styles from '@/styles/Home.module.css'; */


const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  //const { user } = useAuthContext()
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

    <Gallery />


        {/* </div> */}
      {/* </div> */}
    </>
  );
}
