import Image from "next/image";

const AcademicStats = () => {
  const title = "text-3xl text-dark font-bold";

  const dummyData = [
    {
      title: "Questions Correct",
      color: "text-blue-400",
      data: "0/0",
      img: "/dashboard/profile/stats/1.png",
    },
    {
      title: "Test Attempted",
      color: "text-green-400",
      data: "0/0",
      img: "/dashboard/profile/stats/2.png",
    },
    {
      title: "Avg. Time/Question",
      color: "text-red-400",
      data: "0sec",
      img: "/dashboard/profile/stats/3.png",
    },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-3">
      {/* List Items */}
      {dummyData.map((item, index) => (
        <div key={index} className="flex gap-4 p-3 bg-white rounded-xl">
          {/* Image */}
          <div className="p-4 bg-contentbg w-fit rounded-xl">
            <div className="w-[60px] h-[60px] relative">
              <Image src={item.img} fill sizes="60px" alt="" />
            </div>
          </div>

          {/* Details */}
          <div className="flex flex-col justify-between">
            <h2 className={`font-semibold text-sm ${item.color}`}>
              {item.title}
            </h2>
            <h1 className={title}>{item.data}</h1>
            <div className="w-full h-2 rounded-full bg-contentbg" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default AcademicStats;
