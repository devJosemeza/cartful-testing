import { useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import { LayoutStyles } from "./LayoutStyles";
import React from "react";
import { Header } from "./header/Header";

const defaultVariants = {
  out: {
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
  in: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const onExitCompleteHandler = () => {
  window.scrollTo(0, 0);
};

const Layout = ({ children, className }) => {
  const location = useLocation();

  return (
    <LayoutStyles className={className}>
      <Header />
      <div className="page-content">
        <AnimatePresence mode="wait" onExitComplete={onExitCompleteHandler}>
          <motion.div
            key={location.pathname}
            variants={defaultVariants}
            animate="in"
            initial="out"
            exit="out"
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </div>
      <footer />
    </LayoutStyles>
  );
};


export default Layout;