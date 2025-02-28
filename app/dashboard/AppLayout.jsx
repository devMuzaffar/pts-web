"use client";
import { useState } from "react";
import Loading from "./loading";
import useDelay from "./utils/helpers/useDelay";
import MainComponent from "./components/layout/MainComponent";

const AppLayout = ({ children }) => {
  const [isFirstTime, setIsFirstTime] = useState(true);

  // Loading Timer
  useDelay(() => setIsFirstTime(false), 250);

  return (
    <div className="app flex justify-end relative bg-contentbg overflow-x-hidden">
      {isFirstTime ? (
        <Loading isMain={true} />
      ) : (
        <MainComponent>{children}</MainComponent>
      )}
    </div>
  );
};

export default AppLayout;
