import { useEffect, useState } from "react";

const Categories = ({ handleCategory }) => {
  const [categorys, setCategory] = useState([]);
  useEffect(() => {
    fetch("categories.json")
      .then((response) => response.json())
      .then((data) => setCategory(data));
  }, []);

  return (
    <div className="bg-white w-full lg:w-52 grid grid-cols-2 lg:grid-cols-1 gap-6 p-4 rounded-xl shadow-xl">
      {categorys?.map((category) => (
        <button
          onClick={() => handleCategory(category.category)}
          key={category.id}
          className="btn  text-myDark2 bg-base-200 hover:bg-primary focus:bg-primary focus:text-white p-2 rounded-full"
        >
          {category.category}
        </button>
      ))}
    </div>
  );
};

export default Categories;
