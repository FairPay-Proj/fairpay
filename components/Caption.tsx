"use client";

import fontSizes from "@FairPay/themes/fontsizes";
import styled from "styled-components";
import {Img, ImgWrap} from "./styled/styledComponent";

const Box = styled.div`
  display: flex;
  flex-direction: row;
  /* flex-grow: 1; */
  align-items: flex-start;
  justify-content: center;
  padding: 0.521vw;
  gap: 0.26vw;
  border-radius: 7px;
  background: rgba(241, 249, 252, 0.6);
  box-sizing: border-box;
  border: 1px solid #d7eef5;
`;

const CaptionTextWrap = styled.p`
  margin: 0;
  padding: 0;
  display: flex;
  width: 100%;
  white-space: normal;
  word-break: break-all;
  font-family: Inter;
  font-size: ${fontSizes.sx};
  font-weight: normal;
  line-height: 16.38px;
  letter-spacing: 0px;
  color: #2d6a98;
`;

const Caption = ({children}) => {
  return (
    <Box>
      <ImgWrap>
        <Img src="/images/InfoIcon.svg" alt="InfoIcon" />
      </ImgWrap>
      <CaptionTextWrap>{children}</CaptionTextWrap>
    </Box>
  );
};

export default Caption;
