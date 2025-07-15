import React from "react";
import Image from "next/image";
import { IconType } from "react-icons";
import {
  FiDollarSign,
  FiTrendingUp,
  FiZap,
  FiBatteryCharging,
  FiSliders,
  FiCpu,
  FiMapPin,
  FiBox,
  FiMaximize,
  FiMonitor,
} from "react-icons/fi";

interface Spec {
  icon: IconType;
  label: string; // Added separate label for text
  value: string; // Added separate value for price or other values
}

interface Product {
  title: string;
  image: string;
  price: string;
  specs: Spec[];
}

const products: Product[] = [
  {
    title: "Electric O3",
    image: "/bike/bike_red_1.png",
    price: "From $1,950 or $41.62/mo. for 24 mo.",
    specs: [
      { icon: FiDollarSign, label: "Unit Price", value: "$1,950" },
      { icon: FiTrendingUp, label: "Top Speed", value: "56mph" },
      { icon: FiZap, label: "Motor Rated Power", value: "4kW" },
      { icon: FiZap, label: "Motor Peak Power", value: "56mph" },
      { icon: FiBatteryCharging, label: "Battery Voltage", value: "72V" },
      { icon: FiSliders, label: "Battery Amp", value: "50Ah" },
      { icon: FiCpu, label: "Battery Wattage", value: "3600Wh (72V × 50Ah)" },
      { icon: FiBatteryCharging, label: "Battery Cells", value: "72V" },
      { icon: FiMapPin, label: "Max Range", value: "75mi" },
      { icon: FiBox, label: "Net Weight", value: "120kg" },
      { icon: FiMaximize, label: "Wheelbase", value: "33in" },
      { icon: FiMonitor, label: "Ground Clearance", value: "75 miles" },
      { icon: FiMaximize, label: "Seat Height", value: "33in" },
    ],
  },
  {
    title: "Electric O3 PRO",
    image: "/bike/bike_golden_1.png",
    price: "From $2,400 or $33.29/mo. for 24 mo.",
    specs: [
      { icon: FiDollarSign, label: "Unit Price", value: "$2,400" },
      { icon: FiTrendingUp, label: "Top Speed", value: "75mph" },
      { icon: FiZap, label: "Motor Rated Power", value: "6kW" },
      { icon: FiZap, label: "Motor Peak Power", value: "16kW" },
      { icon: FiBatteryCharging, label: "Battery Voltage", value: "96V" },
      { icon: FiSliders, label: "Battery Amp", value: "50Ah" },
      { icon: FiCpu, label: "Battery Wattage", value: "16kW" },
      { icon: FiBatteryCharging, label: "Battery Cells", value: "96V" },
      { icon: FiMapPin, label: "Max Range", value: "75mi" },
      { icon: FiBox, label: "Net Weight", value: "220lbs" },
      { icon: FiMaximize, label: "Wheelbase", value: "33in" },
      { icon: FiMonitor, label: "Ground Clearance", value: "75 miles" },
      { icon: FiMaximize, label: "Seat Height", value: "33in" },
    ],
  },
];

const CompareSection: React.FC = () => {
  return (
    <div className="bg-black text-white py-20 md:w-[80%] m-auto rounded-3xl">
      <div className="max-w-4xl mx-auto px-4 text-center">
        {/* Product Cards */}
        <div className="flex flex-col md:flex-row justify-around items-center gap-10">
          {products.map((product, index) => (
            <div key={index} className="flex flex-col items-center">
              <Image
                src={product.image}
                alt={product.title}
                width={450}
                height={500}
                className="mb-4 object-cover"
              />
              <h2 className="text-xl font-semibold">{product.title}</h2>
              <p className="text-sm text-white/70">{product.price}</p>
              <button className="text-black bg-blue-500 hover:bg-blue-600 text-sm rounded-full px-4 py-1 mt-2">
                Learn more
              </button>
              <button className="text-blue-500 text-sm mt-2">Buy &gt;</button>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 my-12"></div>

        {/* Specs Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-center text-sm">
          {products.map((product, index) => (
            <div key={index} className="space-y-6">
              {product.specs.map((spec, i) => {
                const Icon = spec.icon;
                return (
                  <div
                    key={i}
                    className="flex flex-col items-center text-center gap-2"
                  >
                    <Icon className="text-pink-400" size={24} />
                    <div>
                      <p className="text-sm text-white">{spec.label}</p>
                      <p className="text-sm font-bold text-white">
                        {spec.value}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompareSection;
