import { render, screen, fireEvent } from "@testing-library/react";
import Header from "../Header";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";

it("Should render the Header component with the Login Button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />;
      </Provider>
    </BrowserRouter>
  );
  const button = screen.getByRole("button");
  expect(button).toBeInTheDocument();
});

it("Should render the Header component with the Login Button - Another Way", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />;
      </Provider>
    </BrowserRouter>
  );
  const button = screen.getByText("Login");
  expect(button).toBeInTheDocument();
});

it("If we have multiple button and need to check if any one button has rendered we can use below", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />;
      </Provider>
    </BrowserRouter>
  );
  const button = screen.getByRole("button", { name: "Login" });
  expect(button).toBeInTheDocument();
});

it("Should render the Header component with Cart - (0 items) exactly", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />;
      </Provider>
    </BrowserRouter>
  );
  const cartItems = screen.getByText("Cart - (0 items)");
  expect(cartItems).toBeInTheDocument();
});

it("Should render the Header component with Cart irrespective of there is items present inside it or not", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />;
      </Provider>
    </BrowserRouter>
  );
  // Regex expression to match cart so if anything start with cart is rendered in the header it would get the value in cartItems
  const cartItems = screen.getByText(/Cart/);
  expect(cartItems).toBeInTheDocument();
});

it("Should check the behaviour of login button change to logout button on clik of login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />;
      </Provider>
    </BrowserRouter>
  );
  const loginButton = screen.getByRole("button", { name: "Login" });
  //fire event triggers a click event on the Login button and once it done button changes to Logout
  fireEvent.click(loginButton);
  const logoutButton = screen.getByRole("button", { name: "Logout" });
  expect(logoutButton).toBeInTheDocument();
});

it("Should check the behaviour of logout button change to login button on clik of login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />;
      </Provider>
    </BrowserRouter>
  );
  const loginButton = screen.getByRole("button", { name: "Login" });
  //fire event triggers a click event on the Login button and once it done button changes to Logout
  fireEvent.click(loginButton);
  const logoutButton = screen.getByRole("button", { name: "Logout" });
  fireEvent.click(logoutButton);
  expect(loginButton).toBeInTheDocument();
});
