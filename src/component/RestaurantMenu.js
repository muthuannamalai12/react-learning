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
      {/*
        -> font bold makes the text bold
        -> py-4 : Provides padding 1rem on y axis (i.e) on top and bottom sides
        -> text-lg makes the text large and we also have medium(md) and small(sm) sizes
      */}
      <h1 className="font-bold py-4 m-1 text-lg">{name}</h1>
      {/* 
        -> m-1 provides margin 0.25 rem alone all the sides 
        -> p-1 provides padding 0.25 rem alone all the sides 
      */}
      <p className="m-1 p-1">
        {cuisines.join(", ") + " - " + costForTwoMessage}
      </p>
      {/* 
        -> m-1 provides margin 0.25 rem alone all the sides 
        -> p-1 provides padding 0.25 rem alone all the sides 
      */}
      <h3 className="m-1 p-1">{avgRating}</h3>
      {/*
        -> font bold makes the text bold
        -> py-4 : Provides padding 1rem on y axis (i.e) on top and bottom sides
        -> m-1 provides margin 0.25 rem alone all the sides 
        -> text-lg makes the text large and we also have medium(md) and small(sm) sizes
      */}
      <h3 className="font-bold py-4 m-1 text-lg">Menu</h3>
      {/* 
        -> m-1 provides margin 0.25 rem alone all the sides 
        -> p-1 provides padding 0.25 rem along all the sides
    */}
      <ul className="m-1 p-1">
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
