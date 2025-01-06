
const About = () => {

  return (
    <div className="flex justify-center font-work-sans px-2 sm:px-8 md:px-16">

        {/* Left Text Block */}
        <div className="flex flex-[2] flex-col justify-center gap-5 pt-10 px-2">

            {/* Title with Color */}
            <div className="text-5xl font-semibold pl-2 md:pl-10">
                <h2>Why Should you choose</h2>
                <h2 className="text-primary-blue">Prestigious</h2>
            </div>
            
            {/* Paragraph */}
            <div className="text-slate-700 leading-7 md:text-lg md:leading-10">
                <p>We have been working since 2020, as an IT services provider company, we are developing software applications and mobile apps, designing websites, branding businesses for clients all over the world.</p>
            </div>

        </div>


        {/* Right Image Block */}
        <div className="hidden flex-[1] items-center justify-center md:pt-7 sm:flex">
            <img className="object-contain h-96 w-96" src="./assets/question.png" alt="" />
        </div>

    </div>
  )
}

export default About