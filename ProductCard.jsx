import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-xl transition duration-300 overflow-hidden flex flex-col">

      
      <div className="bg-gray-100 p-6 flex justify-center">

        <img
          src={product.image}
          alt={product.title}
          className="h-40 object-contain"
        />
      </div>

     <div className="p-4 flex flex-col grow">

        <h2 className="font-semibold text-lg mb-2">
          {product.title}
        </h2>

        <p className="text-blue-600 font-bold text-xl mb-4">

          ${product.price}
        </p>

        <div className="mt-auto flex flex-col gap-2">
          
          <button
            onClick={() => addToCart(product)}
            className="bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Add to Cart
          </button>

          <Link
            to={`/product/${product.id}`}
            className="text-center border border-gray-300 py-2 rounded-lg hover:bg-gray-100 transition"
          >
            View Details
          </Link>

        </div>
      </div>
    </div>
  );
};

export default ProductCard;
