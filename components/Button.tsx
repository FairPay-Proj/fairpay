"use client";

import colors from "@FairPay/themes/colors";
import styled from "styled-components";

type ButtonProps = {
  variant?: "default" | "cancel" | "warning";
  children: React.ReactNode;
};

const ButtonWrap = styled.button<ButtonProps>`
  width: 350px;
  height: 60px;
  padding: 8px 16px;
  font-size: 16px;
  border: none;
  border-radius: 7px;
  cursor: pointer;
  color: white;
  background-color: ${(props) => {
    switch (props.variant) {
      case "default":
        return colors.default;
      case "cancel":
        return colors.cancel;
      case "warning":
        return colors.warning;
      default:
        return colors.default;
    }
  }};
`;

ButtonWrap.defaultProps = {
  variant: "default",
};

const ButtonText = styled.span`
  color: "white";
  font-weight: "bold";
`;

const Button: React.FC<ButtonProps> = ({variant, children}) => (
  <ButtonWrap variant={variant}>
    <ButtonText>{children}</ButtonText>
  </ButtonWrap>
);

export default Button;
