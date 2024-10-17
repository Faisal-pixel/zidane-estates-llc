import { easeOut } from "framer-motion";

export const fadeInAnimation = {
  initial: {
    opacity: 0,
  },
  inView: {
    opacity: 1,
  },
  transition: {
    duration: 2.5,
    easeOut,
  },
};
