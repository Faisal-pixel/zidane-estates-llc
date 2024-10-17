"use client";
import WrapperContainer from "@/components/WrapperContainer";
import BuyerConsultation from "@/images/buyerConsultation.jpg";
import NewConstruction from "@/images/newConstructionConsult.jpg";
import PropertyConsultation from "@/images/propertyConsultation.jpg";
import RentalPropety from "@/images/rentalPropertyTour.jpg";
import Image from "next/image";

export default function BookOnline() {
  const services = [
    {
      id: 1,
      title: "Buyer Consultation",
      time: "1 hr",
      price: "$50",
      image: BuyerConsultation,
    },
    {
      id: 2,
      title: "Rental Property Tour",
      time: "1 hr 30 min",
      price: "$50",
      image: RentalPropety,
    },
    {
      id: 3,
      title: "New Construction Consult",
      time: "2 hr",
      price: "$100",
      image: NewConstruction,
    },
    {
      id: 4,
      title: "Property Consultation",
      time: "1 hr",
      price: "$75",
      image: PropertyConsultation,
    },
  ];

  return (
    <>
      <head>
        <title>Book Online | Zidane Estates LLC</title>
      </head>

      <WrapperContainer>
        <div className="mt-5 md:mt-24 md:w-[85%] lg:w-[62%] mx-auto md:pb-20 pb-10 animate-fadeIn">
          <h1 className="text-3xl text-center font-syne mb-10">Our Services</h1>
          <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white md:min-h-[28.96rem] border flex flex-col justify-between pb-8 border-[rgb(0,0,0,0.2)] overflow-hidden"
              >
                <div className="relative group cursor-pointer">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={500}
                    height={300}
                    className="w-full object-cover "
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>

                <div className="p-8">
                  <h2 className="text-xl font-semibold mb-3">
                    {service.title}
                  </h2>
                  <div className="border-b-[0.8px] border-[rgb(0,0,0,0.2)] my-6" />
                  <p className="text-gray-600 font-bold">{service.time}</p>
                  <p className="text-gray-600 font-bold mb-4">
                    {service.price}
                  </p>
                </div>

                <button className="bg-[rgb(23,13,242)] mt-5 mx-8 text-white py-2 px-4 hover:bg-blue-700 transition duration-300 w-fit">
                  Book Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </WrapperContainer>
    </>
  );
}
