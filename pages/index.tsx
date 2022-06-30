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
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navigation 
          activeSection={activeSection}
          width={width}
          />
        <Logo 
          activeSection={activeSection}
          width={width}
        />
        <Main 
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
      </main>
    </div>
  )
}

export default Page_Home;
