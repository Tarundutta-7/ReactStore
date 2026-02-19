import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gray-100">
        {children}
      </div>
    </div>
  );
};

export default Layout;
