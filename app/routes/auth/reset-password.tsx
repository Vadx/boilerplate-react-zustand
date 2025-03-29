import { ResetPasswordForm } from "~/components/auth/reset-password-form";
import type { Route } from "../../+types/root";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Reset Password" },
    {
      name: "Reset Password description",
      content: "Welcome to Reset Password page!",
    },
  ];
}

const ResetPasswordPage = () => {
  return <ResetPasswordForm />;
};

export default ResetPasswordPage;
