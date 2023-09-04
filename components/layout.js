import {Nav, Footer} from './index'
import dynamic from "next/dynamic";
import { useEffect } from 'react';


const CalendlyPopUp = dynamic(() => import("components/calendlyPopup.js"), { ssr: false, }); 

export default function Layout({children}){


  return (
    <div id="root">
    <div className='is-preload'>
<div id='wrapper'>
<Nav/>

{children}
<CalendlyPopUp />
<Footer />
</div>
    </div>
    </div>
  )
}
