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
  text: string;
  onClickEvent: () => void;
  variant: "active" | "inActive" | "cancel";
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
`;

export const MainContent: React.FC<MainContentProps> = ({
  titlePosition = "top", // 기본값
  title,
  description,
  childrenStyle,
  children,
  buttonProps = {
    text: "",
    onClickEvent: () => {},
    variant: "active",
  },
}) => {
  return (
    <>
      <TopWrap>
        <TitleWrap $position={titlePosition}>{title}</TitleWrap>
        {description && <P>{description}</P>}
      </TopWrap>
      <ChildrenWrap style={childrenStyle}>{children}</ChildrenWrap>
      <ButtonWrap>
        <Button $variant={buttonProps.variant} onClick={buttonProps.onClickEvent}>
          {buttonProps.text}
        </Button>
      </ButtonWrap>
    </>
  );
};

export default MainContent;
