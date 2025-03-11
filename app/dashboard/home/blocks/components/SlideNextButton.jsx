import { MdNavigateBefore } from "react-icons/md";

export default function SlidePrevButton(props) {
  return (
    <button
      className="swiper-next rounded-full w-max p-1 absolute top-1/2 text-white border-[1px] border-zinc-500 bg-zinc-500 z-10 -ml-4 -mt-4"
      {...props}
    >
      <MdNavigateBefore size={28} />
    </button>
  );
}
