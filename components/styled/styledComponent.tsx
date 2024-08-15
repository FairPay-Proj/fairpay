import {CSSProperties} from "react";
import styled from "styled-components";

interface FlexBoxProps {
  sx?: CSSProperties;
}

export const Title = styled.div`
  font-size: inherit;
  font-weight: inherit;
  text-align: inherit;
  line-height: inherit;
`;

export const Text = styled.div`
  margin: 0;
`;

export const ImgWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
`;

export const FlexBox = styled.div<FlexBoxProps>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  ${({sx}) =>
    sx &&
    Object.entries(sx)
      .map(([key, value]) => `${key}: ${value};`)
      .join("")}
`;
