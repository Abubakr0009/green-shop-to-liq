import React, { useState } from "react";

const CardTotal = () => {
  const [couponCode, setCouponCode] = useState("");
  const [discount, setDiscount] = useState(0);

  const handleCouponChange = (e) => {
    setCouponCode(e.target.value);
  };

  const applyCoupon = () => {
    // Apply coupon logic here (e.g., fetching discount)
    if (couponCode === "DISCOUNT10") {
      setDiscount(10); // Example discount
    } else {
      setDiscount(0);
    }
  };

  const subtotal = 12;
  const shipping = 16;
  const total = subtotal + shipping - discount;

  return (
    <div className="w-[354px] max-w-full text-start">
      <h3 className="font-bold pb-[11px] border-b border-[#46A35880]">
        Card Total
      </h3>
      <div className="flex h-[40px] mt-[35px]">
        <input
          placeholder="Enter coupon code here..."
          className="w-4/5 border border-[#46A358] pl-[15px] placeholder:font-light rounded-l-lg focus:outline-none focus:ring-2 focus:ring-[#46A358] transition"
          value={couponCode}
          onChange={handleCouponChange}
        />
        <button
          onClick={applyCoupon}
          className="bg-[#46A358] flex rounded-r-md items-center justify-center gap-1 text-base text-white w-1/5 transition hover:bg-[#3c8e45]"
        >
          Apply
        </button>
      </div>
      <div className="mt-[30px]">
        <table className="w-full">
          <tbody>
            <tr>
              <td className="py-2">Subtotal</td>
              <td className="text-right">${subtotal}</td>
            </tr>
            <tr>
              <td className="py-2">Coupon Discount</td>
              <td className="text-right">- ${discount.toFixed(2)}</td>
            </tr>
            <tr>
              <td className="py-2">Shipping</td>
              <td className="text-right">${shipping}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex justify-between mt-[20px]">
        <h1 className="font-bold">Total</h1>
        <h1 className="text-[#46A358] font-semibold">${total.toFixed(2)}</h1>
      </div>
      <button className="bg-[#46A358] flex rounded-md items-center justify-center gap-1 text-base text-white w-full h-[40px] mt-[30px] transition hover:bg-[#3c8e45]">
        Proceed to Checkout
      </button>
      <h3 className="mt-[14px] text-center text-[#46A358] cursor-pointer hover:text-[#3c8e45]">
        Continue Shopping
      </h3>
    </div>
  );
};

export default CardTotal;
