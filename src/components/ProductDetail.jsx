import { useContext, useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaStar } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { AddToCart, AddToWishlist } from "../Layout/Layout";
import { Helmet } from "react-helmet";

const ProductDetail = () => {
  const { id } = useParams();
  const allData = useLoaderData();
  const [detail, setDetail] = useState({});
  const handleAddToCart = useContext(AddToCart);
  const handleAddToWishlist = useContext(AddToWishlist);

  const {
    product_image,
    product_title,
    price,
    availability,
    description,
    specification,
    rating,
  } = detail;

  useEffect(() => {
    const ClickedProduct = allData?.find(
      (product) => product.product_id === parseInt(id)
    );
    setDetail(ClickedProduct);
  }, [allData, id]);

  return (
    <div className="relative text-center bg-primary  pb-64 mt-[-24px] mb-72 pt-8">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Details | Gadget Heaven</title>
        <link rel="canonical" href="/" />
      </Helmet>
      <h1 className="text-2xl lg:text-3xl text-white font-bold w-full lg:w-4/6 mx-auto px-5 lg:px-0">
        Product Details
      </h1>
      <p className=" text-white pt-6 pb-10 lg:px-72 text-center">
        Explore the latest gadgets that will take your experience to the next
        level. From smart devices to the coolest accessories, we have it all!
      </p>
      <div className="absolute lg:inset-x-12 w-full lg:w-4/5 mx-auto flex flex-col lg:flex-row p-6 bg-white border-2 border-white rounded-2xl text-center gap-8 pb-10">
        <figure className="w-full md:w-[450px] bg-base-200 flex items-center rounded-xl ">
          <img className="w-full " src={product_image} alt="" />
        </figure>
        <div className="text-left text-secondary">
          <h3 className="text-2xl font-semibold text-myDark1 mb-3">
            {product_title}
          </h3>
          <p className="text-myDark2 text-xl font-medium mb-3">
            Price: ${price}
          </p>
          <span
            className={
              availability
                ? "text-myGreen bg-myGreenlight border-2 rounded-full px-3 py-1 border-myGreen"
                : "text-red-600 bg-red-200 border-2 rounded-full px-3 py-1 border-red-600"
            }
          >{`${availability ? "In Stock" : "Out of Stock"}`}</span>
          <p className="text-lg font-normal my-3">{description}</p>
          <div>
            <h4 className="text-lg font-bold text-myDark1 mb-3">
              Specification:
            </h4>
            <ul className="ml-6">
              {specification?.map((speci, index) => (
                <li key={index} className="list-decimal">
                  {speci}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <span className="font-bold text-lg text-myDark1 mt-4">Rating:</span>
            <div className="flex gap-6 py-2">
              <span className="flex text-xl text-yellow-500">
                <FaStar /> <FaStar /> <FaStar /> <FaStar />
                <FaRegStarHalfStroke />
              </span>
              <span>{rating}</span>
            </div>
          </div>
          <div className="flex justify-start items-center gap-x-6 mt-2">
            <button
              onClick={() => handleAddToCart(detail)}
              className="btn btn-active bg-primary text-white hover:text-primary flex items-center rounded-full"
            >
              Add To Card
              <AiOutlineShoppingCart className="text-2xl"></AiOutlineShoppingCart>
            </button>
            <button
              onClick={() => handleAddToWishlist(detail)}
              className="btn rounded-full hover:text-primary text-xl"
            >
              <i className="fa-regular fa-heart"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
