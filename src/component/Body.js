import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import ShimmerUI from "./ShimmerUI";
import { Link } from "react-router-dom";

const Body = () => {
  // useState with mock data reslist
  const [listofRestaurants, setListOfRestaurants] = useState([]);
  const [filterListOfRestaurants, setFilteredListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  // This useEffect would be rendered once the body component mounts
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9480472&lng=80.1309948&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setListOfRestaurants(
      json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredListOfRestaurants(
      json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

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

  // using ternary operator performing conditional rendering
  return listofRestaurants.length === 0 ? (
    <ShimmerUI />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="serxh-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            onClick={() => {
              const filteredList = listofRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredListOfRestaurants(filteredList);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          //Using state variable
          onClick={() => {
            const filteredList = listofRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="restaurant-container">
        {/* {listofRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))} */}
        {filterListOfRestaurants.map((restaurant) => (
          <Link
            to={"/restaurants/" + restaurant.info.id}
            key={restaurant.info.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
