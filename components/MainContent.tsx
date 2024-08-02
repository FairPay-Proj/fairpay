// components/MainContent.tsx
"use client";

import Button from "@FairPay/components/Button";
import colors from "@FairPay/themes/colors";
import fontSizes from "@FairPay/themes/fontsizes";
import React from "react";
import styled from "styled-components";

type TitlePosition = "top" | "middle";

interface MainContentProps {
  titlePosition: TitlePosition;
  title: React.ReactNode;
  description?: string;
  buttonText: string;
  children: React.ReactNode;
}

const TitleWrapper = styled.div<{$position: TitlePosition}>`
  padding-top: ${(props) => (props.$position === "middle" ? "9vw" : "4.948vw")};
  font-size: ${fontSizes.lg};
  font-weight: bold;
  text-align: center;
  line-height: 1.563vw;
  margin-bottom: 0px;
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

const MainContent: React.FC<MainContentProps> = ({
  titlePosition,
  title,
  description = null,
  buttonText,
  children,
}) => (
  <>
    <TopWrap>
      <TitleWrapper $position={titlePosition}>{title}</TitleWrapper>
      {description && <P>{description}</P>}
    </TopWrap>
    {children}
    <ButtonWrap>
      <Button $variant="active">{buttonText}</Button>
    </ButtonWrap>
  </>
);

export default MainContent;
