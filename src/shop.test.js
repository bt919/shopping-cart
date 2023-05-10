import Shop from "./components/shop";
import ShopHeader from "./components/shopHeader";
import ShopItem from "./components/shopItem";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";

describe("shop header", () => {
  it("shop header renders '0 items in cart' initially", () => {
    render(<ShopHeader numberOfItems={0} total={0} />);
    expect(
      screen.getByRole("heading", { name: "0 items in cart" }).textContent
    ).toMatch(/0 items in cart/i);
  });

  it("shop header renders 'Total: $0.00' initially", () => {
    render(<ShopHeader numberOfItems={0} total={0} />);
    expect(
      screen.getByRole("heading", { name: "Total: $0.00" }).textContent
    ).toMatch(/total: \$0.00/i);
  });
});

describe("shop item", () => {
  it("shop item renders correct initial price", () => {
    render(<ShopItem />);
    expect(screen.getByRole("heading", { name: "$5.99" }).textContent).toMatch(
      /\$5.99/
    );
  });

  //   it("shop item renders correct count after click", async () => {
  //     // const user = userEvent.setup();
  //     render(<ShopItem />);

  //     const plusButton = screen.getByRole("button", { name: "+" });

  //     userEvent.click(plusButton);

  //     expect(screen.getByRole("heading", { name: "$11.98" }).textContent).toMatch(
  //       /\$5.99/
  //     );
  //   });
});
