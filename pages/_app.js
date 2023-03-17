import '@/styles/globals.css';
import Nav from '../components/nav.js';
import '../assets/css/main.css';
import Head from 'next/head'
import Layout from '../components/layout'
import { AuthContextProvider } from '../context/authcontext'

/* import '../dist/css/main.css' */

export default function App({ Component, pageProps }) {
  return (
    // <userprovider>
    <>
      <Head>
        <title>W Biederman Photography</title>
        <meta charSet='utf-8' />
        <meta
          name='description'
          content='Chicago Wedding Surprise Proposal Engagement Photographer'
        />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, user-scalable=no'
        />
      </Head>
      <AuthContextProvider>
      <Layout>
      <Component {...pageProps} />
      </Layout>
      </AuthContextProvider>
    </>
  );
}
