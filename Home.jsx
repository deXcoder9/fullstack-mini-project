import { useState } from "react";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const Home = () => {
  const axiosPublic = useAxiosPublic();

  const [Brand, setBrandName] = useState("");
  const [Category, setCategory] = useState("");
  const [PriceRange, setPriceRange] = useState("");
  const [Sorting, setSorting] = useState("");
  const [SearchName, setSearchedName] = useState("");

  const categories = [
    "TVs",
    "Wearables",
    "Cameras",
    "Gaming",
    "Accessories",
    "Tablets",
    "Laptops",
    "Phones",
  ];

  const handleBrandNames = (e) => {
    setBrandName(e.target.value);
  };

  const handleCategoryNames = (e) => {
    setCategory(e.target.value);
    // console.log(e.target.value)
  };

  const handlePriceRange = (e) => {
    setPriceRange(e.target.value);
  };

  const handleSorting = (e) => {
    console.log(e.target.value);
    setSorting(e.target.value);
  };

  const handleSearchFeature = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.productName.value.toLowerCase();
    setSearchedName(name);
  };

  // useEffect(() => {
  //   console.log("selected", selectedValue);
  // }, [selectedValue]);

  const { data: products = [], isLoading } = useQuery({
    queryKey: ["products", Brand, Category, PriceRange, Sorting, SearchName],
    
    queryFn: async () => {
      const { data } = await axiosPublic.get(
        `/products?search=${SearchName}&brand=${Brand}&category=${Category}&priceRange=${PriceRange}&sort=${Sorting}`
       
      );

      return data;
    },
  });
  // console.log(products)

  return (
    <div>
      <div
        //   className="flex place-items-center mx-auto lg:justify-end  lg:mr-20"
        className=" lg:w-[300px]  grid place-items-center mx-auto relative bottom-12"
      >
        <form className="relative" onSubmit={handleSearchFeature}>
          <input
            type="text"
            className="w-32 h-8  lg:w-full border lg:h-11 p-4 pr-8 rounded-md border-[#7480FF] bg-transparent "
            placeholder="Type..."
            name="productName"
          />
          <button
            type="submit"
            className="btn btn-primary btn-sm absolute lg:top-2 "
          >
            search
          </button>
        </form>
      </div>

      {/* Dropdowns */}
      <div className="grid place-items-center md:grid-cols-4 grid-cols-1 space-y-2 ">
        <select
          className="select select-primary w-full max-w-xs"
          // value={selectedValue}
          onChange={handleBrandNames}
        >
          <option>Select Brand Name</option>
          <option value="Apple">Apple</option>
          <option value="Dell">Dell</option>
          <option value="Samsung">Samsung</option>
          <option value="Sony">Sony</option>
        </select>

        <select
          className="select select-primary w-full max-w-xs"
          onChange={handleCategoryNames}
        >
          <option>Select Category</option>
          {categories?.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
        <select
          className="select select-primary w-full max-w-xs"
          onChange={handlePriceRange}
        >
          <option >Price range</option>
          <option value="0-199">0 - 199 $</option>
          <option value="200-499">200 - 499 $</option>
          <option value="500-999">500 - 999 $</option>
          <option value="1000-2999">1000 - 2999 $</option>
        </select>

        <select
          className="select select-primary w-full max-w-xs "
          onChange={handleSorting}
          
        >
          <option >Sort</option>
          <option value="newest-first">Newest First</option>
          <option value="oldest-first">Oldest First</option>
          <option value="low-to-high">Low to High</option>
          <option value="high-to-low">High to Low</option>
        </select>
      </div>

      {products?.length === 0 && !isLoading && (
        <div className="max-w-sm mx-auto min-h-[50vh] flex flex-col items-center justify-center py-8 px-4 text-center">
          <svg xmlns="http://www.w3.org/2000/svg"
          className="h-10"
           viewBox="0 0 512 512">
            <path d="M367.2 412.5L99.5 144.8C77.1 176.1 64 214.5 64 256c0 106 86 192 192 192c41.5 0 79.9-13.1 111.2-35.5zm45.3-45.3C434.9 335.9 448 297.5 448 256c0-106-86-192-192-192c-41.5 0-79.9 13.1-111.2 35.5L412.5 367.2zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" />
          </svg>
          <h3 className="text-xl  mt-4 text-gray-700 dark:text-gray-400">
            Product not found
          </h3>
        </div>
      )}

      {isLoading && (
        <div className="flex justify-center min-h-[60vh] items-center">
          <span className="loading loading-infinity loading-lg"></span>
        </div>
      )}

      <div
        id="products__body"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:space-y-4 mx-auto place-items-center mt-5"
      >
        {products.map((pdct, idx) => (
          <div key={idx} className="card card-compact w-80 shadow-xl">
            <figure>
              <img
                src="https://images.unsplash.com/photo-1445620466293-d6316372ab59?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{pdct.product_name}</h2>
              <h5>BRAND: {pdct.brand_name}</h5>
              <h5>Category: {pdct.category}</h5>
              <p>{pdct.description}</p>
              <p>{pdct.date_time}</p>
              <div className="card-actions justify-center">
                <div className="badge badge-outline">{pdct.price}$</div>
                <div className="badge badge-outline">{pdct.rating}⭐</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
