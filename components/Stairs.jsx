import { motion } from "framer-motion";

//variants

const stairAnimation = {
  initial: {
    top: "0%",
  },
  animate: {
    top: "100%",
  },
  exit: {
    top: ["100%", "0%"],
  },
};

//calculate the reverse index fot staggred delay
const reverseIndex = (index) => {
  const totalSteps = 0;
};

const Stairs = () => {
  return <div>Stairs</div>;
};

export default Stairs;
