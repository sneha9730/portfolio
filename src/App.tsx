import Navbar from './components/navbar';
import Contact from './sections/contact';
import Hero from './sections/hero';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <>
        <Navbar />
        <Hero />
        <Contact/>
      </>
    </div>
  );
}

export default App;
