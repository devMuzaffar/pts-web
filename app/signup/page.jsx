"use client";

import { useRouter } from "next/navigation";
import SiteLayout from "../SiteLayout";


const Signup = () => {

  const router = useRouter();
  const goBack = (e) => {
    e.preventDefault();
    router.push('/signin');
  };

  return (
    <SiteLayout>
      <div className="bg-[#F1FCFF] px-2 sm:px-8 md:px-16 flex flex-col justify-evenly items-center h-[calc(100vh-12vh)] sm:h-[calc(100vh-18vh)]">
      {/* Register Screen */}
      <form className="flex flex-col gap-3 w-full sm:w-96">
        <input
          className="p-2 border-2 outline-none rounded-md px-5"
          type="email"
          placeholder="Email"
        />
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
          Create New Account
        </button>
        <button
          className="bg-red-400 text-lg font-medium text-white rounded-md py-2"
          onClick={(e) => goBack(e)}
        >
          Go Back
        </button>
      </form>
    </div>
    </SiteLayout>
  );
};

export default Signup;
