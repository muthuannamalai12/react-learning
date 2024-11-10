import { useEffect, useState } from "react";
import ShimmerUI from "./ShimmerUI";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resList = useRestaurantMenu(resId);

  if (resList === null) {
    return <ShimmerUI />;
  }

  const { name, avgRating, costForTwoMessage, cuisines } =
    resList?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resList?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  return (
    <div className="restaurant-menu-container">
      <h1>{name}</h1>
      <p>{cuisines.join(", ") + " - " + costForTwoMessage}</p>
      <h3>{avgRating}</h3>
      <h3>Menu</h3>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - {"Rs "}
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </li>
        ))}
        {/* Normal way of displaying data 
        <li>{itemCards[0].card.info.name}</li>
        <li>{itemCards[1].card.info.name}</li>
        <li>{itemCards[2].card.info.name}</li> */}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
