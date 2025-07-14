"use client";

const HeroText = () => {
  return (
    <div className="text-center mt-[260px] ">
      <h1 className="text-4xl md:text-6xl font-semibold mb-2">
        Strength. Beauty.
      </h1>
      <h2 className="text-5xl md:text-7xl font-semibold  glow-text">
        Titanium.
      </h2>

      <style jsx>{`
        .glow-text {
          color: #fff5e0;
          text-shadow: 0 0 40px rgba(255, 255, 255, 0.9),
            /* Intense white core */ 0 0 70px rgba(255, 140, 50, 0.8),
            /* Very wide and bright orange */ 0 0 100px rgba(255, 100, 20, 0.7),
            0 0 130px rgba(255, 80, 10, 0.6), 0 0 160px rgba(255, 60, 10, 0.5);
        }
      `}</style>
    </div>
  );
};

export default HeroText;
