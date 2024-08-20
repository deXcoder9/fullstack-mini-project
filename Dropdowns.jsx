// import { useContext, useState } from "react";
// import useAxiosPublic from "../../hooks/useAxiosPublic";
// import { useQuery } from "@tanstack/react-query";
// import { AuthContext } from "../../auth provider/AuthProvider";

// const Dropdowns = () => {

//   const axiosPublic = useAxiosPublic()
//   const {featuredProducts} = useContext(AuthContext)

//   // const [selectedValue, setSelectedValue] = useState("");
//   // const [Search, setSearch] = useState("");
//   const [Brand, setBrandName] = useState("");
//   const [Category, setCategory] = useState("");
//   const [PriceRange, setPriceRange] = useState("")

  

//   const categories = [
//     "TVs",
//     "Wearables",
//     "Cameras",
//     "Gaming",
//     "Accessories",
//     "Tablets",
//     "Laptops",
//     "Phones"
//   ];

//   const handleBrandNames = e => {
//   setBrandName(e.target.value)
//   }

//   const handleCategoryNames = (e) => {
//     setCategory(e.target.value);
//     // console.log(e.target.value)
//   };

//   const handlePriceRange = e => {
//    setPriceRange(e.target.value)
//   }

//   // useEffect(() => {
//   //   console.log("selected", selectedValue);
//   // }, [selectedValue]);

//   const { data: products = [] } = useQuery({
//     queryKey: ["products",  Brand, Category],
//     // queryKey: ["products", Search, Brand, Category],
//     queryFn: async () => {
//       const { data } = await axiosPublic.get(
//         `/products?&brand=${Brand}&category=${Category}&priceRange=${PriceRange}`
//         // `/products?search=${Search}&brand=${Brand}&category=${Category}`
//       );

//       return data;
//     },
//   });


//   return (
//     // <div className="grid place-items-center grid-cols-4">
//     //   <select
//     //     className="select select-primary w-full max-w-xs"
//     //     // value={selectedValue}
//     //     onChange={handleBrandNames}
//     //   >
//     //     <option  >Select Brand Name</option>
//     //     <option value="Apple">Apple</option>
//     //     <option value="Dell">Dell</option>
//     //     <option value="Samsung">Samsung</option>
//     //     <option value="Sony">Sony</option>
//     //   </select>

//     //   <select 
//     //   className="select select-primary w-full max-w-xs" 
//     //   onChange={handleCategoryNames}
//     //   >
//     //     <option>Select Category</option>
//     //     {categories?.map((category, index) => (
//     //       <option key={index} value={category}>
//     //         {category}
//     //       </option>
//     //     ))}
//     //   </select>
//     //   <select className="select select-primary w-full max-w-xs"
//     //   onChange={handlePriceRange}
//     //   >
//     //     <option value="default">Default</option>
//     //     <option value="0-199">0 - 199 $</option>
//     //     <option value="200-499">200 - 499 $</option>
//     //     <option value="500-999">500 - 999 $</option>
//     //     <option value="1000-2999">1000 - 2999 $</option>
//     //   </select>

//     //   <select
//     //     className="select select-primary w-full max-w-xs"
//     //     defaultValue="all"
//     //   >
//     //     <option value="default">Default</option>
//     //     <option value="newest-first">Newest First</option>
//     //     <option value="oldest-first">Oldest First</option>
//     //     <option value="low-to-high">Low to High</option>
//     //     <option value="high-to-low">High to Low</option>
//     //   </select>
//     // </div>
//   );
// };

// export default Dropdowns;
