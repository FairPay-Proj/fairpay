"use client";

import Button from "@FairPay/components/Button";
import FormCheckbox from "@FairPay/components/FormCheckbox";
import FormInput from "@FairPay/components/FormInput";
import MainContent from "@FairPay/components/MainContent";
import {FlexBox, Text, Title} from "@FairPay/components/styled/styledComponent";
import fontSizes from "@FairPay/themes/fontsizes";
import {useForm} from "react-hook-form";
import styled from "styled-components";

const TextWrap = styled.span<{cursor?: boolean}>`
  font-size: ${fontSizes.sx};
  cursor: ${({cursor}) => (cursor ? "pointer" : "default")};
`;

export default function Login() {
  const {control, register, handleSubmit} = useForm();

  const login = (data) => {
    console.log("data : ", data);
  };

  return (
    <MainContent
      titlePosition="middle"
      title={
        <Title>
          <Text>로그인</Text>
        </Title>
      }
      childrenStyle={{paddingTop: "3.958vw"}}
      buttonProps={{isShow: false}}>
      <FlexBox sx={{gap: "1.198vw", width: "100%"}}>
        <FlexBox sx={{gap: "0.781vw", width: "100%"}}>
          <FlexBox sx={{gap: "1.146vw", width: "100%"}}>
            <FormInput
              name="email"
              control={control}
              type="text"
              $variant="all"
              placeholder="이메일"
              validation={{required: "이메일을 입력해 주세요."}}
              register={register}
            />
            <FormInput
              name="password"
              control={control}
              type="password"
              $variant="all"
              placeholder="비밀번호"
              validation={{required: "비밀번호를 입력해 주세요."}}
              register={register}
            />
          </FlexBox>
          <FlexBox
            sx={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
            }}>
            <FlexBox sx={{flexDirection: "row", alignItems: "center"}}>
              <FormCheckbox
                control={control}
                name={"saveState"}
                text={<TextWrap>로그인 상태 유지</TextWrap>}
                gap="0.208vw"
              />
            </FlexBox>
            <FlexBox sx={{flexDirection: "row", alignItems: "center", gap: "0.365vw"}}>
              <TextWrap cursor>비밀번호 찾기</TextWrap>
              <TextWrap>|</TextWrap>
              <TextWrap cursor>회원 가입</TextWrap>
            </FlexBox>
          </FlexBox>
        </FlexBox>
        <Button onClick={handleSubmit(login)}>로그인</Button>
      </FlexBox>
    </MainContent>
  );
}
