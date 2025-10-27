import React from 'react';
import { useInView } from 'react-intersection-observer';

function FadeInSection(props) {
  const { ref, inView } = useInView({
    triggerOnce: true, // Animasi hanya berjalan sekali
    threshold: 0.1,    // Muncul saat 10% bagian terlihat
  });

  return (
    <div
      ref={ref}
      className={`fade-in-section ${inView ? 'is-visible' : ''}`}
    >
      {props.children}
    </div>
  );
}

export default FadeInSection;