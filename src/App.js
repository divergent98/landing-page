import logo from './logo.svg';
import './App.css';
import Hero from './components/Hero';
import Cards from './components/Cards';
import Section from './components/Section';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import CarouselCards from './components/CarouselCards';
import SectionMobile from './components/SectionMobile';
import TestimonialsCarousel from './components/TestimonialsCarousel';


function App() {
  return (

    <div className='overflow-x-hidden'>
    <Hero />
    <div className='hidden lg:block'>
      <Cards />
    </div>
    <div className='lg:hidden'>
          <CarouselCards />
    </div>
    <div className='hidden lg:block'>
    <Section />
    </div>
    <div className='lg:hidden'>
          <SectionMobile />
    </div>
    <div className='hidden lg:block'>
    <Testimonials />
    </div>
    <div className='lg:hidden'>
          <TestimonialsCarousel />
    </div>
    
    <Footer />
    </div>
  );
}

export default App;
