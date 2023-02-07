import { userEvent } from "@storybook/testing-library";
import { render, screen } from "@testing-library/react";
import { Button } from "./";
import { theme } from "themes";

test("Button component のテスト", async () => {
  let count = 0;
  const onClick = () => {
    count = count + 1;
  };
  render(
    <Button
      fontSize={theme.fontSizes.extraLarge}
      color={theme.colors.danger}
      label="test"
      onClick={onClick}
      testId="button"
    />
  );
  userEvent.click(screen.getByTestId("button"));
  expect(count).toBe(1);
});
