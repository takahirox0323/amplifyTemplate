import { FC } from "react";

interface TextProps {
  text: string;
}

export const Text: FC<TextProps> = ({ text }) => {
  return <p data-testid="test">{text}</p>;
};
