import React from "react";
import { SIZES, COLORS, StyledButton } from "./ButtonStyle";

export default function Button({
  type = "button",
  color,
  size,
  onClick,
  children,
}) {
  const sizeStyle = SIZES[size];
  const colorStyle = COLORS[color];

  return (
    <StyledButton
      type={type}
      color={colorStyle}
      size={sizeStyle}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
}
