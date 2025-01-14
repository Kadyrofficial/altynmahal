import Header from '../components/Header';
import LanguageSelector from '../components/LanguageSelector';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Services from '../components/Services';

function About() {
  
  return (
    <>
    <Navigation />
      <Header />
      <LanguageSelector />
      <section className='w-full p-[20px] bg-lightgray flex flex-col items-center'>
        <div className='bg-white py-[20px] w-full 2xl:px-[150px] flex flex-col md:flex-row-reverse md:justify-center md:items-center'>
          <div className='md:w-1/2 max-w-[900px]'>
            <img src="../public/deliverer.svg" alt="" />
          </div>
          <div className="text-black w-full flex flex-col items-center bg-white md:w-1/2">
            <p className='font-bold text-[50px] lg:text-[70px] text-center'>MAHAL</p> 
            <p className='font-bold text-[20px] lg:text-[30px] text-center'>HOJALYK JEMGYÝETI</p>
            <p className='font-[400] text-[18px] lg:text-[25px] xl:text-[30px] text-center p-[30px] max-w-[700px] '>“Mahal” H.J 2021-nji ýyldan bäri Hytaý, Malaziýa, Türkiýe, Wýetnam, Taýland döwletlerinden gereke bolan harytlary we enjamlary gözlemek, tapmak, satyn almak we getirip bermek hyzmatyny edýär.</p>
          </div>
          
        </div> <br />
        <div className='bg-white'>
          <Services />
        </div>
      </section>
      
      <Footer />
    </>
  )
}

export default About
