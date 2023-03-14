import {Nav, Footer} from './index'

export default function Layout({children}){
  return (
    <div className='is-preload'>
<div id='wrapper'>
<Nav />
{children}
<Footer />
</div>
    </div>

  )
}
