import FormPassword from "@core/components/form/FormPassword";
import FormTextField from "@core/components/form/FormTextField";
import Logo from "@core/components/logo/Logo";
import {Constants} from "@core/constants/commonConstants";
import {getStorage} from "@core/hook/useLocalStorage";
import {defaultLang, useTranslate} from "@core/module/locale";
import {codeListQuery} from "@core/service/query/codeListQuery";
import {LoadingButton} from "@mui/lab";
import {
  Button,
  Checkbox,
  FormControlLabel,
  MenuItem,
  Stack,
  Tab,
  Tabs,
  TextField,
} from "@mui/material";
import {alpha, useTheme} from "@mui/material/styles";
import {useQueries, useQueryClient} from "@tanstack/react-query";
import ChangePasswordPop from "@web/security/components/ChangePasswordPop";
import DupUsersPop from "@web/security/components/DupUsersPop";
import {useLoginManager} from "@web/security/hook/useLoginManager";
import {LOGIN_MODES} from "@web/security/securityConstants";
import {t} from "i18next";
import {useEffect, useState} from "react";
import {useForm} from "react-hook-form";
import {Trans} from "react-i18next";
import {useSearchParams} from "react-router-dom";

const Login = () => {
  const [searchParams] = useSearchParams();
  const {onChangeLang} = useTranslate();
  const theme = useTheme();
  const queryClient = useQueryClient();

  const locale = getStorage(Constants.XCLICK_LOGIN_LOCALE, defaultLang.value);
  const loginMode = getStorage(Constants.XCLICK_LOGIN_MODE, LOGIN_MODES[0]);

  useEffect(() => {
    // 로그인 창이 빨리 뜰 수 있도록 데이터를 미리 셋팅해준다.
    queryClient.setQueryData(
      ["sys", "codes", Constants.GRPCD_LOCALE],
      [
        {
          cd: "ko",
          name: "한국어",
        },
        {
          cd: "en",
          name: "English",
        },
      ]
    );
  }, [queryClient]);

  const [{data: localeList = []}] = useQueries({
    queries: [codeListQuery(Constants.GRPCD_LOCALE)],
  });

  const [notice, setNotice] = useState(""); // TODO : 추후에 넣어야 한다

  const {
    control,
    setValue,
    getValues,
    watch,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      id: getStorage(Constants.XCLICK_LOGIN_ID),
    },
  });

  const loginMgr = useLoginManager({
    locale,
    loginMode,
    onChangeLang,
    setValue,
    handleSubmit,
    pathname: searchParams.get("pathname") || "",
    search: searchParams.get("search") || "",
  });

  const renderNotice = notice && (
    <Stack
      sx={{
        position: "absolute",
        top: 0,
        width: 1,
        height: 46,
        padding: theme.spacing(1.5, 6),
        justifyContent: "center",
        alignItems: "center",
      }}>
      {notice}
    </Stack>
  );

  const renderLogin = (
    <Stack
      sx={{
        width: 480,
        padding: theme.spacing(8, 6),
        alignItems: "center",
        gap: 2,
        flexShrink: 0,
        borderRadius: 2,
        backgroundColor: "background.paper",
        boxShadow: `-40px 40px 80px -8px ${alpha(theme.palette.common.black, 0.24)}`,
      }}>
      {/* login_box */}

      <Stack
        direction="row"
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
          alignSelf: "stretch",
        }}>
        <Logo disabledLink type="vertical" />

        <TextField
          select
          size="medium"
          label={t("label.language")}
          value={loginMgr.locale}
          onChange={(e) => loginMgr.onChangeLocale(e.target.value)}
          sx={{width: 180}}>
          {localeList.map((localeCode) => (
            <MenuItem key={localeCode.cd} value={localeCode.cd}>
              {localeCode.name}
            </MenuItem>
          ))}
        </TextField>
      </Stack>

      {/* login_tab */}
      <Stack
        sx={{
          alignItems: "flex-start",
          gap: 3,
          alignSelf: "stretch",
        }}>
        {/* tab_menu */}
        <Stack
          sx={{
            alignItems: "flex-start",
            alignSelf: "stretch",
          }}>
          <Tabs value={loginMgr.loginMode.value}>
            {LOGIN_MODES.map((loginMode) => (
              <Tab
                key={loginMode.key}
                value={loginMode.value}
                label={t(`label.${loginMode.key}`)}
                component={Button}
                onClick={() => loginMgr.onChangeLoginMode(loginMode)}
              />
            ))}
          </Tabs>
        </Stack>

        {/* tab_cont */}
        <Stack
          sx={{
            alignItems: "flex-start",
            gap: 1,
            alignSelf: "stretch",
          }}>
          <FormTextField
            name="id"
            control={control}
            label={t(`label.${loginMgr.loginMode.key}`)}
            fullWidth
            autoFocus={watch("id") === ""}
            onKeyUp={loginMgr.onKeyUp}
            rules={{
              required: t("validation.required"),
            }}
          />

          <FormPassword
            name="password"
            control={control}
            label={t("label.password")}
            fullWidth
            // autoFocus={watch("id") !== ""}
            onKeyUp={loginMgr.onKeyUp}
          />

          <FormControlLabel
            label={t(`label.save.${loginMgr.loginMode.key}`)}
            control={
              <Checkbox
                checked={loginMgr.isSave}
                onChange={(e) => loginMgr.onChangeSave(e.target.checked)}
              />
            }
          />
        </Stack>
      </Stack>

      {/* login_btn */}
      <Stack
        sx={{
          justifyContent: "center",
          alignItems: "center",
          alignSelf: "stretch",
        }}>
        <LoadingButton
          fullWidth
          color="primary"
          size="large"
          type="button"
          variant="contained"
          loading={loginMgr.isPending}
          onClick={handleSubmit(loginMgr.onLoginBefore)}>
          <Trans i18nKey="label.login" />
        </LoadingButton>
      </Stack>
    </Stack>
  );

  const renderTypeA = (
    <Stack
      sx={{
        display: "flex",
        height: 1,
        padding: theme.spacing(11, 5),
        justifyContent: "center",
        alignItems: "center",
        flex: "1 0 0",
        background: "url(/assets/background/bg_login.png)",
        backgroundSize: "cover",
      }}>
      {renderNotice}
      {renderLogin}
    </Stack>
  );

  const renderTypeB = (
    <Stack>
      <Stack
        sx={{
          width: 600,
          padding: theme.spacing(8, 10),
          alignItems: "center",
          gap: 2,
          flexShrink: 0,
          alignSelf: "stretch",
        }}></Stack>
    </Stack>
  );

  // 밍to연 - 1
  const reference = (
    <FormTextField
      name="mailCap"
      control={control}
      rules={{
        required: t("validation.required"),
        validate: (value) =>
          (Number(value) && Number(value) > 0) || t("label.schedule.write.valid.number"),
      }}
      label={t("label.admin.capacity.mail")}
      size="small"
      required
    />
  );

  return (
    <>
      {renderTypeA}

      {loginMgr.isOpenDupUsers && (
        <DupUsersPop
          name={getValues("id")}
          locale={locale}
          selectDupUser={loginMgr.selectDupUser}
          closeDupUsersPop={() => loginMgr.setOpenDupUsers(false)}
        />
      )}
      {loginMgr.isOpenChgPasswd && (
        <ChangePasswordPop
          type={loginMgr.errCode}
          id={getValues("id")}
          passwd={getValues("password")}
          loginMode={loginMgr.loginMode.value}
          closeChangePasswordPop={() => loginMgr.setOpenChgPasswd(false)}
        />
      )}
    </>
  );
};

export default Login;
