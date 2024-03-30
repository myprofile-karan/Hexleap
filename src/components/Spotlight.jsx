import React from "react";
import SpotlightCard from "./SpotlightCard";

const Spotlight = () => {
  return (
    <div className="px-5 section sm:px-10 lg:px-48 py-8 sm:py-14 mt-20 w-full relative">
      <div className="top flex flex-col gap-3">
        <h1 className="text-center text-3xl md:text-5xl font-bold font-poppins">
          Collection Spotlight
        </h1>
        <p className="text-[13px] sm:text-[14px] leading-[22.65px] text-center">
          Discover extraordinary moments with our Spotlight Collection
          metatickets—exclusive access to premium events for an unforgettable
          experience. Grab yours today!
        </p>
      </div>

      <section className="mt-10 grid sm:grid-cols-2 md:grid-cols-3 gap-8  relative">
        
        <span className="absolute top-[50%] left-[-7%] sm:left-[-10%] cursor-pointer"><img src="./assets/arrow.png" className="w-6 border-2 border-blue-700 py-3 px-1 rotate-[180deg]" alt="" /></span>
        <span className="absolute top-[50%] right-[-7%] sm:right-[-10%] cursor-pointer"><img src="./assets/arrow.png" className="w-6 border-2 border-blue-700 py-3 px-1" alt="" /></span>

        <SpotlightCard
        image="./assets/img5.jpeg"
        title="Las Vegas Aviators"
        para="Las Vegas Ballpark, Las Vegas, Nevada"
        btnText="Take Fligh Collection"
        />
        <SpotlightCard
        image="./assets/img6.jpeg"
        title="Sacramento River Cats"
        para="Sutter Health Park, Sacramento, California"
        btnText="Orange Collection"
        />
        <SpotlightCard
        image="./assets/img5.jpeg"
          title="Las Vegas Aviators"
          para="Las Vegas Ballpark, Las Vegas, Nevada"
          btnText="Take Fligh Collection"
        />

      </section>
    </div>
  );
};

export default Spotlight;
