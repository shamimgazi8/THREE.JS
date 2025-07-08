"use client";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50   px-6 py-4 bg-[#111] text-sm text-white border-b-[1px] border-white/20">
      <div className=" w-[60%] m-auto flex items-center justify-between">
        <div className="font-semibold text-xl">iPhone 16 Pro</div>
        <ul className="flex justify-center items-center gap-6 text-[12px]">
          <li className="cursor-pointer hover:underline">Overview</li>
          <li className="cursor-pointer hover:underline">
            Switch from Android to iPhone
          </li>
          <li className="cursor-pointer hover:underline">Tech Specs</li>
          <button className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm hover:bg-blue-500 transition">
            Buy
          </button>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
