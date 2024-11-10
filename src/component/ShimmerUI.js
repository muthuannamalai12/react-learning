const ShimmerUI = () => {
  return (
    <div className="flex">
      {/*
       -> p-4 provides padding 1 rem along all the sides
       -> m-4 provides margin 1 rem alone all the sides
       -> w-[250px] : When we do not have the exact class of width we can specify hard coded value like [250px] in []
       -> rounded-lg : Makes the card rounded and size is large we other sizes like medium(md) and small(sm)
       -> hover:bg-gray-200 : On hover of cards give back ground color as bg-gray-200 
       -> When not in hover it will have bg-gray-100
       -> h-[400px] : When we do not have the exact class of height we can specify hard coded value like [400px] in []
      */}
      <div className="m-4 p-4 w-[250px] h-[400px] rounded-lg bg-gray-100 hover:bg-gray-200"></div>
      <div className="m-4 p-4 w-[250px] h-[400px] rounded-lg bg-gray-100 hover:bg-gray-200"></div>
      <div className="m-4 p-4 w-[250px] h-[400px] rounded-lg bg-gray-100 hover:bg-gray-200"></div>
      <div className="m-4 p-4 w-[250px] h-[400px] rounded-lg bg-gray-100 hover:bg-gray-200"></div>
      <div className="m-4 p-4 w-[250px] h-[400px] rounded-lg bg-gray-100 hover:bg-gray-200"></div>
      <div className="m-4 p-4 w-[250px] h-[400px] rounded-lg bg-gray-100 hover:bg-gray-200"></div>
    </div>
  );
};

export default ShimmerUI;
