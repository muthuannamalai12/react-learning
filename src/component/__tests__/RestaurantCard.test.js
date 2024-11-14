import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";

import { withPromotedLabel } from "../RestaurantCard";

it("Should render RestaurantCard component with props Data", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);
  const name = screen.getByText("Pizza Hut");
  expect(name).toBeInTheDocument();
});

it("should render RestaurantCard component with Promoted Label", () => {
  const RestaurantWithPromotedlabel = withPromotedLabel(RestaurantCard);
  render(<RestaurantWithPromotedlabel resData={MOCK_DATA} />);
  const getPromotedLabelText = screen.getByText("Promoted");
  expect(getPromotedLabelText).toBeInTheDocument();
});
