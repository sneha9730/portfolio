import Navbar from './components/navbar';
import Contact from './sections/contact';
import Hero from './sections/hero';
import Experience from './sections/experience';
import FeaturedProjects from './sections/projects';
import Education from './sections/education';
import Skills from './sections/skills';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <>
        <Navbar />
        <Hero />
        <Experience/>
        <Education/>
        <Skills />
        <FeaturedProjects/>
        <Contact/>
      </>
    </div>
  );
}

export default App;
