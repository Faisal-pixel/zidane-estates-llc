"use client";
import InViewWrapper from "@/app/utils/InViewWrapper";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useResponsive } from "@/hooks/useResponsive";
import { motion } from "framer-motion";
import { useState } from "react";
import Modal from "./Modal";
import CustomPaymentForm from "./Payment";
import WrapperContainer from "./WrapperContainer";
const differentTypes = [
  {
    id: 1,
    title: "Buyer Consultation",
    time: "1 hr",
    price: 50,
  },
  {
    id: 2,
    title: "Rental Property Tour",
    time: "1 hr 30 min",
    price: 50,
  },
  {
    id: 3,
    title: "New Construction Consult",
    time: "2 hr",
    price: 100,
  },
  {
    id: 4,
    title: "Property Consultation",
    time: "1 hr",
    price: 75,
  },
];

const ScheduleAConsolation = () => {
  const { isXs } = useResponsive();

  const [isOpen, setIsOpen] = useState(false);
  const [priceToPay, setPriceToPay] = useState<number>(0);

  const closeModal = () => setIsOpen(false);

  const setBooking = (price: number) => {
    setPriceToPay(price);
    setIsOpen(true);
  };

  return (
    <motion.section id="latest-news-and-insight" className="md:my-24">
      <WrapperContainer>
        <h2 className="text-[32px] leading-9 md:leading-normal md:text-[64px]  my-7 md:my-10 font-syne">
          SCHEDULE A CONSULATION
        </h2>

        <div>
          {differentTypes.map((type, index) => (
            <div key={index}>
              <div className="hidden font-wix-display py-8 justify-between border-t last-of-type:border-b border-[#170DF2] sm:flex">
                <div className="flex justify-between basis-[calc(60%-16px)] flex-1 text-2xl">
                  <h1 className="font-light text-2xl tracking-wide hover:text-gray-500 text-[#414141] transition-all duration-300 ease-in-out">
                    {type.title}
                  </h1>

                  <p className="font-normal text-[16px] leading-[32px] basis-[27%]">
                    ${type.price}
                  </p>
                </div>

                <button
                  onClick={() => setBooking(type.price)}
                  className="inline-block bg-[#170DF2] hover:text-[#170DF2] hover:bg-pink-200 cursor-pointer transition-all duration-300 ease-in-out text-white py-2 w-auto px-7"
                >
                  Book Now
                </button>
              </div>

              {isXs && (
                <Card className="sm:hidden mb-4 rounded-none border border-[#170DF2]">
                  <CardHeader>
                    <CardTitle>
                      <h1 className="font-light text-2xl tracking-wide hover:text-gray-500 text-[#414141] transition-all duration-300 ease-in-out">
                        {type.title}
                      </h1>

                      <div className="mt-5 border-t border-gray-400" />
                    </CardTitle>
                    <CardDescription>
                      <p className="font-normal text-lg mt-4 mb-2">
                        1hr 30mins
                      </p>
                      <p className="font-normal text-lg">${type.price}</p>
                    </CardDescription>
                  </CardHeader>

                  <CardFooter className="flex items-center justify-center">
                    <button
                      onClick={() => setBooking(type.price)}
                      className="w-full font-questrial inline-block bg-[#170DF2] hover:text-[#170DF2] hover:bg-pink-200 cursor-pointer transition-all duration-300 ease-in-out text-white py-3 text-lg px-7"
                    >
                      Book Now
                    </button>
                  </CardFooter>
                </Card>
              )}
            </div>
          ))}
        </div>
      </WrapperContainer>

      <Modal title="Consultation Booking" isOpen={isOpen} onClose={closeModal}>
        <CustomPaymentForm amount={priceToPay} closeModal={closeModal} />
        <InViewWrapper
          className="border-animate border-top py-5 mt-10"
          style={{ "--border-color": "#5e5e5e" }}
        >
          <div className=" flex justify-end">
            <button
              onClick={closeModal}
              className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition-colors mr-2"
            >
              Cancel
            </button>
          </div>
        </InViewWrapper>
      </Modal>
    </motion.section>
  );
};

export default ScheduleAConsolation;
