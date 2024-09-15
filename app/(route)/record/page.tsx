"use client";

import colors from "@FairPay/themes/colors";
import fontSizes from "@FairPay/themes/fontsizes";
import styled from "styled-components";
import Record from "./_component/RecordList";

const Container = styled.div`
  width: auto;
  padding: 0px 22px;
  margin: 0;
`;

const Title = styled.p`
  font-size: ${fontSizes.xl};
  color: #fff;
  margin: 0;
  font-weight: bold;
`;

const DetailTxt = styled.p<StyleProps>`
  font-size: ${fontSizes.md};
  color: ${(props) => props.color || "#fff"};
  margin-top: ${(props) => props.marginTop || "0px"};
`;

const RecordContainer = styled.div`
  height: 470px;
  overflow-y: scroll;
`;

interface StyleProps {
  marginTop?: string;
  color?: string;
}

const recordListData = [
  {
    date: "2024.03.01",
    name: "김민준",
    price: "25,000 원",
  },
  {
    date: "2024.03.01",
    name: "김민준",
    price: "20,000 원",
  },
  {
    date: "2024.03.02",
    name: "김연희",
    price: "15,000 원",
  },
  {
    date: "2024.03.03",
    name: "김민준",
    price: "25,000 원",
  },
  {
    date: "2024.03.04",
    name: "김연희",
    price: "29,000 원",
  },
  {
    date: "2024.03.02",
    name: "김연희",
    price: "15,000 원",
  },
  {
    date: "2024.03.03",
    name: "김민준",
    price: "25,000 원",
  },
  {
    date: "2024.03.04",
    name: "김연희",
    price: "29,000 원",
  },
  {
    date: "2024.03.02",
    name: "김연희",
    price: "15,000 원",
  },
  {
    date: "2024.03.03",
    name: "김민준",
    price: "25,000 원",
  },
  {
    date: "2024.03.04",
    name: "김연희",
    price: "29,000 원",
  },
];
export default function page() {
  return (
    <Container>
      <Title>
        이번에는 김연희님의 <span style={{marginTop: "3px", display: "block"}}>차례에요</span>
      </Title>
      <DetailTxt marginTop="13px">김연희님이 3,400 원 더 냈어요.</DetailTxt>
      <DetailTxt color={colors.default} marginTop="35px">
        김민준님과 김연희님의 기록입니다.
      </DetailTxt>
      <RecordContainer>
        <Record recordListData={recordListData} />
      </RecordContainer>
    </Container>
  );
}
