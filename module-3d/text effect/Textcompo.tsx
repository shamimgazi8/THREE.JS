"use client";

const HeroText = () => {
  return (
    <div className="text-center mt-[260px] ">
      <h1 className="text-4xl md:text-6xl font-semibold mb-2">
        Strength. Beauty.
      </h1>
      <h2 className="text-5xl md:text-7xl font-semibold text-white glow-text">
        Titanium.
      </h2>

      <style jsx>{`
        .glow-text {
          color: #fff5e0;
          text-shadow: 0 0 20px rgba(255, 255, 255, 0.7),
            0 0 40px rgba(255, 140, 50, 0.6), 0 0 60px rgba(255, 100, 20, 0.5),
            0 0 80px rgba(255, 80, 10, 0.4), 0 0 100px rgba(255, 60, 10, 0.3);
        }
      `}</style>
    </div>
  );
};

export default HeroText;
