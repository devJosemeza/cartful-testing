import React, { useEffect } from 'react';

import PrettyIcon from '@/../../public/assets/icons/pretty-much-a-barista.svg';
import { TransitionStyles } from './TransitionStyles';

// Set up for transition
const transitionVariants = {
    hidden: { opacity: 0, x: '100%', transition: { duration: 0.5, ease: 'easeOut' } },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } },
    exit: { opacity: 0, x: '-100%', transition: { duration: 0.5, ease: 'easeIn' } },
};

// Duration
const Transition = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 15000000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <TransitionStyles
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={transitionVariants}
      transition={{ duration: 1.5, ease: "easeInOut" }}
    >
      <div className="content">
        <img src={PrettyIcon} alt="Barista Icon" />
        <p>We'll find coffee that's on your level.</p>
      </div>
    </TransitionStyles>
  );
};

export default Transition;
