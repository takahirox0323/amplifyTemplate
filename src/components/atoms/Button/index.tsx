import { FC } from "react";
import styled from "styled-components";
import { colors } from "themes/colors";
import { fontSizes } from "themes/fontSizes";

interface ButtonProps {
  onClick: () => void;
  testId: string;
  label: string;
  fontSize: fontSizes;
  color: colors;
}

export const Button: FC<ButtonProps> = (props) => {
  const { label, testId, ...buttonProps } = props;
  return (
    <SButton {...buttonProps} data-testid={testId}>
      {label}
    </SButton>
  );
};

const SButton = styled.button<{
  fontSize: ButtonProps["fontSize"];
  color: ButtonProps["color"];
}>`
  font-size: ${(props) => props.fontSize};
  color: ${(props) => props.color};
`;
