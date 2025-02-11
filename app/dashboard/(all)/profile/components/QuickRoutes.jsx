"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";

const QuickRoutes = () => {
  const routes = [
    { title: "Analytics", icon: "/dashboard/profile/routes/1.png" },
    { title: "Last Result", icon: "/dashboard/profile/routes/2.png" },
    { title: "Bookmarks", icon: "/dashboard/profile/routes/3.png" },
    {
      title: "Talk to Counselor",
      icon: "/dashboard/profile/routes/4.png",
      phone: "+92 123 4567891",
    },
  ];

  const router = useRouter();

  const handleRouting = (index) => {
      switch(index){
        case 0: router.push('/dashboard/analytics'); break;
        case 2: router.push('/dashboard/bookmarks'); break;
        default: break;
      }
  }

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
      {/*  */}
      {routes.map((item, index) => (
        <div
          key={index}
          className="bg-white cursor-pointer rounded-xl flex flex-col justify-start items-center py-16"
          onClick={() => handleRouting(index)}
        >
          <div className="flex flex-col items-center justify-center gap-2">
            <Image src={item.icon} width={96} height={96} alt="" />
            <p className="text-dark text-2xl font-bold">{item.title}</p>
            {item.phone && (
              <p className="text-sm text-gray-500">{item.phone}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default QuickRoutes;
