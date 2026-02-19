import { NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { totalQuantity } = useCart();
  const { user, logout } = useAuth();

  return (
    <nav className="bg-white shadow-md px-8 py-4 flex justify-between items-center sticky top-0 z-50">
      
      <h1 className="text-2xl font-bold text-black">
        SmartCart
      </h1>

      <div className="flex gap-6 items-center text-lg">
        
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-blue-600 font-semibold" : "text-gray-600 hover:text-blue-600"
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/products"
          className={({ isActive }) =>
            isActive ? "text-blue-600 font-semibold" : "text-gray-600 hover:text-blue-600"
          }
        >
          Products
        </NavLink>

        <NavLink
          to="/cart"
          className={({ isActive }) =>
            isActive ? "text-blue-600 font-semibold" : "text-gray-600 hover:text-blue-600"
          }
        >
          Cart ({totalQuantity})
        </NavLink>

        {user ? (
          <button
            onClick={logout}
            className="bg-black text-white px-4 py-1 rounded hover:bg-gray-800"
          >
            Logout
          </button>
        ) : (
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive ? "text-blue-600 font-semibold" : "text-gray-600 hover:text-blue-600"
            }
          >
            Login
          </NavLink>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
