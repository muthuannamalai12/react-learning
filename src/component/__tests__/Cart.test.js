import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import MOCK_DATA_NAME from "../mocks/mockResMenuData.json";
import RestaurantMenu from "../RestaurantMenu";
import "@testing-library/jest-dom";
import { act } from "react";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import Header from "../Header";
import Cart from "../Cart";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA_NAME);
    },
  });
});

it("Should check the render of Hotel Keerthanas along with the click of reccommendeed card", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <RestaurantMenu />
        </Provider>
      </BrowserRouter>
    );
  });

  const accoridanButton = screen.getByText("Recommended (8)");
  fireEvent.click(accoridanButton);
  const restaurantCards = screen.getAllByTestId("foodItems");
  expect(restaurantCards.length).toBe(8);
});

it("Should check whether Cart - (0 items) is present in header when no items are added in the cart", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
        </Provider>
      </BrowserRouter>
    );
  });
  const headerCartButton = screen.getByText("Cart - (0 items)");
  expect(headerCartButton).toBeInTheDocument();
});

it("Should check whether Cart - (1 items) is present in header when one item is added in the cart", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
        </Provider>
      </BrowserRouter>
    );
  });
  const accoridanButton = screen.getByText("Recommended (8)");
  fireEvent.click(accoridanButton);
  const addButton = screen.getAllByRole("button", { name: "Add +" });
  fireEvent.click(addButton[0]);
  const headerCartButton = screen.getByText("Cart - (1 items)");
  expect(headerCartButton).toBeInTheDocument();
});

it("Should check whether Cart - (2 items) is present in header when two items are added in the cart", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
        </Provider>
      </BrowserRouter>
    );
  });
  const accoridanButton = screen.getByText("Recommended (8)");
  fireEvent.click(accoridanButton);
  const addButton = screen.getAllByRole("button", { name: "Add +" });
  // Already in previous click one item is added in the cart and now we add another one
  fireEvent.click(addButton[1]);
  const headerCartButton = screen.getByText("Cart - (2 items)");
  expect(headerCartButton).toBeInTheDocument();
});

it("Should check whether Cart page is rendered correctly with the items added in the cart", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    );
  });
  const clearButton = screen.getByRole("button", { name: "Clear Cart" });
  fireEvent.click(clearButton);
  const restaurantCards = screen.getByText(
    "Cart is empty. Add Items to the cart!"
  );
  expect(restaurantCards).toBeInTheDocument();
});
