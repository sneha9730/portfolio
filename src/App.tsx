import Navbar from './components/navbar';
import Contact from './sections/contact';
import Hero from './sections/hero';
import Experience from './sections/experience';
import FeaturedProjects from './sections/projects';
import Education from './sections/education';
import Skills from './sections/skills';

function App() {
  return (
    <div className="min-h-screen flex flex-col scroll-smooth">
      <Navbar />
      <div id="hero"><Hero /></div>
      <div id="skills"><Skills /></div>
      <div id="projects"><FeaturedProjects /></div>
      <div id="experience"><Experience /></div>
      <div id="education"><Education /></div>
      <div id="contact"><Contact /></div>
    </div>
  );
}

export default App;
