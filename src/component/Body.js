import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import resList from "../../utils/mockData";

const Body = () => {
  // Below also works the same it is simple array destructing
  // let arr = useState(resList);

  // const [listofRestaurants, setListOfRestaurants] = arr;

  // listofRestaurants = arr[0];
  // setListOfRestaurants = arr[1];

  // useState with empty restaurant list
  // const [listofRestaurants, setListOfRestaurants] = useState([]);

  // useState with 3 restaurant values list
  // const [listofRestaurants, setListOfRestaurants] = useState([
  //   {
  //     data: {
  //       id: "334475",
  //       name: "KFC",
  //       cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
  //       cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
  //       costForTwo: 40000,
  //       deliveryTime: 29,
  //       avgRating: "3.8",
  //     },
  //   },
  //   {
  //     data: {
  //       id: "334476",
  //       name: "Dominos",
  //       cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
  //       cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
  //       costForTwo: 40000,
  //       deliveryTime: 29,
  //       avgRating: "4.2",
  //     },
  //   },
  //   {
  //     data: {
  //       id: "334477",
  //       name: "MCD",
  //       cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
  //       cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
  //       costForTwo: 40000,
  //       deliveryTime: 29,
  //       avgRating: "4.1",
  //     },
  //   },
  // ]);

  // useState with mock data reslist
  const [listofRestaurants, setListOfRestaurants] = useState(resList);

  // Creating a list of restaurants using JS variable
  // let listofRestaurants = [
  //   {
  //     data: {
  //       id: "334475",
  //       name: "KFC",
  //       cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
  //       cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
  //       costForTwo: 40000,
  //       deliveryTime: 29,
  //       avgRating: "3.8",
  //     },
  //   },
  //   {
  //     data: {
  //       id: "334476",
  //       name: "Dominos",
  //       cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
  //       cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
  //       costForTwo: 40000,
  //       deliveryTime: 29,
  //       avgRating: "4.2",
  //     },
  //   },
  //   {
  //     data: {
  //       id: "334477",
  //       name: "MCD",
  //       cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
  //       cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
  //       costForTwo: 40000,
  //       deliveryTime: 29,
  //       avgRating: "4.1",
  //     },
  //   },
  // ];

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          // Normal JS On-click
          // onClick={() => {
          //   listofRestaurants = listofRestaurants.filter(
          //     (res) => res.data.avgRating > 4
          //   );
          //   console.log(listofRestaurants);
          // }}
          //Using state variable
          onClick={() => {
            const filteredList = listofRestaurants.filter(
              (res) => res.data.avgRating > 4
            );
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="restaurant-container">
        {listofRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
