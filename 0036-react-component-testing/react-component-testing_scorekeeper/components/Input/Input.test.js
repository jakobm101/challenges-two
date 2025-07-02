import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from ".";

test("renders a label and an input with the correct attributes", () => {
  render(<Input placeholder={"some text"} labelText={"labelText"} />);
  const inputElement = screen.getByRole("textbox");
  expect(inputElement).toHaveAttribute("placeholder", "some text");
  const label = screen.getByText("labelText");
  expect(label).toBeInTheDocument();
});

test("calls callback on every user input", async () => {
  const handleChange = jest.fn();
  render(<Input onChange={handleChange} />);
  // await user.click() // click is probably wrong
  const inputField = screen.getByRole("textbox");
  const user = userEvent.setup();
  await user.type(inputField, "hi");

  expect(handleChange).toHaveBeenCalledTimes(2);
});
