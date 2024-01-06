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
            <strong>Welcome! </strong>I specialize in surprise engagements, wedding, and event photography. I have years of experience tailoring each session to the client&apos;s exact needs.  People often don&apos;t know where to start, especially with surprise engagements, but I&apos;m here to make it easy! Don&apos;t know where you&apos;re going to pop the question? Contact me for ideas on the best spots around town or take a peek below to get some starting ideas. 
          </blockquote>
          {/* <hr></hr> */}
        </header>
        {user && <EngageUploadForm />}
        <section className='tiles'>
          <article>
            <span className='image'>
              <img
                src='north_avenue_beach/main.jpg'
                alt=''
              />
            </span>
            <a href='generic.html'>
              <h2 >North Avenue Beach</h2>
              <div className='content'>
                <p>
                  Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros
                  et feugiat.
                </p>
              </div>
            </a>
          </article>
        <article >
            <span className='image'>
              <img src='lincoln_park_zoo/mainzoo.jpg' alt='' />
            </span>
            <a href='generic.html'>
              <h2>Lincoln Park Zoo</h2>
              <div className='content'>
                <p>
                  Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros
                  et feugiat.
                </p>
              </div>
            </a>
          </article>
          <article>
            <span className='image'>
              <img src='botanical_garden/maingarden.jpg' alt='' />
            </span>
            <a href='generic.html'>
              <h2>Chicago Botanical Garden</h2>
              <div className='content'>
                <p>
                  Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros
                  et feugiat.
                </p>
              </div>
            </a>
          </article>
          <article>
            <span className='image'>
              <img src='olive_park/mainolive.jpg' alt='' />
            </span>
            <a href='generic.html'>
              <h2>Olive Park</h2>
              <div className='content'>
                <p>
                  Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros
                  et feugiat.
                </p>
              </div>
            </a>
          </article>
          <article>
            <span className='image'>
              <img src='adler_museum/adler2.jpg' alt='' />
            </span>
            <a href='generic.html'>
              <h2>Adler Planetarium</h2>
              <div className='content'>
                <p>
                  Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros
                  et feugiat.
                </p>
              </div>
            </a>
          </article>
          <article >
            <span className='image'>
              <img src='nature_walk/mainnature.jpg' alt='' />
            </span>
            <a href='generic.html'>
              <h2>Peggy Notebaert Nature Walk</h2>
              <div className='content'>
                <p>
                  Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros
                  et feugiat.
                </p>
              </div>
            </a>
          </article>
          <article>
            <span className='image'>
              <img src='chicagoland_area/mainarea.jpg' alt='' />
            </span>
            <a href='generic.html'>
              <h2>Greater Chicagoland Area</h2>
              <div className='content'>
                <p>
                  Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros
                  et feugiat.
                </p>
              </div>
            </a>
          </article>
          {/* <article className='style3'>
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
          </article> */}
        </section>
      </div>
    </div>
  );
}
