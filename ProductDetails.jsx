import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchSingleProduct } from "../services/api";
import Loader from "../components/Loader";

const ProductDetails = () => {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const data = await fetchSingleProduct(id);
        setProduct(data);
      } catch (err) {
        setError("Failed to load product");
      } finally {
        setLoading(false);
      }
    };

    getProduct();
  }, [id]);

  if (loading) return <Loader />;
  if (error) return <div className="p-10 text-red-500">{error}</div>;

  return (
    <div className="max-w-6xl mx-auto p-10 grid md:grid-cols-2 gap-12">
      
      <div className="bg-gray-100 p-10 flex justify-center rounded-lg">
        <img
          src={product.image}
          alt={product.title}
          className="h-80 object-contain"
        />
      </div>

      <div>
        <h1 className="text-3xl font-bold mb-6">
          {product.title}
        </h1>

        <p className="text-gray-600 mb-6">
          {product.description}
        </p>

        <p className="text-2xl text-blue-600 font-bold mb-6">
          ${product.price}
        </p>
      </div>

    </div>
  );
};

export default ProductDetails;
