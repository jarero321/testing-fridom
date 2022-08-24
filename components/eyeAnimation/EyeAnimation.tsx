import Lottie from "react-lottie";
import animationData from "../../lottie/eye.json";
import { FC } from "react";
import { motion } from "framer-motion";
const EyeAnimation: FC = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <motion.div
    exit={{opacity:[100,0]}}
    className="w-screen h-screen absolute top-0 left-0 bg-black flex flex-col items-center justify-center">
      <Lottie options={defaultOptions} width={300} height={300} />
      <p className="text-white" > Muro de Comentarios </p>
    </motion.div>
  );
};
export default EyeAnimation;
