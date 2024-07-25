import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ButtonType } from "@/reusable/Button/Button.type.ts";
import Button from "../Button.tsx";

const props: ButtonType = {
  currency: "GBP",
  orderTotal: 200,
};

jest.mock("@button", () => ({
  Button: ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  ),
  Buttons: () => <button>add to cart</button>,
}));

describe("It should render <Button /> Component", () => {
  it("should be in the document", async () => {
    const { getByText } = render(<Button {...props} />);
    const button = getByText("add to cart");

    expect(button).toBeInTheDocument();
  });
});