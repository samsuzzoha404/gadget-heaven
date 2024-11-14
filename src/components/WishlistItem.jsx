import { useContext } from "react";
import { AddToCart, WishlistToDeleteProduct } from "../Layout/Layout";
import { RxCross2 } from "react-icons/rx";

const WishlistItem = ({ product }) => {
  const { product_image, product_title, price, description } = product;
  const deletedWishlistProduct = useContext(WishlistToDeleteProduct);
  const handleAddToCart = useContext(AddToCart);
  return (
    <div>
      <div className="flex justify-between items-center border-2 p-5 my-6 rounded-xl shadow-lg">
        <div className="flex flex-col lg:flex-row items-center gap-6">
          <figure className="w-full lg:w-40 h-36 flex justify-center items-center">
            <img
              className="w-full h-full bg-base-300 rounded-xl"
              src={product_image}
              alt=""
            />
          </figure>
          <div className="flex flex-col justify-center gap-3">
            <h3 className="text-xl text-myDark1 font-bold">{product_title}</h3>
            <p className="text-base text-secondary font-normal">
              {description}
            </p>
            <p className="text-lg text-myDark2 font-semibold">
              Price: $ {price}
            </p>

            <button
              onClick={() => handleAddToCart(product)}
              className="lg:w-40 btn btn-active bg-primary text-white hover:text-primary flex items-center rounded-full"
            >
              Add To Card
            </button>
          </div>
        </div>
        <div
          onClick={() => deletedWishlistProduct(product.product_id)}
          className="text-right btn  text-red-700 text-2xl font-bold rounded-full"
        >
          <RxCross2></RxCross2>
        </div>
      </div>
    </div>
  );
};

export default WishlistItem;
