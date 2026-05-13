import React, { useState, useEffect } from "react";
import BackgroundLayer from "./parallax/BackgroundLayer";
import HeroContent from "./parallax/HeroContent";
import IntroScreen from "./parallax/IntroScreen";
import FlyingLogo from "./parallax/FlyingLogo";

const TRIGGER = 600;

const ParallaxHero = () => {
  const [scrollY, setScrollY] = useState(0);
  const [vh, setVh] = useState(700);

  useEffect(() => {
    setVh(window.innerHeight);
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const raw = Math.min(scrollY / TRIGGER, 1);
  const ep = raw < 0.5 ? 2 * raw * raw : -1 + (4 - 2 * raw) * raw;

  // Intro screen slides UP (translateY from 0 → -100%)
  const introY = ep * -100;

  // Logo: center of screen → top-left navbar
  const logoLeft = 50 - ep * (window.innerWidth < 768 ? 38 : 41); 
  const logoTop = 35 - ep * (window.innerWidth < 768 ? 31 : 30.5);
  const logoScale = 1 - ep * 0.35;
  const textOpacity = ep > 0.8 ? (ep - 0.8) / 0.2 : 0;

  // Hero content behind intro
  const heroOp = ep > 0.55 ? (ep - 0.55) / 0.45 : 0;
  const heroY = (1 - ep) * 40;

  return (
    <div className="relative">
      {/* Fixed Layers */}
      <BackgroundLayer />
      
      <HeroContent 
        opacity={heroOp} 
        translateY={heroY} 
        pointerEvents={ep > 0.85 ? "auto" : "none"} 
      />

      <IntroScreen 
        translateY={introY} 
        opacity={1 - ep * 3.5} 
        pointerEvents={ep > 0.9 ? "none" : "auto"} 
      />

      <FlyingLogo 
        left={logoLeft} 
        top={logoTop} 
        scale={logoScale} 
        textOpacity={textOpacity}
      />

      {/* Scroll Space */}
      <div style={{ height: `${TRIGGER + vh}px` }} className="pointer-events-none" />
    </div>
  );
};

export default ParallaxHero;
