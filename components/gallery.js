import { useAuthContext } from '../context/authcontext';
import EngageUploadForm from './engageuploadform';


export default function Gallery() {
  const { user } = useAuthContext();
  
  return (
    <div id='main'>
      <div className='inner'>
        <header>
          <h1>
            W. Biederman Photography
            <br />
            {/* Specialist in Proposal and Event  */}
          </h1>
          <blockquote>
            <strong>Welcome! </strong>I specialize in engagement, wedding, and event photography, and have years of experience tailoring each proposal to the client's exact needs.  People often don't know where to start, but I'm here to make it easy! Don't know where you're going to pop the question? Contact me for ideas on the best spots around town, or take a peek below to get some starting ideas. 
          </blockquote>
          <hr></hr>
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
