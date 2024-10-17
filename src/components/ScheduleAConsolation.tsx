"use client";
import { fadeInAnimation } from "@/app/animation";
import { motion } from "framer-motion";
import DifferentTypes from "./schedule_consulation/differentTypes";
import WrapperContainer from "./WrapperContainer";

const differentTypes = [
  {
    type: "Buyer Consulation",
    to: "",
    price: "$50",
  },
  {
    type: "Rental Property Tour",
    to: "",
    price: "$50",
  },
  {
    type: "New Construction Consult",
    to: "",
    price: "$100",
  },
  {
    type: "Property Consultation",
    to: "",
    price: "$70",
  },
];

const ScheduleAConsolation = () => {
  const { inView, initial, transition } = fadeInAnimation;

  return (
    <motion.section
      id="latest-news-and-insight"
      initial={initial}
      whileInView={inView}
      transition={transition}
      className="md:my-24"
    >
      <WrapperContainer>
        <h2 className="text-[32px] leading-9 md:leading-normal md:text-[64px]  my-7 md:my-10 font-syne">
          SCHEDULE A CONSULATION
        </h2>

        <div>
          {differentTypes.map((type, index) => (
            <DifferentTypes key={index} {...type} />
          ))}
        </div>
      </WrapperContainer>
    </motion.section>
  );
};

export default ScheduleAConsolation;
