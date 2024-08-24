import Image from "next/image";
import Hero from './components/Hero'
import { FloatingNav } from "./components/ui/FloatingNav";
import { FaHome } from "react-icons/fa";
import Grid from "./components/Grid";
import RecentsProjects from "./components/RecentsProjects";
import Clients from "./components/Clients";
import Experience from "./components/Experience";
import { FaComputer, FaPerson } from "react-icons/fa6";

export default function Home() {
  return (
      <main className="relative bg-black-100 flex justify-center
      items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
        <div className="max-w-7xl w-full">
          <FloatingNav 
          navItems={[
            {name: 'About', link: '/', icon: <FaHome />},
            {name: 'Projects', link: '/projects', icon: <FaComputer /> },
            {name: 'Testimonials', link: '/testimonials', icon: <FaPerson />},
            {name: 'Contact', link: '/contact'}
          ]}/>
          <Hero />
          <Grid />
          <RecentsProjects />
          <Clients />
          <Experience />
        </div>
      </main>
  );
}
