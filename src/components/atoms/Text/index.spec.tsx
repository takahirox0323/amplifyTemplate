import { render, screen } from "@testing-library/react";
import { Text } from "./";

test("Text component のテスト", async () => {
  const initialText = "fizz";
  render(<Text text={initialText} />);
  const element = screen.getByTestId("test");
  expect(element.innerHTML).toBe(initialText);
});
