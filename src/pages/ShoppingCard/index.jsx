// // app/cart/page.jsx

// export default function ShoppingCart() {
//     return (
//       <div className="p-10">
//         {/* Breadcrumb */}
//         <div className="text-gray-500 text-sm mb-4">
//           Home / <span className="text-black font-medium">Shopping Cart</span>
//         </div>
  
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           {/* Products Table */}
//           <div className="lg:col-span-2">
//             <div className="border-b border-green-300 pb-2 font-semibold text-lg">
//               <div className="grid grid-cols-4 gap-4">
//                 <div>Products</div>
//                 <div>Price</div>
//                 <div>Quantity</div>
//                 <div>Total</div>
//               </div>
//             </div>
  
//             {/* Empty Cart State */}
//             <div className="flex flex-col items-center justify-center py-20">
//               <img src="https://cdn-icons-png.flaticon.com/512/1170/1170576.png" alt="No Data" className="w-20 mb-4 opacity-70" />
//               <p className="mb-4 text-gray-500">No data</p>
//               <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded">
//                 LET'S SHOP
//               </button>
//             </div>
//           </div>
  
//           {/* Cart Total */}
//           <div className="border p-6 rounded-md">
//             <h2 className="text-lg font-bold border-b border-green-300 pb-2 mb-4">Cart Total</h2>
            
//             <div className="flex mb-4">
//               <input
//                 type="text"
//                 placeholder="Enter coupon code here..."
//                 className="flex-grow border border-gray-300 rounded-l px-4 py-2 focus:outline-none"
//               />
//               <button className="bg-green-600 text-white px-4 rounded-r hover:bg-green-700">
//                 Apply
//               </button>
//             </div>
  
//             <div className="space-y-2 text-sm">
//               <div className="flex justify-between">
//                 <span>Subtotal:</span>
//                 <span>$0</span>
//               </div>
//               <div className="flex justify-between">
//                 <span>Coupon Discount:</span>
//                 <span className="text-red-500">- $(0.00)</span>
//               </div>
//               <div className="flex justify-between">
//                 <span>Shipping:</span>
//                 <span>$16</span>
//               </div>
//             </div>
  
//             <div className="flex justify-between mt-4 text-lg font-semibold">
//               <span>Total</span>
//               <span className="text-green-600">$0</span>
//             </div>
  
//             <button className="w-full bg-green-600 text-white py-3 rounded mt-6 hover:bg-green-700 font-bold">
//               Proceed to Checkout
//             </button>
  
//             <div className="text-center mt-4 text-green-600 hover:underline cursor-pointer">
//               Continue Shopping
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
  


// import { useNavigate } from "react-router-dom";

// export default function ShoppingCart() {
//   const navigate = useNavigate();

//   return (
//     <div className="p-10">
//       <div className="text-gray-500 text-sm mb-4">
//         <span
//           onClick={() => navigate("/")}
//           className="hover:underline cursor-pointer text-green-600"
//         >
//           Home
//         </span>{" "}
//         / <span className="text-black font-medium">Shopping Cart</span>
//       </div>

//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//         <div className="lg:col-span-2">
//           <div className="border-b border-green-300 pb-2 font-semibold text-lg">
//             <div className="grid grid-cols-4 gap-4">
//               <div>Products</div>
//               <div>Price</div>
//               <div>Quantity</div>
//               <div>Total</div>
//             </div>
//           </div>
//           <div className="flex flex-col items-center justify-center py-20">
            
//             <img
//               src="https://cdn-icons-png.flaticon.com/512/1170/1170576.png"
//               alt="No Data"
//               className="w-20 mb-4 opacity-70"
//             />
//             <p className="mb-4 text-gray-500">No data</p>
//             <button
//               onClick={() => navigate("/")}
//               className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded"
//             >
//               LET'S SHOP
//             </button>
//           </div>
//         </div>
//         <div className="border p-6 rounded-md">
//           <h2 className="text-lg font-bold border-b border-green-300 pb-2 mb-4">
//             Cart Total
//           </h2>

//           <div className="flex mb-4">
//             <input
//               type="text"
//               placeholder="Enter coupon code here..."
//               className="flex-grow border border-gray-300 rounded-l px-4 py-2 focus:outline-none"
//             />
//             <button className="bg-green-600 text-white px-4 rounded-r hover:bg-green-700">
//               Apply
//             </button>
//           </div>

