"use client";
import PlayerDetails from "@/components/PlayerDetails";
import Data from "../../data.json";
import { useState } from "react";

export default function PlayerSection({ setTheme }: any) {
  const [dark, setDark] = useState(false);
  const changeTheme = (color:String) => {
    setDark(!dark)
    setTheme(color)

  };

  return (
    <div className="flex flex-col items-start justify-start">
      <header className="w-full flex justify-between items-center">
        <h1 className="text-[1.5rem] font-poppins font-bold border-b-[3px] border-[#738FFF] py-1">
          Sports
        </h1>

        {dark ? (
          <i
            onClick={()=> changeTheme("black")}
            className="fa-solid fa-moon text-2xl sm:text-4xl cursor-pointer"
          ></i>
        ) : (
          <i
            onClick={()=> changeTheme("white")}
            className="fa-regular fa-sun text-2xl sm:text-4xl cursor-pointer"
          ></i>
        )}
      </header>

      <section className="mt-10 font-inter flex flex-col items-center gap-10">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {Data?.map((item, index) => (
            <PlayerDetails key={index} item={item} />
          ))}
          <div className="p-3 card shadow-md hover:shadow-lg rounded-md transition duration-[1000] flex flex-col">
            <div className="image h-[250px] relative">
              <div className="ad absolute top-0 right-0 px-2 text-xs bg-black text-white">
                Ad
              </div>
              <img
                src="./assets/img4.jpeg"
                className="w-full h-full object-cover bg-top"
                alt=""
              />
            </div>

            <div className="content w-full mt-4">
              <h2 className="text-[1.2rem] py-4">Advertisement title</h2>
              <p className="text-[0.8rem] text-[#d3d3d3]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
        <button className="bg-[#2C9CF0] text-white rounded-[3px] px-[30px] py-[10px] text-[16px]">
          See More
        </button>
      </section>
    </div>
  );
}
