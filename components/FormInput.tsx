import colors from "@FairPay/themes/colors";
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

const InputContainer = styled.div`
  width: 96%;
`;

const Label = styled.p<styleProps>`
  font-size: ${fontSizes.md};
  color: ${(props) => props.color};
`;

const InputBox = styled.input<inputProps>`
  font-size: ${fontSizes.sx};
  width: 100%;
  height: 2.396vw;
  padding-left: 0.5vw;
  border: 1px solid red;
  ${({$variant}) => {
    if ($variant && variants[$variant]) {
      return css`
        border: ${variants[$variant].border};
        border-bottom: ${$variant === "underLine" && variants[$variant].borderBottom};
      `;
    }
  }}
`;

interface styleProps {
  color: string;
}
interface inputProps {
  control: Control;
  register: any;
  validation?: any;
  disabled?: boolean;
  name: string; // 이 input 필드의 id(=key)
  type: string;
  label?: string;
  $variant?: "all" | "underLine";
}

const FormInput = ({name, control, register, validation, type, label, $variant}: inputProps) => {
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
    <InputContainer>
      {fieldError ? (
        <Label color={colors.fail}>{fieldError.message}</Label>
      ) : label ? (
        <Label color={colors.black}>{label}</Label>
      ) : (
        <></>
      )}
      <InputBox
        name={name}
        control={control}
        value={value}
        onChange={onChange}
        placeholder={validation.required}
        type={type}
        $variant={$variant}
        {...register(name, validation)}
      />
    </InputContainer>
  );
};

export default FormInput;