//           <div className="space-y-2 text-sm">
//             <div className="flex justify-between">
//               <span>Subtotal:</span>
//               <span>$0</span>
//             </div>
//             <div className="flex justify-between">
//               <span>Coupon Discount:</span>
//               <span className="text-red-500">- $(0.00)</span>
//             </div>
//             <div className="flex justify-between">
//               <span>Shipping:</span>
//               <span>$16</span>
//             </div>
//           </div>

//           <div className="flex justify-between mt-4 text-lg font-semibold">
//             <span>Total</span>
//             <span className="text-green-600">$0</span>
//           </div>

//           <button
//             onClick={() => navigate("/checkout")}
//            className="w-full bg-green-600 text-white py-3 rounded mt-6 hover:bg-green-700 font-bold">
//             Proceed to Checkout
//           </button>
//           <div
//             onClick={() => navigate("/")}
//             className="text-center mt-4 text-green-600 hover:underline cursor-pointer"
//           >
//             Continue Shopping
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }







import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Trash2 } from "lucide-react";

export default function ShoppingCart() {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

  const handleDeleteItem = (id) => {
    const updatedCart = cartItems.filter(item => item._id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const getTotalPrice = () => {
    return cartItems.reduce((acc, item) => {
      const price = Number(item.discount_price || item.price || 0);
      return acc + price * item.quantity;
    }, 0);
  };

  const shipping = 16;
  const total = getTotalPrice();
  const totalWithShipping = total + shipping;

  return (
    <div className="p-10">
      <div className="text-gray-500 text-sm mb-4">
        <span
          onClick={() => navigate("/")}
          className="hover:underline cursor-pointer text-green-600"
        >
          Home
        </span>{" "}
        / <span className="text-black font-medium">Shopping Cart</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="border-b border-green-300 pb-2 font-semibold text-lg">
            <div className="grid grid-cols-5 gap-4">
              <div>Products</div>
              <div>Price</div>
              <div>Quantity</div>
              <div>Total</div>
              <div>Action</div>
            </div>
          </div>

          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1170/1170576.png"
                alt="No Data"
                className="w-20 mb-4 opacity-70"
              />
              <p className="mb-4 text-gray-500">No data</p>
              <button
                onClick={() => navigate("/")}
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded"
              >
                LET'S SHOP
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-4 mt-6">
              {cartItems.map((item) => {
                const price = Number(item.discount_price || item.price || 0);
                return (
                  <div
                    key={item._id}
                    className="grid grid-cols-5 gap-4 items-center border-b pb-4"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={item.main_image}
                        alt={item.title}
                        className="w-16 h-16 object-contain"
                      />
                      <p className="font-semibold">{item.title}</p>
                    </div>
                    <div>${price.toFixed(2)}</div>
                    <div>{item.quantity}</div>
                    <div>${(price * item.quantity).toFixed(2)}</div>
                    <div>
                      <button
                        onClick={() => handleDeleteItem(item._id)}
                        className="text-red-600 hover:text-red-800"
                        title="Remove"
                      >
                        <Trash2 size={20} />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        <div className="border p-6 rounded-md">
          <h2 className="text-lg font-bold border-b border-green-300 pb-2 mb-4">
            Cart Total
          </h2>

          <div className="flex mb-4">
            <input
              type="text"
              placeholder="Enter coupon code here..."
              className="flex-grow border border-gray-300 rounded-l px-4 py-2 focus:outline-none"
            />
            <button className="bg-green-600 text-white px-4 rounded-r hover:bg-green-700">
              Apply
            </button>
          </div>

          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Subtotal:</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Coupon Discount:</span>
              <span className="text-red-500">- $0.00</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping:</span>
              <span>${shipping.toFixed(2)}</span>
            </div>
          </div>

          <div className="flex justify-between mt-4 text-lg font-semibold">
            <span>Total</span>
            <span className="text-green-600">${totalWithShipping.toFixed(2)}</span>
          </div>

          <button
            onClick={() => navigate("/checkout")}
            className="w-full bg-green-600 text-white py-3 rounded mt-6 hover:bg-green-700 font-bold"
          >
            Proceed to Checkout
          </button>
          <div
            onClick={() => navigate("/")}
            className="text-center mt-4 text-green-600 hover:underline cursor-pointer"
          >
            Continue Shopping
          </div>
        </div>
      </div>
    </div>
  );
}
