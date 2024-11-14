import React, { PureComponent, useContext } from "react";
import { useLoaderData } from "react-router-dom";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  PieChart,
  Pie,
  Tooltip,
  CartesianGrid,
  Legend,
  ComposedChart,
  Area,
  ResponsiveContainer,
} from "recharts";
import { CartDataStore, TotalProductPrice } from "../Layout/Layout";
import { BiFullscreen } from "react-icons/bi";
import { Helmet } from "react-helmet";

const LineCharts = () => {
  const allProducts = useLoaderData();
  const [totalPrice, setTotalPrice] = useContext(TotalProductPrice);
  const [cart, setCart] = useContext(CartDataStore);

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Statistics | Gadget Heaven</title>
        <link rel="canonical" href="/" />
      </Helmet>
      <div className="text-center bg-primary mt-[-24px] py-8 mb-10">
        <h1 className="text-2xl lg:text-3xl text-white font-bold mb-6 ">
          Statistics
        </h1>
        <p className=" text-white px-6 lg:px-72 text-center">
          Explore the latest insights and data about our platform performance,
          user engagement, and overall impact. Keep track of our growth and see
          how Gadget Heaven is evolving every day!
        </p>
      </div>
      <div className="w-full lg:w-5/6 mx-auto bg-white rounded-xl">
        <ResponsiveContainer width="100%" height={400}>
          <ComposedChart
            data={allProducts}
            margin={{
              top: 20,
              right: 80,
              bottom: 20,
              left: 20,
            }}
          >
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis
              dataKey="product_title"
              label={{
                value: "Product Name",

                offset: 0,
                style: {
                  fontSize: "10px",
                },
              }}
              tick={{ fontSize: 10 }}
              angle={-10}
              textAnchor="end"
              scale="band"
              dy={10}
            />
            <YAxis
              className=""
              label={{ value: "Price", angle: -90, position: "insideLeft" }}
            />
            <Tooltip />
            <Legend />
            <Area
              type="monotone"
              dataKey="amt"
              fill="#8884d8"
              stroke="#8884d8"
            />
            <Bar dataKey="price" barSize={25} fill="#413ea0" />
            <Area type="monotone" dataKey="price" stroke="#ff7300" />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default LineCharts;