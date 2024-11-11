import { useContext, useEffect, useState } from "react";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import ShimmerUI from "./ShimmerUI";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useRestaurantsDataList from "../utils/useRestaurantsDataList";
import UserContext from "../utils/UserContext";

const Body = () => {
  // useState with mock data reslist
  // const [listofRestaurants, setListOfRestaurants] = useState([]);
  // const [filterListOfRestaurants, setFilteredListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  const { loggedInUser, setUserName } = useContext(UserContext);

  // // This useEffect would be rendered once the body component mounts
  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const fetchData = async () => {
  //   const data = await fetch(
  //     "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9480472&lng=80.1309948&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
  //   );
  //   const json = await data.json();
  //   setListOfRestaurants(
  //     json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
  //   );
  //   setFilteredListOfRestaurants(
  //     json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
  //   );
  // };

  const RestaurantWithPromotedLabel = withPromotedLabel(RestaurantCard);

  const {
    listOfRestaurants,
    filterListOfRestaurants,
    filterBySearchText,
    filterByRating,
  } = useRestaurantsDataList();

  // Example to make POST API Call using Fetch
  const updateData = async () => {
    const data = {
      lat: 12.9480472,
      lng: 80.1309948,
      nextOffset: "CJhlELQ4KIDA8ITb0YqqCjCnEw==",
      widgetOffset: {
        NewListingView_category_bar_chicletranking_TwoRows: "",
        NewListingView_category_bar_chicletranking_TwoRows_Rendition: "",
        Restaurant_Group_WebView_SEO_PB_Theme: "",
        collectionV5RestaurantListWidget_SimRestoRelevance_food_seo: "24",
        inlineFacetFilter: "",
        restaurantCountWidget: "",
      },
      filters: {},
      seoParams: {
        seoUrl: "https://www.swiggy.com/",
        pageType: "FOOD_HOMEPAGE",
        apiName: "FoodHomePage",
      },
      page_type: "DESKTOP_WEB_LISTING",
      _csrf: "EhUtFQhwqssu-3jE14TzIsDBGIvQUcoMVI2vN1YA",
    };

    const updatedData = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/update",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    const json = await updatedData.json();
    setListOfRestaurants((prevList) => [
      ...prevList,
      ...json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    ]);
    setFilteredListOfRestaurants((prevList) => [
      ...prevList,
      ...json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    ]);
  };

  // Conditional Rendering - Rendering based on the condition
  // if (listofRestaurants.length === 0) {
  //   return <ShimmerUI />;
  // }

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return <h1>Oops You went Offline</h1>;
  }

  // using ternary operator performing conditional rendering
  return listOfRestaurants.length === 0 ? (
    <ShimmerUI />
  ) : (
    <div className="body">
      {/* flex makes the component come side by side */}
      <div className="filter flex">
        {/* 
          -> p-4 provides padding 1 rem along all the sides
          -> m-4 provides margin 1 rem alone all the sides 
        */}
        <div className="m-4 p-4">
          <input
            type="text"
            // border border-solid border-black : Provides solid black border around the input box
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            /* 
            -> px-4 Provides padding 1rem on x axis (i.e) on left and right sides
            -> py-2 Provides padding 0.5rem on y axis (i.e) on top and bottom sides
            -> bg-green-100 Provides background color green
           */
            className="px-4 py-2 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              filterBySearchText(searchText);
            }}
          >
            Search
          </button>
        </div>
        {/* 
          -> m-4 provides margin 1 rem alone all the sides 
          -> p-4 provides padding 1 rem along all the sides
          -> * flex items-center : Makes the items centered 
        */}
        <div className="m-4 p-4 flex items-center">
          <button
            /* 
            -> px-4 Provides padding 1rem on x axis (i.e) on left and right sides
            -> py-2 Provides padding 0.5rem on y axis (i.e) on top and bottom sides
            -> bg-gray-100 Provides background color grey
            -> rounded-lg makes the button rounded
           */
            className="px-4 py-2 bg-gray-100 rounded-lg"
            //Using state variable
            onClick={() => {
              filterByRating(4);
            }}
          >
            Top Rated Restaurant
          </button>
        </div>
        <div className="m-2 p-2 flex items-center">
          <input
            className="border border-black"
            value={loggedInUser}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          ></input>
        </div>
      </div>
      {/* flex flex-wrap : Makes the cards come side by side  */}
      <div className="flex flex-wrap">
        {/* {listofRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))} */}
        {filterListOfRestaurants.map((restaurant) => (
          <Link
            to={"/restaurants/" + restaurant.info.id}
            key={restaurant.info.id}
          >
            {restaurant.info.avgRating > 4.2 ? (
              <RestaurantWithPromotedLabel resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
