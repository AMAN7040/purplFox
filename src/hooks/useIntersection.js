import React, { useEffect, useRef, useState } from 'react'

const useIntersection = (options) => {
const sectionRef = useRef(null);
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      {
        threshold: 0.2,
      },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  },[options]);
    
  return [sectionRef,isVisible];
}

export default useIntersection