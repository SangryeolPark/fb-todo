import React, { useEffect, useRef } from 'react';
import anime from 'animejs/lib/anime.es.js';

const Home = () => {
  const h1 = useRef(null);

  useEffect(() => {
    anime({
      targets: '.test', //h1.current,
      // translateX: 250,
      rotate: '1turn',
      loop: true,
      backgroundColor: '#FFF',
      duration: 100,
    });
  }, []);

  return (
    <div>
      <h1 className="test" ref={h1}>
        Home
      </h1>
    </div>
  );
};

export default Home;
