import Image from 'next/image';
import BuyerConsultation from "@/images/buyerConsultation.jpg";
import RentalPropety from "@/images/rentalPropertyTour.jpg";
import NewConstruction from "@/images/newConstructionConsult.jpg";
import PropertyConsultation from "@/images/propertyConsultation.jpg";

export default function BookOnline() {
  const services = [
    {
      id: 1,
      title: 'Buyer Consultation',
      time: '1 hr',
      price: '$50',
      image: BuyerConsultation,
    },
    {
      id: 2,
      title: 'Rental Property Tour',
      time: '1 hr 30 min',
      price: '$50',
      image: RentalPropety,
    },
    {
      id: 3,
      title: 'New Construction Consult',
      time: '2 hr',
      price: '$100',
      image: NewConstruction,
    },
    {
      id: 4,
      title: 'Property Consultation',
      time: '1 hr',
      price: '$75',
      image: PropertyConsultation,
    },
  ];

  return (
    <div className="w-[80%] mx-auto md:w-full md:mx-[278px]">
      <div className="container mx-auto py-12">
        <h1 className="text-3xl text-center mb-10">Our Services</h1>

        <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-white border border-gray-400 shadow-md overflow-hidden">
              <Image
                src={service.image}
                alt={service.title}
                width={500}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
                <p className="text-gray-600">{service.time}</p>
                <p className="text-gray-600 font-bold mb-4">{service.price}</p>
                <button className="bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
