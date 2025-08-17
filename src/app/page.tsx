import Header from '@/components/Header/Heade';
import './globals.css'
import Layout from "./Layout";
import Contact from "@/components/Contact/Contact";
import About from '@/components/About/About';
import Projects from '@/components/Projects/Projects';
import Expiriance from '@/components/Expiriance/Expiriance';
import Footer from '@/components/Footer/Footer';

export default function Home() {
  return (
    <Layout>
      <div className="fixed top-0 -z-1 h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <Header/>
      <div className="w-full bg-gray-50 pb-10 md:pb-32">
        <About/>
      </div>
      <Projects/>
      <Expiriance/>
      <Contact/>
      <Footer/>
    </Layout>
  );
}
