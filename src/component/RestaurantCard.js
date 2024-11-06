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
    <div className="restaurant-card">
      <img className="restaurant-logo" src={CDN_URL + cloudinaryImageId} />
      <h3>{name}</h3>
      <h4>{avgRating}</h4>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime}</h4>
    </div>
  );
};

export default RestaurantCard;
