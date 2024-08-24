import React from "react";
import {Control, useController} from "react-hook-form";
import styled from "styled-components";
import {Img, ImgWrap} from "./styled/styledComponent";

interface CheckProps {
  name: string;
  control: Control<any>;
  text: React.ReactNode;
  gap?: string;
}

const Box = styled.div`
  margin: 0;
  padding: 0;
`;

const InputCheck = styled.input`
  margin: 0;
  display: none;
`;

const Label = styled.label<{gap?: string}>`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: ${({gap}) => gap || "0px"};
`;

const FormCheckbox = ({name, control, text, gap}: CheckProps) => {
  const {
    field: {onChange, value},
  } = useController({
    name,
    control,
  });

  return (
    <Box>
      <InputCheck type="checkbox" onChange={onChange} checked={value} id={name} />
      <Label htmlFor={name} gap={gap}>
        <ImgWrap>
          {value ? (
            <Img src="/images/checkbox-fill.svg" alt="checkbox_fill" />
          ) : (
            <Img src="/images/checkbox-blank-line.svg" alt="checkbox_blank_line" />
          )}
        </ImgWrap>
        {text}
      </Label>
    </Box>
  );
};

export default FormCheckbox;
