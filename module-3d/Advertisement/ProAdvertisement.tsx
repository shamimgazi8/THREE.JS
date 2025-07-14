import React from "react";

// Main AdvertisementPro component
function AdvertisementPro() {
  return (
    // Main container with a deep black background
    <div className="min-h-screen bg-black flex flex-col items-center justify-center font-inter text-white p-4 overflow-hidden relative">
      {/* Absolute positioned div for the central glowing light effect in the background */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-white rounded-full opacity-5 filter blur-3xl lg:blur-[100px]"
        style={{
          // Custom radial gradient for a more focused glow
          background:
            "radial-gradient(circle at center, rgba(255, 255, 255, 0.2) 0%, rgba(0, 0, 0, 0) 70%)",
          zIndex: 0, // Ensure it's behind other content
        }}
      ></div>

      {/* Container for the main ad content, positioned above the background glow */}
      <div className="relative z-10 text-center">
        {/* iPhone model text */}
        <p className="text-lg md:text-xl lg:text-2xl font-semibold mb-2">
          iPhone 16 Pro
        </p>
        {/* Tagline with increased font size and weight for emphasis */}
        <h1 className="text-3xl md:text-5xl lg:text-6xl  mb-8 glow-text2">
          Built for Apple Intelligence.
        </h1>

        {/* Container for the phone image and the large "PRO" text */}
        <div className="relative w-full max-w-2xl mx-auto mb-8 flex justify-center items-center">
          {/*
            Large "PRO" text, positioned absolutely and designed to AdvertisementProear behind the phone.
            The text shadow creates the strong glowing effect.
          */}
          <div className=" text-8xl md:text-[100px] lg:text-[26rem] font-bold  glow-text2">
            PRO
          </div>

          {/*
            iPhone image placeholder.
            IMPORTANT: Replace the 'src' with the URL of your actual iPhone 16 Pro image.
            For example: src="https://your-domain.com/path/to/iphone-16-pro.png"
            Ensure the image is hosted online for it to be displayed.
            The 'transform' property gives it a slight 3D angle as seen in the original image.
          */}
          {/* <img
            src="https://placehold.co/700x350/555555/EEEEEE?text=iPhone+16+Pro+Image" // Placeholder URL
            alt="iPhone 16 Pro"
            className="relative z-20 w-full h-auto object-contain rounded-xl shadow-lg"
            style={{
              // Adds a 3D angle
              maxWidth: "600px", // Constrain max width for responsiveness
              filter: "drop-shadow(0 0 20px rgba(255,255,255,0.3))", // Subtle glow around the phone
            }}
          /> */}
        </div>

        {/* Buy button */}
        <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 mb-4">
          Buy
        </button>

        {/* Pricing information */}
        <p className="text-sm md:text-base text-gray-400">
          From $899 or $41.62/mo. for 24 mo.<sup>1</sup>
        </p>
      </div>
    </div>
  );
}

export default AdvertisementPro;
