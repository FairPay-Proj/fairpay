"use client";

import FormInput from "@FairPay/components/FormInput";
import MainContent from "@FairPay/components/MainContent";
import {FlexBox, Text, Title} from "@FairPay/components/styled/styledComponent";
import {useForm} from "react-hook-form";

export default function Login() {
  const {control, register} = useForm();

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
      <FlexBox>
        <FormInput
          name="email"
          control={control}
          type="text"
          label="이메일"
          $variant="all"
          validation={{required: "이메일"}}
          register={register}
        />
        <FormInput
          name="password"
          control={control}
          type="password"
          label="비밀번호"
          $variant="all"
          validation={{required: "비밀번호를 입력해 주세요."}}
          register={register}
        />
      </FlexBox>
    </MainContent>
  );
}
