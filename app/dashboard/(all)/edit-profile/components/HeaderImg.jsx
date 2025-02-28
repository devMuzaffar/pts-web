import Image from "next/image"

const HeaderImg = () => {
  return (
    <div className="w-full h-60 relative md:h-80">
        <Image priority={true} className="object-cover" src="/dashboard/edit-profile/bg.jpg" fill={true} alt=""/>
    </div>
  )
}

export default HeaderImg