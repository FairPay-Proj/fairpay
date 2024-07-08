import {validateRequired} from "@core/utils/commonUtils";
import {TextField} from "@mui/material";
import {useController} from "react-hook-form";

/**
 * @typedef {Object} FormTextFieldProp
 * @property {string} label
 * @param {FormTextFieldProp & import("react-hook-form").UseControllerProps & import("@mui/material").TextFieldProps} props
 * @returns
 */
const FormTextField = (props) => {
  const {
    name,
    control,
    defaultValue = "",
    rules = {},
    shouldUnregister,
    disabled,
    error = false,
    helperText = "",
    ...textFieldProps
  } = props;

  const {
    field: {onChange, onBlur, value = "", ...inputField},
    fieldState: {error: fieldError},
    formState,
  } = useController({
    name,
    control,
    defaultValue,
    rules: {
      ...rules,
      ...{
        validate: {...rules.validate, ...(rules.required && {validateRequired: validateRequired})},
      },
    },
    shouldUnregister,
    disabled,
  });

  const handleBlur = (e) => {
    if (e.target.value) {
      onChange(e.target.value.trim());
    }
    onBlur(e);
  };

  return (
    <TextField
      onBlur={handleBlur}
      onChange={onChange}
      value={value}
      {...inputField}
      {...textFieldProps}
      error={error || !!fieldError}
      helperText={!!helperText ? helperText : fieldError?.message}
    />
  );
};

export default FormTextField;
