import CustomAccordion from "@/components/accordion-comp";
import helper from "../../../helper";
import "./style.css";
import { useState } from "react";
import axios from "axios";
import Modal from "@/components/modal";
import { AnimatePresence } from "framer-motion";

const GetInTouch = () => {
  const [formData, setFormData] = useState({
    travelOptions: "",
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState({
    isSubmitting: false,
    success: false,
    error: false,
    message: "",
  });

  const [openModal, setOpenModal] = useState(false);

  const arrOfRadioElement = [
    {
      label: "inquiry",
      value: "General Inquiry",
    },
    {
      label: "assistance",
      value: "Relocation Assistance",
    },
    {
      label: "abroad",
      value: "Study Abroad Packages",
    },
    {
      label: "tour",
      value: "Tour Packages",
    },
    {
      label: "travel",
      value: "Medical Travel Packages",
    },
    {
      label: "visa",
      value: "Visa Application Support",
    },
  ];
  const newErrors = {};

  const sendMail = async (e) => {
    e.preventDefault();
    const { travelOptions, name, email, phone, message } = formData;

    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.phone) newErrors.phone = 'Message is required';

    if (Object.keys(newErrors).length > 0) {
      console.log("yes")
      setStatus(prevState => {
        return {...prevState, error: true}
      }) // 
      return
    } else {
      // Proceed with form submission logic (e.g., API call)
      
    }    

    setStatus({
      isSubmitting: true,
      success: false,
      error: false,
      message: "",
    });

    try {
      const response = await axios.post("https://doryina-backend.onrender.com/sendMail", {
        travelOptions,
        name,
        email,
        phone,
        message,
      });
      console.log(response);
      setStatus({
        isSubmitting: false,
        success: true,
        error: false,
        message: response?.data?.response?.message,
      });
    } catch (err) {
      console.log(err);
      setStatus({
        isSubmitting: false,
        success: false,
        error: true,
        message: err.message,
      });
    } finally {
      setOpenModal(true);
    }

    setFormData({
      travelOptions: "",
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <section className="md:bg-[#FAF4F9] md:mb-[30px]">
      <div className="w-[95%] py-[20px] h-full flex flex-col gap-y-[40px] md:gap-y-[50px]  mx-auto  ">
        <div>
          <h2 className="heading-2 mb-3">Get in Touch with Us</h2>
          <p className="heading-2-paragragph px-[10px] text-center md:w-8/12 lg:w-6/12 md:mx-auto">
            Have questions or need more information? Fill out the form below,
            and our team will get back to you promptly.
          </p>
        </div>
        <div>
          <div className="input-container flex flex-col md:flex-row gap-[15px] mb-[20px] w-full ">
            <div className="h-[50px] relative rounded-[6px] overflow-hidden border-4 w-full">
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={formData.name}
                required
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="h-full pl-[70px] bg-[#300D2B33] focus:bg-[#300D2B33] w-full outline-none placeholder-[#28282BCC] placehoder-[20px]  "
              />
               {status.error && <span className="absolute top-[90px]" style={{ color: 'red' }}> Name is required  </span> }
               <span>name is req</span>
              <div className="absolute top-0 h-full left-[30px] flex items-center ">
                <img src={helper.InputProfile} alt="" />
              </div>
            </div>
            <div className="h-[50px] relative rounded-[6px] overflow-hidden w-full">
              <input
                type="text"
                name="email"
                value={formData.email}
                required
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                placeholder="Your Email Address"
                className="h-full pl-[70px] bg-[#300D2B33] focus:bg-[#300D2B33] w-full outline-none placeholder-[#28282BCC] placehoder-[20px]  "
              />
              {status.error && <span style={{ color: 'red' }}>{newErrors.email}</span>}
              <div className="absolute top-0 h-full left-[30px] flex items-center ">
                <img src={helper.InputMessage} alt="" />
              </div>
            </div>
            <div className="h-[50px] relative rounded-[6px] overflow-hidden w-full">
              <input
                type="number"
                name="phone"
                placeholder="Phone Number"
                required
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className="h-full pl-[70px] bg-[#300D2B33] focus:bg-[#300D2B33] w-full outline-none placeholder-[#28282BCC] placehoder-[20px]  "
              />
              {status.error && <span style={{ color: 'red' }}>{newErrors.phone}</span>}
              <div className="absolute top-0 h-full left-[30px] flex items-center ">
                <img src={helper.InputPhone} alt="" />
              </div>
            </div>
          </div>
          <CustomAccordion question="Select a topic">
            <div className="pl-[20px] md:pl-[30px]">
              {arrOfRadioElement.map((option, idx) => (
                <div key={idx} className="flex items-center gap-[7px] my-2">
                  <input
                    type="radio"
                    id={option.label}
                    checked={formData.travelOptions === option.value}
                    value={option.value}
                    name="travelOptions"
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        travelOptions: e.target.value,
                      })
                    }
                    className=""
                  />
                  <label
                    htmlFor={option.label}
                    className="md:text-[20px] font-600 text-white md:leading-[18px] "
                  >
                    {option.value}
                  </label>
                </div>
              ))}
            </div>
          </CustomAccordion>
          <textarea
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            className="w-full h-[184px] p-4  rounded-[6px] bg-[#300D2B33] text-[20px] text-[#28282BCC] leading-[25.2px] focus:outline-none focus:border-blue-500 placeholder-[#28282BCC] placehoder-[20px] mb-[20px] mt-[10px]"
            placeholder="Type a message"
          ></textarea>
          <button
            onClick={sendMail}
            className="btn-colored px-[25px] md:px-[40px]"
          >
            {status.isSubmitting === false ? "Send a message" : "Sending"}
          </button>
        </div>
      </div>
    
        <Modal closeModal={setOpenModal} openModal={openModal} error={status.error} message={status.message}/>
      
      
    </section>
  );
};

export default GetInTouch;
