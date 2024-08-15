// Main.tsx
"use client";

import MainContent from "@FairPay/components/MainContent";
import {Img, ImgWrap, Text, Title} from "@FairPay/components/styled/styledComponent";
import styled from "styled-components";

const MainWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;

export default function Main() {
  return (
    <MainWrap>
      <MainContent
        childrenStyle={{justifyContent: "center", alignItems: "center"}}
        titlePosition="middle"
        title={
          <Title>
            <Text>이번엔 내가 내야하나?</Text>
            <Text>아니 너 차례야!</Text>
          </Title>
        }
        description="누가 계산할 차례인지 확인하세요."
        buttonProps={{
          text: "시작하기",
          onClickEvent: () => {},
          variant: "active",
        }}>
        <ImgWrap>
          <Img src="/images/mainImg.png" alt="Main Image" />
        </ImgWrap>
      </MainContent>
    </MainWrap>
  );
}
