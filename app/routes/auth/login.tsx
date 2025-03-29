import { LoginForm } from "~/components/auth/login-form";
import type { Route } from "../../+types/root";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Login" },
    {
      name: "Login description",
      content: "Welcome to Login page!",
    },
  ];
}

const LoginPage = () => {
  return <LoginForm />;
};

export default LoginPage;
