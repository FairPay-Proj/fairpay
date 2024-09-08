"use client";

import {Constants} from "@FairPay/app/constants/CommonConstant";
import CustomButton from "@FairPay/components/Button";
import {Button, FormLabel, Stack, Tab, Tabs, TextField, Typography} from "@mui/material";
import {useRouter} from "next/navigation";
import {useMemo, useState} from "react";
import {Controller, useForm} from "react-hook-form";

const Config = () => {
  const router = useRouter();
  const CONFIG_TABS = useMemo(
    () => [
      {id: Constants.SETTING_CONFIG_DEFAULT, name: "기본정보 변경"},
      {id: Constants.SETTING_CONFIG_PASSWORD, name: "비밀번호 변경"},
    ],
    []
  );
  const [curTab, setTab] = useState(Constants.SETTING_CONFIG_DEFAULT);

  const disaccount = (data) => {
    console.log(data);
    window.alert("해지되었습니다.");

    // 초대코드 입력 페이지로 이동하거나 해야할듯?
    router.push("/");
  };

  return (
    <Stack sx={{height: 1}}>
      <Typography>설정</Typography>

      <Tabs value={curTab}>
        {CONFIG_TABS.map((tab) => (
          <Tab
            key={tab.id}
            value={tab.id}
            label={tab.name}
            component={Button}
            sx={{width: 0.5, borderBottom: "1px solid"}}
            onClick={() => setTab(tab.id)}
          />
        ))}
      </Tabs>

      {curTab === Constants.SETTING_CONFIG_DEFAULT && <DefaultConfig disaccount={disaccount} />}
      {curTab === Constants.SETTING_CONFIG_PASSWORD && <ChangePassword disaccount={disaccount} />}
    </Stack>
  );
};

export default Config;

const DefaultConfig = ({disaccount}) => {
  const {
    control,
    handleSubmit,
    formState: {errors, isValid},
  } = useForm({mode: "onChange"});

  const save = (data) => {
    console.log(data);
  };

  return (
    <Stack sx={{width: 1, flex: "1 0 0", alignItems: "space-between"}}>
      <Stack
        sx={{
          pt: "1.667vw",
          gap: "1.771vw",
          flex: "1 0 0",
        }}>
        <Stack sx={{gap: "0.5vw"}}>
          <FormLabel
            sx={{
              fontFamily: "Inter",
              fontSize: "16px",
              fontWeight: "normal",
              lineHeight: "18.72px",
              letterSpacing: "0px",
              color: "#000000",
            }}>
            이름
          </FormLabel>

          <Controller
            name="username"
            control={control}
            // 현재 등록된 이름일것
            defaultValue="김민정"
            rules={{
              required: "이름을 입력해 주세요.",
            }}
            render={({field}) => (
              <TextField
                {...field}
                variant="standard"
                autoFocus
                slotProps={{
                  input: {
                    sx: {
                      pl: "0.521vw",
                      height: "2.5vw",
                      fontFamily: "Inter",
                      fontSize: "14px",
                      fontWeight: "normal",
                      lineHeight: "16.38px",
                      letterSpacing: "0px",
                      color: "#000000",
                    },
                  },
                }}
                error={!!errors.username}
                helperText={errors.username ? String(errors.username.message) : ""}
              />
            )}
          />
        </Stack>
        <Stack sx={{gap: "0.5vw"}}>
          <FormLabel
            sx={{
              fontFamily: "Inter",
              fontSize: "16px",
              fontWeight: "normal",
              lineHeight: "18.72px",
              letterSpacing: "0px",
              color: "#000000",
            }}>
            계좌번호
          </FormLabel>

          <Controller
            name="accountNumber"
            control={control}
            // 현재 등록된 계좌번호일것
            defaultValue="1000-7283-9291"
            rules={{
              required: "계좌번호를 입력해 주세요.",
            }}
            render={({field}) => (
              <TextField
                {...field}
                variant="standard"
                slotProps={{
                  input: {
                    sx: {
                      pl: "0.521vw",
                      height: "2.5vw",
                      fontFamily: "Inter",
                      fontSize: "14px",
                      fontWeight: "normal",
                      lineHeight: "16.38px",
                      letterSpacing: "0px",
                      color: "#000000",
                    },
                  },
                }}
                error={!!errors.accountNumber}
                helperText={errors.accountNumber ? String(errors.accountNumber.message) : ""}
              />
            )}
          />
        </Stack>
      </Stack>

      <Stack sx={{gap: "0.417vw", pb: "1.719vw"}}>
        <CustomButton $variant={isValid ? "active" : "inActive"} onClick={handleSubmit(save)}>
          변경하기
        </CustomButton>
        <CustomButton $variant="cancel" onClick={handleSubmit(disaccount)}>
          해지하기
        </CustomButton>
      </Stack>
    </Stack>
  );
};

