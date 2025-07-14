"use client";

import { useState } from "react";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"; // Adjust path if necessary based on your shadcn setup
const tabData = [
  {
    id: "productivity",
    label: "Boost your productivity",
    heading: "Explore new tools that help you write, focus, and communicate.",
    content: (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Left Column: iPhone Image and Writing Tools Text */}
        <div className="flex flex-col items-center">
          <div className="relative w-full h-[600px] bg-black rounded-3xl overflow-hidden shadow-2xl flex flex-col items-center justify-center p-4">
            {/* Placeholder for iPhone screen content */}
            <Image
              src="/placeholder.png" // Placeholder for iPhone screen
              alt="iPhone screen showing email draft"
              width={300}
              height={550}
              className="object-contain rounded-2xl"
            />
            <p className="mt-8 text-[13px] font-semibold  text-white/60 max-w-md text-center leading-relaxed">
              <span className="font-semibold text-white">Writing Tools</span>{" "}
              can proofread your text and rewrite different versions until the
              tone and wording are just right, and summarize selected text with
              a tap. They&apos;re available nearly everywhere you write,
              including third-party apps.
            </p>
          </div>
        </div>

        {/* Right Column: Feature Boxes */}
        <div className="flex flex-col gap-8">
          {/* Feature Box 1: Summaries */}
          <div className="bg-black p-6 rounded-2xl text-left shadow-lg">
            <p className="text-base md:text-lg text-gray-200 mb-4 leading-relaxed">
              Just hit record in the Notes or Phone app to capture audio
              recordings and transcripts. Apple Intelligence generates{" "}
              <span className="font-semibold">
                summaries of your transcripts
              </span>
              , so you can get the most important info at a glance.
            </p>
            {/* Audio Waveform Placeholder */}
            <div className="bg-gray-800 rounded-full h-12 flex items-center justify-between px-4">
              <div className="w-3/4 h-2 bg-gray-600 rounded-full"></div>
              <span className="text-sm text-gray-400">06:54</span>
              <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4 text-white"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.5 7.5a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-9a3 3 0 0 1-3-3v-9Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Feature Box 2: Priority Messages in Mail */}
          <div className="bg-black p-6 rounded-2xl text-left shadow-lg">
            <p className="text-base md:text-lg text-gray-200 mb-4 leading-relaxed">
              <span className="font-semibold">Priority messages in Mail</span>{" "}
              elevate time-sensitive messages to the top of your inbox — like an
              invitation that has a deadline today or a check-in-reminder for
              your flight this afternoon.
            </p>
            {/* iPhone Mail Screen Placeholder */}
            <div className="relative w-full h-48 bg-gray-800 rounded-lg overflow-hidden flex items-center justify-center">
              <Image
                src="/placeholder.png" // Placeholder for Mail Inbox screen
                alt="iPhone mail inbox screen"
                width={200}
                height={300}
                className="object-contain rounded-md"
              />
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "visual",
    label: "Express yourself visually",
    heading: "Create fun, original images that are truly personal to you.",
    content: (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Left Column: iPhone Image and Writing Tools Text */}
        <div className="flex flex-col items-center">
          <div className="relative w-full max-w-sm h-[600px] bg-black rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center p-4">
            {/* Placeholder for iPhone screen content */}
            <Image
              src="/placeholder.png" // Placeholder for iPhone screen
              alt="iPhone screen showing email draft"
              width={300}
              height={550}
              className="object-contain rounded-2xl"
            />
          </div>
          <p className="mt-8 text-base md:text-lg text-gray-300 max-w-md text-center leading-relaxed">
            <span className="font-semibold">Writing Tools</span> can proofread
            your text and rewrite different versions until the tone and wording
            are just right, and summarize selected text with a tap. They&apos;re
            available nearly everywhere you write, including third-party apps.
          </p>
        </div>

        {/* Right Column: Feature Boxes */}
        <div className="flex flex-col gap-8">
          {/* Feature Box 1: Summaries */}
          <div className="bg-black p-6 rounded-2xl text-left shadow-lg">
            <p className="text-base md:text-lg text-gray-200 mb-4 leading-relaxed">
              Just hit record in the Notes or Phone app to capture audio
              recordings and transcripts. Apple Intelligence generates{" "}
              <span className="font-semibold">
                summaries of your transcripts
              </span>
              , so you can get the most important info at a glance.
            </p>
            {/* Audio Waveform Placeholder */}
            <div className="bg-gray-800 rounded-full h-12 flex items-center justify-between px-4">
              <div className="w-3/4 h-2 bg-gray-600 rounded-full"></div>
              <span className="text-sm text-gray-400">06:54</span>
              <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4 text-white"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.5 7.5a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-9a3 3 0 0 1-3-3v-9Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Feature Box 2: Priority Messages in Mail */}
          <div className="bg-black p-6 rounded-2xl text-left shadow-lg">
            <p className="text-base md:text-lg text-gray-200 mb-4 leading-relaxed">
              <span className="font-semibold">Priority messages in Mail</span>{" "}
              elevate time-sensitive messages to the top of your inbox — like an
              invitation that has a deadline today or a check-in-reminder for
              your flight this afternoon.
            </p>
            {/* iPhone Mail Screen Placeholder */}
            <div className="relative w-full h-48 bg-gray-800 rounded-lg overflow-hidden flex items-center justify-center">
              <Image
                src="/placeholder.png" // Placeholder for Mail Inbox screen
                alt="iPhone mail inbox screen"
                width={200}
                height={300}
                className="object-contain rounded-md"
              />
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "siri",
    label: "The start of a new era for Siri",
    heading:
      "With all-new superpowers, Siri will be able to assist you like never before.",
    content: (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Left Column: iPhone Image and Writing Tools Text */}
        <div className="flex flex-col items-center">
          <div className="relative w-full max-w-sm h-[600px] bg-black rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center p-4">
            {/* Placeholder for iPhone screen content */}
            <Image
              src="/placeholder.png" // Placeholder for iPhone screen
              alt="iPhone screen showing email draft"
              width={300}
              height={550}
              className="object-contain rounded-2xl"
            />
          </div>
          <p className="mt-8 text-base md:text-lg text-gray-300 max-w-md text-center leading-relaxed">
            <span className="font-semibold">Writing Tools</span> can proofread
            your text and rewrite different versions until the tone and wording
            are just right, and summarize selected text with a tap. They&apos;re
            available nearly everywhere you write, including third-party apps.
          </p>
        </div>

        {/* Right Column: Feature Boxes */}
        <div className="flex flex-col gap-8">
          {/* Feature Box 1: Summaries */}
          <div className="bg-black p-6 rounded-2xl text-left shadow-lg">
            <p className="text-base md:text-lg text-gray-200 mb-4 leading-relaxed">
              Just hit record in the Notes or Phone app to capture audio
              recordings and transcripts. Apple Intelligence generates{" "}
              <span className="font-semibold">
                summaries of your transcripts
              </span>
              , so you can get the most important info at a glance.
            </p>
            {/* Audio Waveform Placeholder */}
            <div className="bg-gray-800 rounded-full h-12 flex items-center justify-between px-4">
              <div className="w-3/4 h-2 bg-gray-600 rounded-full"></div>
              <span className="text-sm text-gray-400">06:54</span>
              <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4 text-white"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.5 7.5a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-9a3 3 0 0 1-3-3v-9Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Feature Box 2: Priority Messages in Mail */}
          <div className="bg-black p-6 rounded-2xl text-left shadow-lg">
            <p className="text-base md:text-lg text-gray-200 mb-4 leading-relaxed">
              <span className="font-semibold">Priority messages in Mail</span>{" "}
              elevate time-sensitive messages to the top of your inbox — like an
              invitation that has a deadline today or a check-in-reminder for
              your flight this afternoon.
            </p>
            {/* iPhone Mail Screen Placeholder */}
            <div className="relative w-full h-48 bg-gray-800 rounded-lg overflow-hidden flex items-center justify-center">
              <Image
                src="/placeholder.png" // Placeholder for Mail Inbox screen
                alt="iPhone mail inbox screen"
                width={200}
                height={300}
                className="object-contain rounded-md"
              />
            </div>
          </div>
        </div>
      </div>
    ),
  },
];

