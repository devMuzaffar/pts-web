"use client";
import bottomLinks from "@/app/dashboard/(all)/list/bottomLinks";
import QuickLinkButton from "../shared/QuickLinkButton";
import { useRouter } from "next/navigation";

const BottomLinks = () => {
  const router = useRouter();

  const handleRoute = (route) => {
    const routeText = route.toLowerCase();
    if (routeText.includes("notes")) {
      router.push("/dashboard/personal-notes");
    }
  };

  return (
    <div className="md:col-span-2 grid sm:grid-cols-3 gap-4">
      {bottomLinks.map(({ icon, text }, index) => (
        <QuickLinkButton
          key={index}
          icon={icon}
          iconClass="!w-10"
          text={text}
          className="border-2 border-zinc-300"
          textClass="text-sm md:text-base"
          onClick={() => handleRoute(text)}
        />
      ))}
    </div>
  );
};

export default BottomLinks;
