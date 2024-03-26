import { useState, useEffect } from 'react';

const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = useState(null);
  const [isScrolling, setIsScrolling] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsScrolling(true);

      if (currentScrollY > prevScrollY) {
        setScrollDirection('down');
      } else if (currentScrollY < prevScrollY) {
        setScrollDirection('up');
      }

      setPrevScrollY(currentScrollY);
    };

    const scrollTimeout = setTimeout(() => {
      setIsScrolling(false);
    }, 120); // Adjust the timeout value as needed

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [prevScrollY]);

  return { scrollDirection, isScrolling };
};

export default useScrollDirection;