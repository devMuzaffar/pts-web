import Link from "next/link";
import SiteLayout from "../SiteLayout";

const SignIn = () => {
  return (
    <SiteLayout>
      <div className="bg-[#F1FCFF] px-2 sm:px-8 md:px-16 flex flex-col justify-evenly items-center h-[calc(100vh-12vh)] sm:h-[calc(100vh-18vh)]">
      <div className="flex flex-col text-center gap-2">
        <h2 className="text-4xl font-medium text-primary-blue">Welcome</h2>
        <p className="text-xl">Sign in to your account!</p>
      </div>

      {/* Login Screen */}
      <form className="flex flex-col gap-3 w-full sm:w-96">
        <input
          className="p-2 border-2 outline-none rounded-md px-5"
          type="text"
          placeholder="Username"
        />
        <input
          className="p-2 border-2 outline-none rounded-md px-5"
          type="password"
          placeholder="Password"
        />
        <button className="bg-primary-blue text-lg font-medium text-white rounded-md py-2">
          Sign In
        </button>
        <div className="flex flex-col text-sm text-center gap-2">
          <Link href="/" className="text-primary-blue font-medium w-full">
            Forgot Password?
          </Link>
          <Link href="/signup" className="text-primary-blue font-medium w-full">
            Create new account
          </Link>
        </div>
      </form>
    </div>
    </SiteLayout>
  );
};

// TODO: Sign Up Screen
// TODO: Login with google facebook X icon

export default SignIn;
