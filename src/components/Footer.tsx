export default function Footer() {
  return (
    <footer className="bg-white py-10 mb-14 mt-12 mx-4 md:mx-0 md:mr-32">
      <div className="container mx-auto flex flex-col  md:flex-row justify-between md:items-start">
        {/* Left Section */}
        <div>
          <h2 className="text-3xl font-normal mb-4">ZIDANE ESTATES LLC</h2>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-auto">
          <div className="mb-8 md:mb-0">
            <p className="">512-782-4534</p>    
            <p className="mb-10">info@zidaneestates.com</p>
            <p className="mb-14">11801 Domain Blvd, 3rd Floor, Austin, TX 78758</p>
          </div>
          <h3 className="text-4xl font-normal mb-12 mt-5">Stay Informed</h3>
          <p className="mb-4">Enter your email here *</p>

          {/* Form */}
          <div className="flex items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="border-b-2 border-blue-600 focus:outline-none w-full md:w-64 mr-4"
            />
            <button className="bg-blue-600 text-white px-4 py-2 rounded font-bold hover:bg-blue-700 transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
