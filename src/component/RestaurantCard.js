import { CDN_URL } from "../../utils/constants";

const RestaurantCard = (props) => {
  // Destructuring the array after obtaining it as parameters
  const { resData } = props;
  // Instead of repeating the entire resData.data now we can directly use name, avgRating
  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    deliveryTime,
  } = resData?.info;
  return (
    /*
    -> p-4 provides padding 1 rem along all the sides
    -> m-4 provides margin 1 rem alone all the sides
    -> w-[250px] : When we do not have the exact class of width we can specify hard coded value like [250px] in []
    -> rounded-lg : Makes the card rounded and size is large we other sizes like medium(md) and small(sm)
    -> hover:bg-gray-200 : On hover of cards give back ground color as bg-gray-200 
    -> When not in hover it will have bg-gray-100
    -> Height is taken care by default depending on the values coming from the API call
    */
    <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200">
      <img className="restaurant-logo" src={CDN_URL + cloudinaryImageId} />
      {/*
        -> font bold makes the text bold
        -> py-4 : Provides padding 1rem on y axis (i.e) on top and bottom sides
        -> text-lg makes the text large and we also have medium(md) and small(sm) sizes
      */}
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{avgRating}</h4>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime}</h4>
    </div>
  );
};

export default RestaurantCard;
