import Service1 from './Service1';
import Service2 from './Service2';
import Service3 from './Service3';

const AnimatedBox = () => {


  return (
    <section className='w-full p-[20px] flex flex-row justify-center flex-wrap'>
        <Service1 />
        <Service2 />
        <Service3 />
      </section>

  );
};

export default AnimatedBox;