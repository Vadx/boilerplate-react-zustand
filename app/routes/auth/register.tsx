import { RegisterForm } from "~/components/auth/register-form";
import type { Route } from "../../+types/root";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Register" },
    {
      name: "Register description",
      content: "Welcome to Register page!",
    },
  ];
}

const RegisterPage = () => {
  return <RegisterForm />;
};

export default RegisterPage;
