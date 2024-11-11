import { useState, useEffect } from "react";
import { MENU_FETCH_URL } from "./constants";

const useRestaurantMenu = (resId) => {
  const [resList, setResList] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(MENU_FETCH_URL + resId);
    const json = await data.json();
    setResList(json?.data);
  };
  return resList;
};

export default useRestaurantMenu;
