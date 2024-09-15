

const TestimonialCard = ({text, author,destination,image}) => {

  return (
    <div  className="bg-[#F9F2F8] rounded-[4px] py-[20px] flex flex-col  flex-shrink-0 px-[20px] break-words  w-full min-h-[450px] ">
        <p className="font-[400] text-[16px] leading-[28px] text-[#403A3F] mb-[70px]">{text} </p>
        <div className="flex items-center gap-[20px] container-end mt-auto ">
            <div>   
                <img src={image} alt={destination} />
            </div>
            <div>
                <h6 className="font-[500] text-[16px] leading-[19.2px] text-[#1C1819]">{author}</h6>
                <span className="font-[400] text-[12.8px] leading-[15.36px] text-[#403A3F]">{destination}</span>
            </div>
        </div>
    </div>
  )
}

export default TestimonialCard