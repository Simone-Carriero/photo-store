import { useState, useEffect, useRef } from 'react';

const useHover = () => {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef(null);

  const mouseEnter = () => setIsHovered(true);
  const mouseOut = () => setIsHovered(false);

  useEffect(() => {
    ref.current.addEventListener('mouseenter', mouseEnter);
    ref.current.addEventListener('mouseleave', mouseOut);

    return () => {
      ref.current.removeEventListener('mouseenter', mouseEnter);
      ref.current.removeEventListener('mouseleave', mouseOut);
    };
  }, []);

  return [ref, isHovered];
};

export default useHover;
