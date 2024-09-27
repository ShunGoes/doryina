import helper from "@/helper"

const Loading = () => {
  return (
    <div className="header h-screen">
        <div className="header-gradient w-full h-full flex f justify-center items-center">
            <img src={helper.Logo} alt="logo" className=""/>
        </div>
    </div>
  )
}

export default Loading