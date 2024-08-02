// Main.tsx
"use client";

import MainContent from "@FairPay/components/MainContent";
import styled from "styled-components";

const MainWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;

const Title = styled.div`
  font-size: inherit;
  font-weight: inherit;
  text-align: inherit;
  line-height: inherit;
`;

const Text = styled.div`
  margin: 0;
`;

const ImgWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
`;

export default function Main() {
  return (
    <MainWrap>
      <MainContent
        titlePosition="middle"
        title={
          <Title>
            <Text>이번엔 내가 내야하나?</Text>
            <Text>아니 너 차례야!</Text>
          </Title>
        }
        description="누가 계산할 차례인지 확인하세요."
        buttonText="시작하기">
        <ImgWrap>
          <Img src="/images/mainImg.png" alt="Main Image" />
        </ImgWrap>
      </MainContent>
    </MainWrap>
  );
}