const ProductivityTabsSection = () => {
  const [activeTab, setActiveTab] = useState("productivity"); // State to manage active tab

  return (
    <div className=" text-white py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto text-center">
        {/* Tabs List */}
        <Tabs
          defaultValue={activeTab}
          onValueChange={setActiveTab}
          className="w-full"
        >
          {/* Tabs List */}
          <TabsList className="grid w-[70%] m-auto grid-cols-1 sm:grid-cols-3 gap-[100px] bg-transparent">
            {tabData.map((tab) => (
              <TabsTrigger
                key={tab.id}
                value={tab.id}
                className="py-3 px-2 text-lg font-semibold text-white/40 border-b-[2px] border-white/30 data-[state=active]:border-white border-x-0 border-t-0 rounded-none transition-colors duration-200 data-[state=active]:text-white data-[state=active]:bg-transparent select-none cursor-pointer"
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Dynamic Heading */}
          <h2 className="text-lg font-bold mt-12 mb-5 px-4 select-none">
            {tabData.find((t) => t.id === activeTab)?.heading ??
              "Explore new tools and experiences."}
          </h2>

          {/* Tabs Content */}
          {tabData.map((tab) => (
            <TabsContent key={tab.id} value={tab.id} className="mt-8">
              {tab.content}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default ProductivityTabsSection;
