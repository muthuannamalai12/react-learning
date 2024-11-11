import { useState, useEffect } from "react";

const useRestaurantsDataList = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filterListOfRestaurants, setFilteredListOfRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9480472&lng=80.1309948&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    const restaurants =
      json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || [];
    setListOfRestaurants(restaurants);
    setFilteredListOfRestaurants(restaurants);
  };

  const filterBySearchText = (searchText) => {
    const filteredList = listOfRestaurants.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredListOfRestaurants(filteredList);
  };

  const filterByRating = (minRating) => {
    const filteredList = listOfRestaurants.filter(
      (res) => res.info.avgRating >= minRating
    );
    setFilteredListOfRestaurants(filteredList);
  };

  return {
    listOfRestaurants,
    filterListOfRestaurants,
    filterBySearchText,
    filterByRating,
  };
};

export default useRestaurantsDataList;
