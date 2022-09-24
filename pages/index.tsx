import type { NextPage } from 'next';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import Logo from '../components/Logo';
import Main from '../components/Main';
import Navigation from '../components/Navigation';
import useWindowDimensions from '../lib/useWindowDimensions';


type props = {

}

const Page_Home: NextPage<props> = ({

}) => {
  const [sections, setSections] = useState<NodeListOf<HTMLElement>>();
  const [activeSection, setActiveSection] = useState(0);
  const { width, height } = useWindowDimensions();

  useEffect(() => {
    setSections(document.querySelectorAll("section"));
  }, [])
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  const handleScroll = (e: Event) => {
    const scroll = window.scrollY;
    let current = 0;

    if (1 < scroll) {
      sections?.forEach((s, i) => {
        const sectionTop = s.offsetTop;
        if (scroll >= sectionTop - 100) {
          current = i || 1; 
        }
      });
    }

    if (activeSection !== current) setActiveSection(current);
  }

  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        <title>OzanSap</title>
        <meta name="description" content="Personal portfolio website made with NextJS" />
        <meta name="author" content="Ozan Sap" />
        
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#0088ff" />
        <meta name="msapplication-TileColor" content="#1a1a1a" />
        <meta name="theme-color" content="#1a1a1a" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="OzanSap" />
        <meta property="og:description" content="Personal portfolio website made with NextJS" /> 
        <meta property="og:image" content="https://media.discordapp.net/attachments/852880247468064799/1023204209253945354/ozansap.png" />
      </Head>

      <main>
        {width && <Navigation 
          activeSection={activeSection}
        />}
        {width && <Logo 
          activeSection={activeSection}
          width={width}
        />}
        <Main 
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
      </main>
    </div>
  )
}

export default Page_Home;
