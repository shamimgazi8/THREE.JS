import Image from "next/image";

const CompareSection = () => {
  return (
    <div className="bg-black text-white py-20 md:w-[80%] m-auto rounded-3xl">
      <div className="max-w-4xl mx-auto px-4 text-center">
        {/* Images and Titles */}
        <div className="flex flex-col md:flex-row justify-around items-center gap-10">
          {/* iPhone 16 Pro */}
          <div className="flex flex-col items-center">
            <Image
              src="/bike/bike_red_1.png"
              alt="iPhone 16 Pro"
              width={450}
              height={500}
              className="mb-4 object-cover"
            />
            <h2 className="text-xl font-semibold">Electric O3</h2>
            <p className="text-sm text-white/70">
              From $1,950 or $41.62/mo. for 24 mo.
            </p>
            <button className="text-black bg-blue-500 hover:bg-blue-600 text-sm rounded-full px-4 py-1 mt-2">
              Learn more
            </button>
            <button className="text-blue-500 text-sm mt-2">Buy &gt;</button>
          </div>

          {/* iPhone 16 */}
          <div className="flex flex-col items-center">
            <Image
              src="/bike/bike_golden_1.png"
              alt="iPhone 16"
              width={450}
              height={500}
              className="mb-4 object-cover"
            />
            <h2 className="text-xl font-semibold">Electric O3 PRO</h2>
            <p className="text-sm text-white/70">
              From $2,400 or $33.29/mo. for 24 mo.
            </p>
            <button className="text-black bg-blue-500 hover:bg-blue-600 text-sm rounded-full px-4 py-1 mt-2">
              Learn more
            </button>
            <button className="text-blue-500 text-sm mt-2">Buy &gt;</button>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 my-12"></div>

        {/* Specs Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-center text-sm">
          {/* iPhone 16 Pro Specs */}
          <div className="space-y-6">
            <div>
              <span className="text-pink-400">Apple Intelligence</span>
            </div>
            <div>
              <p>A18 Pro chip with 6-core GPU</p>
            </div>
            <div>
              <p>Camera Control</p>
            </div>
            <div>
              <p>
                Pro camera system
                <br />
                48MP Fusion camera
                <br />
                5× Telephoto
                <br />
                48MP Ultra Wide
              </p>
            </div>
            <div>
              <p>
                Up to 29 hours video playback<sup>1</sup>
              </p>
            </div>
          </div>

          {/* iPhone 16 Specs */}
          <div className="space-y-6">
            <div>
              <span className="text-pink-400">Apple Intelligence</span>
            </div>
            <div>
              <p>A18 chip with 5-core GPU</p>
            </div>
            <div>
              <p>Camera Control</p>
            </div>
            <div>
              <p>
                Advanced dual-camera system
                <br />
                48MP Fusion camera
                <br />
                2× Telephoto
                <br />
                12MP Ultra Wide
              </p>
            </div>
            <div>
              <p>
                Up to 22 hours video playback<sup>1</sup>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompareSection;
