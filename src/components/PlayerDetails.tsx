const PlayerDetails = ({item}:any) => {
  return (
    <>
      <div className="font-inter p-3 card shadow-md hover:shadow-lg rounded-md transition duration-[1000] flex flex-col">
        <div className="image h-[400px]">
          <img src={item.image} className="w-full h-full object-cover bg-top bg-no-repeat" alt="" />
        </div>

        <div className="content w-full mt-4">
          <h2 className="text-[1rem] px-2">{item.title}</h2>
          <div className="content-section mt-3 rounded-sm p-3 flex gap-5">
            <div className="event  grid">
              <span className="text-[0.8rem]">Total Events</span>
              <span className="font-semibold text-[0.9rem]">
                {item.totalEvents}
              </span>
            </div>
            <div className="sport grid">
              <span className="text-[0.8rem]">Sports</span>
              <span className="font-semibold text-[0.9rem]">{item.sport}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlayerDetails;
