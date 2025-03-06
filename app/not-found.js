import { MdWarningAmber } from "react-icons/md";

const ErrorPage = () => {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center gap-8">
      <MdWarningAmber className="text-gray-800 text-9xl" />
      <p className="text-lg md:text-2xl">Error 404 - Page Not Found</p>
    </div>
  );
};

export default ErrorPage;
