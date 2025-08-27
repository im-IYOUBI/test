import { LanguageProvider } from './contexts/LanguageContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Products } from './components/Products';
import { Gallery } from './components/Gallery';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Header />
        <main>
          <Hero />
          <About />
          <Products />
          <Gallery />
          <WhyChooseUs />
          <Contact />
        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </LanguageProvider>
  );
}

export default App;