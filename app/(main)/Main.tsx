"use client";

import Button from "@FairPay/components/Button";
import colors from "@FairPay/themes/colors";
import fontSizes from "@FairPay/themes/fontsizes";
import styled from "styled-components";

const Title = styled.p`
  margin-top: 8.073vw;
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
  margin-bottom: 2.604vw;
`;

const Img = styled.img`
  margin-bottom: 8.24vw;
  width: 100%;
`;

export default function Main() {
  return (
    <>
      <Title>
        이번엔 내가 내야하나? <br />
        아니 너 차례야!
      </Title>
      <P>누가 계산할 차례인지 확인하세요.</P>
      <Img src="/images/mainImg.png" />
      <Button $variant="active">시작하기</Button>
    </>
  );
}
