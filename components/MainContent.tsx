// components/MainContent.tsx
"use client";

import Button from "@FairPay/components/Button";
import colors from "@FairPay/themes/colors";
import fontSizes from "@FairPay/themes/fontsizes";
import React from "react";
import styled from "styled-components";

type TitlePosition = "top" | "middle";

type ChildrenStyle = React.CSSProperties;

interface ButtonPropsType {
  isShow?: boolean;
  text?: string;
  onClickEvent?: () => void;
  variant?: "active" | "inActive" | "cancel";
}

interface MainContentProps {
  titlePosition?: TitlePosition;
  title: React.ReactNode;
  description?: string;
  children: React.ReactNode;
  childrenStyle?: ChildrenStyle;
  buttonProps?: ButtonPropsType;
}

const TitleWrap = styled.div<{$position: TitlePosition}>`
  padding-top: ${(props) => (props.$position === "middle" ? "9vw" : "4.948vw")};
  font-size: ${fontSizes.lg};
  font-weight: bold;
  text-align: center;
  line-height: 1.563vw;
  margin-bottom: 0px;
  @media (max-width: 650px) {
    font-size: ${fontSizes.m_xl};
    line-height: 8.563vw;
    padding-top: ${(props) => (props.$position === "middle" ? "18vw" : "4.948vw")};
  }
`;

const ChildrenWrap = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow: scroll;
`;

const P = styled.p`
  text-align: center;
  font-weight: normal;
  color: ${colors.grey};
  font-size: ${fontSizes.sx};
  @media (max-width: 650px) {
    font-size: ${fontSizes.m_lg};
  }
`;

const TopWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const ButtonWrap = styled.div`
  display: flex;
  flex-direction: column;
  height: 3.125vw;
  padding: 1.719vw 0;
  @media (max-width: 650px) {
    padding: 0vw;
    height: 30vw;
    justify-content: flex-end;
    padding-bottom: 4vw;
    gap: 1.8vw;
  }
`;

export const MainContent: React.FC<MainContentProps> = ({
  titlePosition = "top", // 기본값
  title,
  description,
  childrenStyle,
  children,
  buttonProps = {},
}) => {
  const {isShow = true, text = "", onClickEvent = () => {}, variant = "active"} = buttonProps;

  return (
    <>
      <TopWrap>
        <TitleWrap $position={titlePosition}>{title}</TitleWrap>
        {description && <P>{description}</P>}
      </TopWrap>
      <ChildrenWrap style={childrenStyle}>{children}</ChildrenWrap>
      {isShow && (
        <ButtonWrap>
          <Button $variant={variant} onClick={onClickEvent}>
            {text}
          </Button>
        </ButtonWrap>
      )}
    </>
  );
};

export default MainContent;
