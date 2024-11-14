import { useState } from "react";
import Cart from "../components/Cart";
import Wishlist from "../components/Wishlist";
import { Helmet } from "react-helmet";

const Dashboard = () => {
  const [cart, setCart] = useState(true);
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Dashboard | Gadget Heaven</title>
        <link rel="canonical" href="/" />
      </Helmet>
      {/* Heading Section Code Start Here */}
      <div className="text-center bg-primary mt-[-24px] py-8 ">
        <h1 className="text-2xl lg:text-3xl text-white font-bold mb-6 ">
          Dashboard
        </h1>
        <p className=" text-white px-6 lg:px-72 text-center">
          Your centralized hub for managing content, tracking analytics, and
          accessing all essential tools to keep Gadget Heaven running smoothly.
          Dive in and take control!
        </p>
        <div className="mt-5">
          <button
            onClick={() => setCart(true)}
            className="btn bg-white rounded-full text-primary hover:bg-primary hover:text-white text-base font-medium px-6 mr-6"
          >
            Cart
          </button>
          <button
            onClick={() => setCart(false)}
            className="btn btn-outline border-white text-white rounded-full hover:bg-primary hover:border-white text-base font-medium px-6"
          >
            Wishlist
          </button>
        </div>
      </div>
      {/* Heading Section Code Start Here */}
      {cart ? <Cart></Cart> : <Wishlist></Wishlist>}
    </div>
  );
};

export default Dashboard;