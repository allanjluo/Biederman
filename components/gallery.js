import { useAuthContext } from '../context/authcontext';
import EngageUploadForm from './engageuploadform';

export default function Gallery() {
  const { user } = useAuthContext();
  return (
    <div id='main'>
      <div className='inner'>
        <header>
          <h1>
            Welcome To Biederman Photography
            <br />
            designed by Allan Luo .
          </h1>
          <p>
            Etiam quis viverra lorem, in semper lorem. Sed nisl arcu euismod sit
            amet nisi euismod sed cursus arcu elementum ipsum arcu vivamus quis
            venenatis orci lorem ipsum et magna feugiat veroeros aliquam. Lorem
            ipsum dolor sit amet nullam dolore.
          </p>
        </header>
        {user && <EngageUploadForm />}
        <section className='tiles'>
          <article>
            <span className='image'>
              <img
                src='https://product-image.juniqe-production.juniqe.com/media/catalog/product/seo-cache/x800/7/6/768-38-MUG-HAN-1/Fika-daylight-design-studio-Mug.jpg'
                alt=''
              />
            </span>
            <a href='generic.html'>
              <h2>Magna</h2>
              <div className='content'>
                <p>
                  Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros
                  et feugiat.
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
                  Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros
                  et feugiat.
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
                  Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros
                  et feugiat.
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
                  Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros
                  et feugiat.
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
                  Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros
                  et feugiat.
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
                  Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros
                  et feugiat.
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
                  Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros
                  et feugiat.
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
                  Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros
                  et feugiat.
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
                  Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros
                  et feugiat.
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
                  Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros
                  et feugiat.
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
                  Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros
                  et feugiat.
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
                  Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros
                  et feugiat.
                </p>
              </div>
            </a>
          </article>
        </section>
      </div>
    </div>
  );
}
