/* eslint-disable react/prop-types */
// import { useSelector } from "react-redux";
import Item from "../componenets/Item";
import "../styles/ProductList.css";
import { Outlet, useLoaderData } from "react-router-dom";
import axios from "axios"
function ProductList() {
  const items = useLoaderData();
  // console.log(items);
  // const items = useSelector((state) => state.items);
  // console.log(items);
  return (
    <div className="Container-items">
      <div className="listContainer">
        {items.map((item) => (
          <Item key={item._id} item={item} />
        ))}
      </div>
      <Outlet />
    </div>
  );
}

export default ProductList;

export const FetchData = async () => {
  try {

    const response = await fetch("http://localhost:8000/api/products");
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json(); // Parse response body as JSON
    console.log(data);
    return data.products;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // Rethrow the error for handling in the caller
  }
};
