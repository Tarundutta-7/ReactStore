import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen">

      {/* Hero Section */}
      <section className="bg-gray-100 py-20 px-10 text-center">
        <h1 className="text-5xl font-bold mb-6">
          Welcome to SmartCart
        </h1>

        <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8">
          Discover premium products at unbeatable prices. 
          Shop smarter, faster, and better with SmartCart.
        </p>

         <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8">
          This website is designed by me ( Tarun Dutta). I used react, javascript, Tailwind CSS.
        </p>

        <div className="flex justify-center gap-6">
          <Link
            to="/products"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Shop Now
          </Link>

          <Link
            to="/cart"
            className="border border-gray-400 px-6 py-3 rounded-lg hover:bg-gray-200 transition"
          >
            View Cart
          </Link>
        </div>
      </section>


      {/* Features Section */}
      <section className="py-16 px-10 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose Us?
        </h2>

        <div className="grid md:grid-cols-3 gap-8 text-center">

          <div className="p-6 shadow-sm rounded-lg bg-white">
            <h3 className="text-xl font-semibold mb-4">
              Fast Delivery
            </h3>
            <p className="text-gray-600">
              Quick and reliable shipping across the country.
            </p>
          </div>

          <div className="p-6 shadow-sm rounded-lg bg-white">
            <h3 className="text-xl font-semibold mb-4">
              Secure Payments
            </h3>
            <p className="text-gray-600">
              Your transactions are safe and encrypted.
            </p>
          </div>

          <div className="p-6 shadow-sm rounded-lg bg-white">
            <h3 className="text-xl font-semibold mb-4">
              Premium Quality
            </h3>
            <p className="text-gray-600">
              Only top-rated and trusted products.
            </p>
          </div>

         

        </div>
      </section>

    </div>
  );
};

export default Home;
