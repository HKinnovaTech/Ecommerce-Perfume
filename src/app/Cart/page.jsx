"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Perfume 1", price: 50, image: "/images/perfume1.jpg" },
    { id: 2, name: "Perfume 2", price: 60, image: "/images/perfume2.jpg" },
  ]);
  const [shippingDetails, setShippingDetails] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
  });
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: "",
    expirationDate: "",
    cvv: "",
  });

  const router = useRouter();

  const handleRemoveItem = (itemId) => {
    setCartItems(cartItems.filter((item) => item.id !== itemId));
  };

  const handleShippingChange = (e) => {
    const { name, value } = e.target;
    setShippingDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handlePaymentChange = (e) => {
    const { name, value } = e.target;
    setPaymentDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleCheckout = () => {
    alert("Proceeding to payment...");
    router.push("/confirmation");
  };

  return (
    <div className="pt-32 bg-gradient-to-r from-black via-stone-900 to-black p-6">
      <h1 className="text-3xl font-bold text-[#AB572D] mb-6">Shopping Cart</h1>
      <div className="flex space-x-6">
        <div className="w-1/2 bg-stone-950 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-white">
            Shipping Details
          </h2>
          <div className="mt-4 space-y-4">
            <input
              type="text"
              name="name"
              value={shippingDetails.name}
              onChange={handleShippingChange}
              placeholder="Full Name"
              className="w-full text-white border border-[#AB572D] bg-inherit rounded-lg py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-[#AB572D]"
            />
            <input
              type="email"
              name="email"
              value={shippingDetails.email}
              onChange={handleShippingChange}
              placeholder="Email Address"
              className="w-full text-white border border-[#AB572D] bg-inherit rounded-lg py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-[#AB572D]"
            />
            
            <input
              type="text"
              name="address"
              value={shippingDetails.address}
              onChange={handleShippingChange}
              placeholder="Shipping Address"
              className="w-full text-white border border-[#AB572D] bg-inherit rounded-lg py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-[#AB572D]"
            />
            <div className="flex space-x-4">
              <input
                type="text"
                name="city"
                value={shippingDetails.city}
                onChange={handleShippingChange}
                placeholder="City"
                className="w-1/2 text-white border border-[#AB572D] bg-inherit rounded-lg py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-[#AB572D]"
              />
              <input
                type="text"
                name="postalCode"
                value={shippingDetails.postalCode}
                onChange={handleShippingChange}
                placeholder="Postal Code"
                className="w-1/2 text-white border border-[#AB572D] bg-inherit rounded-lg py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-[#AB572D]"
              />
            </div>
            <input
              type="text"
              name="country"
              value={shippingDetails.country}
              onChange={handleShippingChange}
              placeholder="Country"
              className="w-full text-white border border-[#AB572D] bg-inherit rounded-lg py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-[#AB572D]"
            />
          </div>
          <h2 className="text-2xl font-semibold text-white mt-8">
            Payment Details
          </h2>
          <div className="mt-4 space-y-4">
            <input
              type="text"
              name="cardNumber"
              value={paymentDetails.cardNumber}
              onChange={handlePaymentChange}
              placeholder="Card Number"
              className="w-full text-white border border-[#AB572D] bg-inherit rounded-lg py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-[#AB572D]"
            />
            <div className="flex space-x-4">
              <input
                type="text"
                name="expirationDate"
                value={paymentDetails.expirationDate}
                onChange={handlePaymentChange}
                placeholder="Expiration Date"
                className="w-1/2 text-white border border-[#AB572D] bg-inherit rounded-lg py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-[#AB572D]"
              />
              <input
                type="text"
                name="cvv"
                value={paymentDetails.cvv}
                onChange={handlePaymentChange}
                placeholder="CVV"
                className="w-1/2 text-white border border-[#AB572D] bg-inherit rounded-lg py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-[#AB572D]"
              />
            </div>
          </div>
        </div>

        <div className="w-1/2 bg-stone-950 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-white">Cart Items</h2>
          <div className="mt-4 space-y-4">
            {cartItems.length === 0 ? (
              <p className="text-white">Your cart is empty</p>
            ) : (
              cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center p-6 text-white border border-[#AB572D] bg-inherit rounded-lg"
                >
                  <div className="flex items-center space-x-4">
                    <img
                      src="/images/perfume2.webp"
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div>
                      <h3 className="text-lg font-semibold text-white">
                        {item.name}
                      </h3>
                      <p className="text-sm text-gray-400">${item.price}</p>
                    </div>
                  </div>
                  <button
                    className="text-red-500 hover:text-red-700"
                    onClick={() => handleRemoveItem(item.id)}
                  >
                    Remove
                  </button>
                </div>
              ))
            )}
          </div>
          <div className="mt-8 flex justify-between items-center">
            <button
              onClick={handleCheckout}
              className="bg-orange-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-orange-400 transition duration-300"
            >
              Checkout
            </button>
            <p className="text-white text-xl">
              Total: ${cartItems.reduce((acc, item) => acc + item.price, 0)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
