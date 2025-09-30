'use client'
import React from 'react'
import { useEffect, useState } from 'react';
import { useScroll } from 'framer-motion';
import Navigation from './Navigation';
const Navbar = () => {

      const [mounted, setMounted] = useState(false);

    const { scrollYProgress } = useScroll();
  
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <div>
      <Navigation scrollYProgress={scrollYProgress} />
    </div>
  )
}

export default Navbar
