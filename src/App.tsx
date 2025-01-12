import Header from './components/Header';
import SlidingBanner from './components/Banner';
import LanguageSelector from './components/LanguageSelector';
import Navigation from './components/Navigation';
import Services from './components/Services';
import Footer from './components/Footer';
import Intro from './components/Intro';
import Countries from './components/Countries';

const images = [
  'banner1.jpg',
  'banner2.jpg',
  'banner3.jpg',
];

function App() {
  
  return (
    <>
      <Navigation />
      <Header />
      <SlidingBanner images={images} interval={4000} />
      <Intro />
      <LanguageSelector />
      <Services />
      <Countries />
      <Footer />
    </>
  )
}

export default App
