"use client";

import Caption from "@FairPay/components/Caption";
import FormInput from "@FairPay/components/FormInput";
import MainContent from "@FairPay/components/MainContent";
import {FlexBox, Text, Title} from "@FairPay/components/styled/styledComponent";
import {useState} from "react";
import {useForm} from "react-hook-form";

export default function findPassword() {
  const {control, register} = useForm();
  const [isSubmit, setIsSubmit] = useState(false);

  return (
    <MainContent
      titlePosition="top"
      title={
        <Title>
          <Text>비밀번호 찾기</Text>
        </Title>
      }
      childrenStyle={{paddingTop: "3.958vw"}}
      buttonProps={{
        text: isSubmit ? "로그인하러 가기" : "찾기",
        onClickEvent: isSubmit
          ? () => {
              console.error("개발해야함");
            }
          : () => {
              setIsSubmit((prev) => !prev);
            },
      }}>
      <FlexBox
        sx={{
          gap: "0.625vw",
        }}>
        <FormInput
          name="email"
          control={control}
          type="text"
          label="이메일"
          $variant="all"
          validation={{required: "fairpay@fairpay.com"}}
          register={register}
        />
        {isSubmit && (
          <Caption>
            해당 이메일로 새 비밀번호가 전송되었습니다. <br />
            확인 후 다시 로그인해 주세요.
          </Caption>
        )}
      </FlexBox>
    </MainContent>
  );
}
