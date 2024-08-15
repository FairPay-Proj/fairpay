"use client";
import FormInput from "@FairPay/components/FormInput";
import MainContent from "@FairPay/components/MainContent";
import {useForm} from "react-hook-form";

export default function SignIn() {
  const {control, handleSubmit, register} = useForm();

  const save = (data) => {
    // TODO data 의 type 정확하게 정의해주기
    // data = {email : "test@test.test"} 의 형식임.
    console.log("data : ", data);

    // TODO 넘어온 data로 firebase 에 insert 하기
  };

  const fields = [
    {
      name: "email",
      type: "text",
      label: "이메일",
      $variant: "all",
      validation: {
        required: "이메일을 입력해 주세요.",
        pattern: {
          value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
          message: "유효한 이메일 형식을 입력해 주세요.",
        },
      },
    },
    {
      name: "password",
      type: "password",
      label: "비밀번호",
      $variant: "all",
      validation: {
        required: "비밀번호를 입력해 주세요.",
      },
    },
    {
      name: "confirmPassword",
      type: "password",
      label: "비밀번호 확인",
      $variant: "all",
      validation: {
        required: "비밀번호 확인을 입력해 주세요.",
        validate: (value, data) => value === data.password || "비밀번호가 일치하지 않습니다.",
      },
    },
    {
      name: "userName",
      type: "text",
      label: "이름",
      $variant: "all",
      validation: {
        required: "이름을 입력해 주세요.",
      },
    },
  ];

  return (
    <MainContent
      childrenStyle={{justifyContent: "center", alignItems: "flex-start"}}
      titlePosition="top"
      title="회원가입"
      buttonProps={{
        text: "회원가입",
        onClickEvent: handleSubmit(save),
        variant: "active",
      }}>
      {fields.map((field) => (
        <FormInput
          key={field.name}
          name={field.name}
          control={control}
          type={field.type}
          label={field.label}
          $variant="all"
          validation={field.validation}
          register={register}
        />
      ))}
    </MainContent>
  );
}
