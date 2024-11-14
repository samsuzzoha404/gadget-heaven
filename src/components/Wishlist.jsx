import { useContext } from "react";
import { WishlistDataStore } from "../Layout/Layout";
import WishlistItem from "./WishlistItem";

const Wishlist = () => {
  const [wishlist, setWishlist] = useContext(WishlistDataStore);
  return (
    <div className="w-11/12 lg:w-5/6 mx-auto my-12">
      <div>
        <h3 className="text-xl font-bold text-myDark1">Wishlist</h3>
      </div>
      {/* Product Single Card */}
      <div>
        {wishlist?.map((product) => (
          <WishlistItem
            key={product.product_id}
            product={product}
          ></WishlistItem>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
