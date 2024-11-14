import { useEffect, useState } from "react";
import ShimmerUI from "./ShimmerUI";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const [showIndex, setShowIndex] = useState(null);

  const resList = useRestaurantMenu(resId);

  if (resList === null) {
    return <ShimmerUI />;
  }

  const { name, avgRating, costForTwoMessage, cuisines } =
    resList?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resList?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  const categories =
    resList?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (category) =>
        category?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    // Makes the text center
    <div className="text-center">
      {/*
        -> font bold makes the text bold
        -> my-6 : Provides margin 1.5 rem on y axis (i.e) on top and bottom sides
        -> text-2xl makes the text 2 xlarge and we also have medium(md) and small(sm) sizes
      */}
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      {/* 
        -> font bold makes the text bold
        -> text-lg makes the text larger
      */}
      <p className="font-bold text-lg">
        {cuisines.join(", ") + " - " + costForTwoMessage}
      </p>
      {/* categories accordians */}
      {categories.map((category, index) => (
        <RestaurantCategory
          key={category?.card?.card.title}
          data={category?.card?.card}
          showItems={index === showIndex && true}
          // setShowIndex={() => setShowIndex(index)}
          setShowIndex={() => setShowIndex(index === showIndex ? null : index)} // Toggle logic
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
