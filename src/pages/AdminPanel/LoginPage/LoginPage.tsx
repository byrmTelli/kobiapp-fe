import { Controller, useForm } from "react-hook-form";
import Button from "../../../components/Buttons/Button/Button";
import ThemeToggleButton from "../../../components/Buttons/ThemeToggleButton/ThemeToggleButton";
import { Input } from "../../../components/Input";
import { LoginFormModel, LoginFormSchema } from "./types";
import { yupResolver } from "@hookform/resolvers/yup";
import { apiAuth } from "../../../store/api/enhanced/enhancedApiAuth";
import { toast } from "react-toastify";
import useSetSafeTimeout from "use-set-safe-timeout";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../../../store/slices/authSlice";

export default function LoginPage() {
  // States
  const setSafeTimeout = useSetSafeTimeout();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Queries
  const [login] = apiAuth.usePostApiAuthLoginMutation();
  // Form
  const form = useForm<LoginFormModel>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(LoginFormSchema),
  });
  // Handlers
  const handleLoginButtonClick = form.handleSubmit(() => {
    const f = form.getValues();

    login({ userLoginRequestModel: f })
      .unwrap()
      .then((res) => {
        if (res.statusCode == 200) {
          toast.success("Giriş başarılı");
          setSafeTimeout(() => {
            dispatch(setUser(res.data));
            navigate("/admin/management");
          }, 1000);
        } else {
          toast.error("Bir hata oluştu");
        }
      })
      .catch((err) => {
        toast.error(err.data.message);
      });
  });
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="min-w-[380px] py-10 border border-gray-400 shadow-lg flex flex-col gap-4 p-4 rounded-lg">
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold text-center">
            Yönetim Paneli <br />
            Kullanıcı Girişi
          </h1>
          <p className="text-sm text-gray-500 text-center">
            Lütfen giriş bilgilerinizi giriniz.
          </p>
        </div>
        <Controller
          control={form.control}
          name="email"
          render={({ field }) => (
            <Input
              label="Kullanıcı Adı"
              placeholder="Username"
              {...field}
              autoComplete="off"
            />
          )}
        />
        <Controller
          control={form.control}
          name="password"
          render={({ field }) => (
            <Input
              label="Şifre"
              placeholder="Password"
              type="password"
              {...field}
            />
          )}
        />
        <div className="grid grid-cols-2">
          <div className="flex items-center justify-end px-4">
            <ThemeToggleButton />
          </div>
          <Button
            onClick={handleLoginButtonClick}
            title="Login"
            varient="amber"
            className="font-bold rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
