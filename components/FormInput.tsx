import fontSizes from "@FairPay/themes/fontsizes";
import {Control, useController} from "react-hook-form";
import styled, {css} from "styled-components";

const variants = {
  all: {
    border: "1px solid #d9d9d9",
  },
  underLine: {
    border: "none",
    borderBottom: "1px solid #4594FD",
  },
};

const Label = styled.p`
  font-size: ${fontSizes.sx};
`;

const InputBox = styled.input<inputProps>`
  font-size: ${fontSizes.xs};
  width: 17.3vw;
  height: 2.396vw;
  padding-left: 0.5vw;
  ${({$variant}) => {
    if ($variant && variants[$variant]) {
      return css`
        border: ${variants[$variant].border};
        border-bottom: ${$variant === "underLine" && variants[$variant].borderBottom};
      `;
    }
  }}
`;

interface inputProps {
  name: string; // 이 input 필드의 id(=key)
  control: Control;
  disabled?: boolean;
  type: string;
  label?: string;
  placeholder: string;
  $variant?: "all" | "underLine";
}
const FormInput = ({name, control, type, label, placeholder, $variant}: inputProps) => {
  const disabled = false;

  const {
    field: {onChange, onBlur, value = "", ...inputField},
    fieldState: {error: fieldError},
  } = useController({
    name,
    control,
    disabled,
  });

  return (
    <>
      {label && <Label>{label}</Label>}
      <InputBox
        name={name}
        control={control}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
        $variant={$variant}></InputBox>
    </>
  );
};

export default FormInput;
