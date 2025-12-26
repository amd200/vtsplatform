
import SignUpForm from "@/features/auth/componetns/SignUpForm";

function Page() {
  return (
    <>
      <div className="text-center">
        <h2 className="text-primary text-3xl mb-2">تسجيل طالب</h2>
        <p className="text-xs">انشئ حسابك الان</p>
      </div>
      <SignUpForm />
    </>
  );
}

export default Page;
