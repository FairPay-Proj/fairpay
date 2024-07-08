import Iconify from "@core/components/Iconify";
import {IconButton, InputAdornment, TextField} from "@mui/material";
import {useRef, useState} from "react";
import {useController} from "react-hook-form";

/**
 * @typedef {Object} FormPasswordProp
 * @property {string} label
 * @param {FormPasswordProp & import("react-hook-form").UseControllerProps & import("@mui/material").TextFieldProps} props
 * @returns
 */
const FormPassword = (props) => {
  const {
    name,
    control,
    defaultValue = "",
    rules,
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
    rules,
    shouldUnregister,
    disabled,
  });

  const inputRef = useRef();

  const [isHidePasswd, setHidePasswd] = useState(false);

  const handleToggleHidePasswd = () => {
    setHidePasswd((prev) => !prev);

    setTimeout(() => {
      if (!inputRef.current) return;

      const inputPasswd = inputRef.current;
      inputPasswd.focus();
      inputPasswd.setSelectionRange(inputPasswd.value.length, inputPasswd.value.length);
    });
  };

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
      inputRef={(e) => {
        inputField.ref(e);
        inputRef.current = e;
      }}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={handleToggleHidePasswd} edge="end">
              <Iconify icon={isHidePasswd ? "solar:eye-closed-bold" : "solar:eye-bold"} />
            </IconButton>
          </InputAdornment>
        ),
      }}
      type={isHidePasswd ? "text" : "password"}
      error={error || !!fieldError}
      helperText={!!helperText ? helperText : fieldError?.message}
    />
  );
};

export default FormPassword;
