import Navbar from './components/navbar';
import Contact from './sections/contact';
import Hero from './sections/hero';
import Experience from './sections/experience';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <>
        <Navbar />
        <Hero />
        <Experience/>
        <Contact/>
      </>
    </div>
  );
}

export default App;
