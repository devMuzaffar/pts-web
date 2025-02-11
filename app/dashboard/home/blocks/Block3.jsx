"use client";
import Title from "../shared/Title";
import ViewAllButton from "../shared/ViewAllButton";
import blockStyle from "./style/blockStyle";
import { useRouter } from "next/navigation";

const Block3 = () => {
  const router = useRouter();

  const handleClick = () => router.push('/dashboard/bookmarks');

  return (
    <div className={blockStyle}>
      {/* Title */}
      <div className="flex justify-between">
        <Title>Bookmarks</Title>
        <ViewAllButton onClick={handleClick} hasOutline={true} />
      </div>

      {/* Content */}
      <div className="flex justify-between flex-col gap-8 md:flex-row">
        <div>
          <p className="text-xs text-slate-500">No Bookmarks Available</p>
        </div>
      </div>
    </div>
  );
};

export default Block3;
