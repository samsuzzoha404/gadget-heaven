/* eslint-disable react-refresh/only-export-components */
import { useLoaderData, useParams } from "react-router-dom";
import Banner from "../components/Banner";
import Categories from "../components/categories";
import ProductCard from "../components/ProductCard";
import { createContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";

export const CategoriesProducts = createContext([]);

const Home = () => {
  const allData = useLoaderData();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(allData.slice(0, 6));
  }, [allData, setProducts]);

  // Categories Products
  const handleCategory = (categoryBy) => {
    if (categoryBy === "All Product") {
      setProducts(allData);
    } else {
      setProducts(
        allData.filter((products) => products.category == categoryBy)
      );
    }
  };

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home | Gadget Heaven</title>
        <link rel="canonical" href="/" />
      </Helmet>
      {/* Banner Section Code Start Here */}
      <Banner></Banner>
      {/* Category and Product section Code Start Here  */}
      <div className="w-11/12 mx-auto flex flex-col itme mt-48 mb-12 text-center pt-28">
        <h2 className="text-2xl lg:text-4xl mb-8">
          Explore Cutting-Edge Gadgets
        </h2>
        <div className="w-11/12 mx-auto lg:w-full flex flex-col lg:flex-row justify-center items-start gap-6">
          <CategoriesProducts.Provider value={[products, setProducts]}>
            <Categories handleCategory={handleCategory}></Categories>
            <ProductCard></ProductCard>
          </CategoriesProducts.Provider>
        </div>
      </div>
    </div>
  );
};

export default Home;