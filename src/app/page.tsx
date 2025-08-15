import AboutComponent from "@/components/About/AboutComponent";
import ContactComponent from "@/components/Contact/ContanctComponent";
import ExpirianceComponent from "@/components/Expiriance/ExpirianceComponent";
import FooterComponent from "@/components/Footer/FooterComponent";
import HeaderComponent from "@/components/Header/HeaderComponent";
import ProjectsComponent from "@/components/Projects/ProjectsComponent";
import './globals.css'
import Layout from "./Layout";

export default function Home() {
  return (
    <Layout>
      <div className="fixed top-0 -z-1 h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <HeaderComponent/>
      <div className="w-full bg-gray-50 pb-10 md:pb-32">
        <AboutComponent/>
      </div>
      <ProjectsComponent/>
      <ExpirianceComponent/>
      <ContactComponent/>
      <FooterComponent/>
    </Layout>
  );
}
