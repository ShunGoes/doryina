import helper from "@/helper";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Modal = ({ closeModal, openModal, error, message }) => {
  const parentModal = {
    hidden: {
      opacity: 0,
      x: 100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: { delay: 0.5 , when: "beforeChildren", staggerChildren: 0.3},
    },
    exit: {
      opacity: 0,
      scale: 0,
      transition: { duration: 0.3 },
    },
  };
  const navigate = useNavigate()

  const goHome = () => {
    navigate("/")
  }
  return (
    <AnimatePresence>
      {openModal && (
        <motion.div
          variants={parentModal}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="fixed inset-0 backdrop-blur-[2px] flex justify-center items-center h-screen"
        >
          <div className="size-[70%] bg-white rounded-[10px] relative">
            <div
              onClick={() => closeModal(false)}
              className="absolute top-[5px] right-[5px] size-[30px]  flex justify-center items-center cursor-pointer"
            >
              <img src={helper.Cancel} alt="close modal" />
            </div>
            <motion.div
            initial={{opacity: 0, y: -100}}
            animate={{opacity: 1, y: 0}}
            transition={{type: "spring", bounce: 0.5, duration: 1}}
            className="w-full h-full flex justify-center items-center flex-col gap-[10px]">
                <h1 className="font-[700] text-[30px] ">{error? "Failed": "Success"}</h1>
                <h2>{error? "Please try again" : message}</h2>
                <button className="btn-colored px-[20px] mt-[50px]" onClick={goHome}>Go Home</button>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
