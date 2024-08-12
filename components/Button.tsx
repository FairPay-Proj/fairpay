"use client";

import colors from "@FairPay/themes/colors";
import fontSizes from "@FairPay/themes/fontsizes";
import {ButtonHTMLAttributes} from "react";
import styled, {css} from "styled-components";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  $variant?: "active" | "inActive" | "cancel";
};

const variants = {
  active: {
    color: "#fff",
    backgroundColor: `${colors.default}`,
    cursor: "pointer",
    pseudoClass: {
      hover: {
        color: "#fff",
        backgroundColor: `${colors.hoverActive}`,
      },
    },
  },
  inActive: {
    color: "#fff",
    backgroundColor: `${colors.cancel}`,
    cursor: "default",
  },
  cancel: {
    color: "#fff",
    backgroundColor: `${colors.warning}`,
    cursor: "pointer",
    pseudoClass: {
      hover: {
        color: "#fff",
        backgroundColor: `${colors.hoverCancel}`,
      },
    },
  },
};

const ButtonWrap = styled.button<ButtonProps>`
  width: 100%;
  height: 3.125vw;
  padding: 0.417vw 0.833vw;
  font-size: ${fontSizes.sx};
  border: none;
  border-radius: 0.365vw;
  color: white;
  ${({$variant}) => {
    if ($variant && variants[$variant]) {
      return css`
        color: ${$variant !== "inActive" && variants[$variant].color};
        background-color: ${variants[$variant].backgroundColor};
        cursor: ${variants[$variant].cursor};
        &:hover {
          color: ${$variant !== "inActive" && variants[$variant].pseudoClass.hover.color};
          background-color: ${$variant !== "inActive" &&
          variants[$variant].pseudoClass.hover.backgroundColor};
          transition: all 0.3s;
        }
      `;
    }
  }}
`;

ButtonWrap.defaultProps = {
  $variant: "active",
};

const ButtonText = styled.span`
  color: "white";
  font-weight: "bold";
`;

const Button: React.FC<ButtonProps> = ({$variant, children, ...props}) => (
  <ButtonWrap $variant={$variant} {...props}>
    <ButtonText>{children}</ButtonText>
  </ButtonWrap>
);

export default Button;
