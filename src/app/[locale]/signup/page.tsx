import AuthLayout from "@/components/auth/AuthLayout";
import SignupForm from "@/components/auth/SignupForm";

export default function Signup() {
  return (
    <AuthLayout className="py-16">
      <SignupForm />
    </AuthLayout>
  );
}
