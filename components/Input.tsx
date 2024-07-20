import fontSizes from "@FairPay/themes/fontsizes";
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
  type: string;
  label?: string;
  placeholder: string;
  $variant?: "all" | "underLine";
}
const Input = ({type, label, placeholder, $variant}: inputProps) => {
  return (
    <>
      {label && <Label>{label}</Label>}
      <InputBox placeholder={placeholder} type={type} $variant={$variant}></InputBox>
    </>
  );
};

export default Input;
