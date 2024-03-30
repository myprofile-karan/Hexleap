import React from "react";

const SpotlightCard = (props: any) => {
  return (
    <div className="card overflow-hidden">
      <div className="font-inter p-3 card rounded-md flex flex-col">
        <div className="image h-[400px]">
          <img
            src={props.image}
            className="w-full h-full object-cover bg-center"
            alt=""
          />
        </div>

        <div className="content p-3 w-full text-center mt-4 border-dashed border-t-2 border-gray-400 relative">
          <div className="section w-6 h-6 rounded-full absolute top-[-14px] left-[-25px]"></div>
          <div className="section w-6 h-6 rounded-full absolute top-[-14px] right-[-25px]"></div>
          <h2 className="text-[1.1rem] px-2 font-poppins font-semibold">
            {props.title}
          </h2>
          <div className="w-full font-poppins font-[400px] flex justify-center gap-1">
            <span>OCT 15 |</span>
            <span>SUN |</span>
            <span>4:30 PM</span>
          </div>
          <p className="text-[0.9rem] font-[400] font-inter">{props.para}</p>
          <button className="bg-[#1D1D1F] text-white px-8 py-2 mt-3">
            {props.btnText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SpotlightCard;
