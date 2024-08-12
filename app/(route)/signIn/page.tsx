"use client";
import Button from "@FairPay/components/Button";
import FormInput from "@FairPay/components/FormInput";
import MainContent from "@FairPay/components/MainContent";
import {Text, Title} from "@FairPay/components/styled/styledComponent";
import {useForm} from "react-hook-form";

export default function SignIn() {
  const {control, handleSubmit} = useForm();

  const save = (data) => {
    // TODO data 의 type 정확하게 정의해주기
    // data = {email : "test@test.test"} 의 형식임.
    console.log("data : ", data);

    // TODO 넘어온 data로 firebase 에 insert 하기
  };

  return (
    <MainContent
      childrenStyle={{justifyContent: "center", alignItems: "flex-start"}}
      titlePosition="top"
      title={
        <Title>
          <Text>회원가입</Text>
        </Title>
      }
      buttonText="회원가입">
      <FormInput
        name="email"
        control={control}
        type="text"
        label="이메일"
        placeholder="이메일을 입력해 주세요."
        $variant="all"
      />
      <Button onClick={handleSubmit(save)}>제출???</Button>
    </MainContent>
  );
}
