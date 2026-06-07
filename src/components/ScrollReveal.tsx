'use client';

import { motion, Variants } from 'framer-motion';
import { ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  animation?: 'fade-up' | 'fade-in' | 'slide-left' | 'slide-right';
  delay?: number;
  className?: string;
}

export default function ScrollReveal({ children, animation = 'fade-up', delay = 0, className = '' }: ScrollRevealProps) {
  
  const variants: Variants = {
    hidden: { 
      opacity: 0, 
      y: animation === 'fade-up' ? 60 : 0,
      x: animation === 'slide-left' ? 60 : animation === 'slide-right' ? -60 : 0,
      scale: animation === 'fade-in' ? 0.95 : 1
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      x: 0,
      scale: 1,
      transition: { 
        duration: 0.8, 
        ease: [0.25, 0.1, 0.25, 1], // Smooth cubic bezier curve
        delay: delay / 1000 
      } 
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1, margin: "0px 0px -50px 0px" }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}
