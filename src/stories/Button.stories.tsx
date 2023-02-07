import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import { Button } from "../components/atoms/Button";
import { theme } from "themes";

export default {
  title: "components/atoms/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: "primary",
  fontSize: theme.fontSizes.extraLarge,
  color: theme.colors.primary,
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "secondary",
  fontSize: theme.fontSizes.extraSmall,
  color: theme.colors.secondary,
};
