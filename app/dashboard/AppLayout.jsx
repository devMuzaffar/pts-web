"use client";
import Loading from "./loading";
import MainComponent from "./components/layout/MainComponent";
import useAutoLogin from "../hooks/useAutoLogin";

const AppLayout = ({ children }) => {
  const loading = useAutoLogin();

  return (
    <div className="app flex justify-end relative bg-contentbg overflow-x-hidden">
      {loading ? (
        <Loading isMain={true} />
      ) : (
        <MainComponent>{children}</MainComponent>
      )}
    </div>
  );
};

export default AppLayout;