const ChangePassword = ({disaccount}) => {
  const {
    control,
    handleSubmit,
    formState: {errors, isValid},
  } = useForm({mode: "onChange"});

  const save = (data) => {
    console.log(data);
  };

  return (
    <Stack sx={{width: 1, flex: "1 0 0", alignItems: "space-between"}}>
      <Stack
        sx={{
          pt: "1.667vw",
          gap: "1.771vw",
          flex: "1 0 0",
        }}>
        <Stack sx={{gap: "0.5vw"}}>
          <FormLabel
            sx={{
              fontFamily: "Inter",
              fontSize: "16px",
              fontWeight: "normal",
              lineHeight: "18.72px",
              letterSpacing: "0px",
              color: "#000000",
            }}>
            현재 비밀번호
          </FormLabel>

          <Controller
            name="currentPassword"
            control={control}
            rules={{
              required: "비밀번호를 입력해 주세요.",
            }}
            render={({field}) => (
              <TextField
                {...field}
                variant="standard"
                autoFocus
                type="password"
                slotProps={{
                  input: {
                    sx: {
                      pl: "0.521vw",
                      height: "2.5vw",
                      fontFamily: "Inter",
                      fontSize: "14px",
                      fontWeight: "normal",
                      lineHeight: "16.38px",
                      letterSpacing: "0px",
                      color: "#000000",
                    },
                  },
                }}
                error={!!errors.currentPassword}
                helperText={errors.currentPassword ? String(errors.currentPassword.message) : ""}
              />
            )}
          />
        </Stack>
        <Stack sx={{gap: "0.5vw"}}>
          <FormLabel
            sx={{
              fontFamily: "Inter",
              fontSize: "16px",
              fontWeight: "normal",
              lineHeight: "18.72px",
              letterSpacing: "0px",
              color: "#000000",
            }}>
            새 비밀번호
          </FormLabel>

          <Controller
            name="newPassword"
            control={control}
            rules={{
              required: "비밀번호 확인을 입력해 주세요.",
            }}
            render={({field}) => (
              <TextField
                {...field}
                variant="standard"
                type="password"
                slotProps={{
                  input: {
                    sx: {
                      pl: "0.521vw",
                      height: "2.5vw",
                      fontFamily: "Inter",
                      fontSize: "14px",
                      fontWeight: "normal",
                      lineHeight: "16.38px",
                      letterSpacing: "0px",
                      color: "#000000",
                    },
                  },
                }}
                error={!!errors.newPassword}
                helperText={errors.newPassword ? String(errors.newPassword.message) : ""}
              />
            )}
          />
        </Stack>
        <Stack sx={{gap: "0.5vw"}}>
          <FormLabel
            sx={{
              fontFamily: "Inter",
              fontSize: "16px",
              fontWeight: "normal",
              lineHeight: "18.72px",
              letterSpacing: "0px",
              color: "#000000",
            }}>
            새 비밀번호 확인
          </FormLabel>

          <Controller
            name="newPasswordConfirm"
            control={control}
            rules={{
              required: "비밀번호 확인을 입력해 주세요.",
              validate: (value, data) =>
                value === data.newPassword || "비밀번호가 일치하지 않습니다.",
            }}
            render={({field}) => (
              <TextField
                {...field}
                variant="standard"
                type="password"
                slotProps={{
                  input: {
                    sx: {
                      pl: "0.521vw",
                      height: "2.5vw",
                      fontFamily: "Inter",
                      fontSize: "14px",
                      fontWeight: "normal",
                      lineHeight: "16.38px",
                      letterSpacing: "0px",
                      color: "#000000",
                    },
                  },
                }}
                error={!!errors.newPasswordConfirm}
                helperText={
                  errors.newPasswordConfirm ? String(errors.newPasswordConfirm.message) : ""
                }
              />
            )}
          />
        </Stack>
      </Stack>

      <Stack sx={{gap: "0.417vw", pb: "1.719vw"}}>
        <CustomButton $variant={isValid ? "active" : "inActive"} onClick={handleSubmit(save)}>
          변경하기
        </CustomButton>
        <CustomButton $variant="cancel" onClick={handleSubmit(disaccount)}>
          해지하기
        </CustomButton>
      </Stack>
    </Stack>
  );
};
