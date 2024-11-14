import { useContext } from "react";
import { Link } from "react-router-dom";
import { NavBackground } from "../Layout/Layout";
import { CategoriesProducts } from "../Pages/Home";

const ProductCard = () => {
  const [color, setColor] = useContext(NavBackground);
  const [products, setProducts] = useContext(CategoriesProducts);

  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products?.map((product) => (
        <div
          key={product?.product_id}
          className="card bg-base-100 min-w-80 max-w-96  shadow-xl transition hover:scale-105"
        >
          <figure className="h-52 mx-5 mt-5 rounded-lg bg-base-200">
            <img
              src={product?.product_image}
              alt="Shoes"
              className="h-full p-4 rounded-xl"
            />
          </figure>
          <div className="card-body">
            <h3 className="card-title text-myDark1 text-xl font-semibold">
              {product.product_title}
            </h3>
            <p className="text-secondary font-medium text-left text-lg">
              Price ${product.price}
            </p>

            <div className="card-actions">
              <Link
                to={`/detail/${product?.product_id}`}
                onClick={() => setColor(false)}
                className="btn btn-outline border-primary text-primary hover:bg-primary rounded-full text-base font-medium"
              >
                View Details
              </Link>
            </div>
          </div>
        </div>
      ))}
      {products.length === 0 ? (
        <p className="text-3xl text-green-600 font-bold">No Data Found</p>
      ) : (
        ""
      )}
    </div>
  );
};

export default ProductCard;
