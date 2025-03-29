import { ForgotPasswordForm } from "~/components/auth/forgot-password-form";
import type { Route } from "../../+types/root";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Forgot Password" },
    {
      name: "Forgot Password description",
      content: "Welcome to Forgot Password page!",
    },
  ];
}

const ForgotPasswordPage = () => {
  return <ForgotPasswordForm />;
};

export default ForgotPasswordPage;
