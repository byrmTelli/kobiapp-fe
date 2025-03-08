import Button from "../../../components/Buttons/Button/Button";
import ThemeToggleButton from "../../../components/Buttons/ThemeToggleButton/ThemeToggleButton";
import { Input } from "../../../components/Input";

export default function LoginPage() {
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
        <Input label="Kullanıcı Adı" placeholder="Username" />
        <Input label="Şifre" placeholder="Password" type="password" />
        <div className="grid grid-cols-2">
          <div className="flex items-center justify-end px-4">
            <ThemeToggleButton />
          </div>
          <Button
            title="Login"
            varient="amber"
            className="font-bold rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
