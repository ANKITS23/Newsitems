import { useState } from "react";
import React from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";


export default function About() {
  return (
    <div className="main-container">
      <div className="wrapper ">
        <div className=" about-container  ">
          <Title title="About Us" value="55" />
          <Quaility />
          <Details />
          <AboutInfo />    
        </div>
      </div>
    </div>
  );
}

const Title = (props) => {
  return (
    <div className="bg-slate-400 text-center my-0 mx-auto py-5">
      <h3 className="text-5xl uppercase dark:text-blue-500">{props.title}{props.value}</h3>
    </div>
  );
};

const Quaility = () => {
  return (
    <div>
      <div className="md:flex  justify-between gap-5 p-5 ">
        <div className="w-full  md:w-1/2 mb-5 md:mb-0">
          <img className="w-full block" src="./images/lap.jpg" alt="hbdfxb"/>
        </div>

        <div className="w-full flex flex-col justify-between   md:w-1/2">
          <h3 className="text-2xl m-0 dark:text-white">The Highest Quality of Products</h3>
          <p className="text-normal mb-5 dark:text-white">
            Nulla auctor mauris ut dui luctus semper. In hac habitasse platea
            dictumst. Duis pellentesque ligula a risus suscipit dignissim. Nunc
            non nisl lacus. Integer pharetra lacinia dapibus. Donec eu dolor
            dui, vel posuere mauris. Pellentesque semper congue sodales. In
            consequat, metus eget con sequat ornare, augue dolor blandit purus,
            vitae lacinia
            sodales. Maecenas mattis male suada sem, in fringilla massa dapibus
            quis. Suspendisse aliquam leo id neque auctor molestie. Etiam at
            nulla tellus. Nul a dignissim.
          </p>
          <a className="bg-blue-300  dark:bg-blue-500 rounded-[10px] hover:bg-blue-900 text-center w-[150px] dark:text-white py-3 px-8">More</a>
        </div>
      </div>
    </div>
  );
};

const Details = () => {
  return (
    <div>
      <div className="md:flex justify-between w-full gap-2 mb-5">
        <div className="flex justify-between gap-2 w-full md:w-1/2 border-2 p-2 mb-5 md:mb-0" >
          <div className="w-[10%]">
            <img className="w-full block" src="./images/icon-1.png" alt="hbeb"/>
          </div>
          <div className="w-[90%]">
            <h3 className="m-0 text-gray-600 dark:text-gray-600">Digital Marketing</h3>
            <p className="dark:text-white">
              Nulla auctor mauris ut dui luctus semper. In hac habitasse platea
              dictumst. Duis pellentesque ligula a risus suscipit dignissim.
              Nunc non nisl lacus. Integer pharetra lacinia dapibus. Donec eu
              dolor dui.
            </p>
      
          </div>
        </div>
        <div className="flex justify-between w-full md:w-1/2 gap-2 border-2 p-2 ">
          <div className="w-[10%]">
            <img className="w-full block" src="./images/icon-2.png" alt="hwxqg"/>
          </div>
          <div className="w-[90%]">
            <h3 className="m-0 text-gray-600 dark:text-gray-600">Creative Design</h3>
            <p className="dark:text-white">
              Nulla auctor mauris ut dui luctus semper. In hac habitasse platea
              dictumst. Duis pellentesque ligula a risus suscipit dignissim.
              Nunc non nisl lacus. Integer pharetra lacinia dapibus. Donec eu
              dolor dui.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const AboutInfo = () => {
  const [open, setOpen] = useState(false);
  return (
    <div id="accordion-arrow-icon" data-accordion="open">
      <h2 id="accordion-arrow-icon-heading-2">
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
          data-accordion-target="#accordion-arrow-icon-body-2"
          aria-expanded="false"
          aria-controls="accordion-arrow-icon-body-2"
        >
          <span>About Page</span>
          <svg
            data-accordion-icon=""
            className="w-6 h-6 shrink-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"
            ></path>
          </svg>
        </button>
      </h2>
      {!open && (
        <div
          id="accordion-arrow-icon-body-2"
          aria-labelledby="accordion-arrow-icon-heading-2"
        >
          <div className="p-5 font-light border border-b-0 border-gray-200 dark:border-gray-700">
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              It is first conceptualized and designed using the Figma software
              so everything you see in the library has a design equivalent in
              our Figma file.
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              Check out the{" "}
              <a
                href="https://flowbite.com/figma/"
                className="text-blue-600 dark:text-blue-500 hover:underline"
              >
                Figma design system
              </a>{" "}
              based on the utility classes from Tailwind CSS and components from
              Flowbite.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};





