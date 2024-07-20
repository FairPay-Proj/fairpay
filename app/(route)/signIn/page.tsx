"use client";
import Input from "@FairPay/components/Input";
import fontSizes from "@FairPay/themes/fontsizes";
import styled from "styled-components";

const Title = styled.p`
  display: block;
  font-size: ${fontSizes.lg};
  font-weight: bold;
  text-align: center;
  margin-top: 3.333vw;
  margin-bottom: 4.167vw;
`;

export default function SignIn() {
  return (
    <>
      <Title>회원가입</Title>
      <Input type="text" label="이메일" placeholder="이메일을 입력해 주세요." $variant="all" />
    </>
  );
}
