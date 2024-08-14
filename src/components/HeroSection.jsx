import React from 'react'

const HeroSection = () => {
  return (
    <>
      <section className="hero">
        <img src="/hero.png" alt="cover" />
      </section>
      <marquee direction="left" scrollamount="12" behaviour="scroll" loop="3">
        Registration For SCEIC 2025 Will Start Very Soon. Keep your eyes at our official website for more news & updates
      </marquee>
    </>
  );
}

export default HeroSection