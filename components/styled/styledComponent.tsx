import styled, {CSSObject} from "styled-components";

interface FlexBoxProps {
  sx?: CSSObject;
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
  ${(props) => props.sx && {...props.sx}}; // sx에서 넘어온 스타일을 덮어씌움
`;
