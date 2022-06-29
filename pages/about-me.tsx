import type { NextPage } from 'next';
import Head from 'next/head';
import AboutMe from '../components/AboutMe';
import Navigation from '../components/Navigation';


type props = {

}

const Page_AboutMe: NextPage<props> = ({

}) => {

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navigation />
        <AboutMe />
      </main>
    </div>
  )
}

export default Page_AboutMe;
