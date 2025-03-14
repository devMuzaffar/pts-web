import { MdNavigateNext } from "react-icons/md";

export default function SlideNextButton(props) {
  return (
    <button
      className="swiper-prev border-[1px] text-white border-zinc-500 bg-zinc-500 rounded-full w-max p-1 absolute top-1/2 z-10 right-0 -mr-4 -mt-4"
      {...props}
    >
      <MdNavigateNext size={28} />
    </button>
  );
}
