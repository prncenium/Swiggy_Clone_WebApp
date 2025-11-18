import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ShoppingCart } from 'lucide-react';
import { CDN_url } from '../utils/const'; // We'll use this for a placeholder image URL




const Cart = () => {
  
  const cartItems = [
    {
      id: 1,
      name: 'Margherita Pizza',
      price: 250,
      cloudinaryImageId: 'v8xlf05hm6p7t26n2d6v', // Example image ID
      quantity: 2,
    },
    {
      id: 2,
      name: 'Veg Biryani',
      price: 180,
      cloudinaryImageId: 'x6g6f9814mcnq9tqna4f', // Example image ID
      quantity: 1,
    },
  ];

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const deliveryFee = 50;
  const totalAmount = totalPrice + deliveryFee;

  return (
    // Container
    <div className="max-w-4xl w-full mx-auto p-6 bg-white shadow-lg rounded-lg -mt-16">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800 flex items-center">
          <ShoppingCart size={32} className="mr-3 text-orange-500" />
          Your Cart
        </h1>
        <button
          onClick={() => alert('Clear Cart clicked!')}
          className="text-red-500 hover:text-red-700 font-medium flex items-center gap-1 cursor-pointer"
        >
          <Trash2 size={16} />
          Clear Cart
        </button>
      </div>

      {/* --- Cart Items List --- */}
      <div className="space-y-4 mb-6">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between p-4 border rounded-lg"
          >
            <div className="flex items-center gap-4">
              <img
                src={`${CDN_url}${item.cloudinaryImageId}`}
                alt={item.name}
                className="w-16 h-16 rounded-md object-cover"
              />
              <div>
                <h3 className="font-semibold text-gray-800">{item.name}</h3>
                <p className="text-gray-600 font-medium">₹{item.price}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              {/* Quantity Controls */}
              <button className="p-1.5 rounded-full bg-gray-200 hover:bg-gray-300 cursor-pointer">
                <Minus size={14} />
              </button>
              <span className="font-bold text-lg w-6 text-center">{item.quantity}</span>
              <button className="p-1.5 rounded-full bg-gray-200 hover:bg-gray-300 cursor-pointer">
                <Plus size={14} />
              </button>
              {/* Remove Item */}
              <button className="text-red-500 hover:text-red-700 ml-4 cursor-pointer">
                <Trash2 size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* --- Order Summary --- */}
      <div className="bg-gray-50 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Order Summary</h2>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-gray-600">Subtotal</span>
            <span className="font-medium text-gray-800">₹{totalPrice.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Delivery Fee</span>
            <span className="font-medium text-gray-800">₹{deliveryFee.toFixed(2)}</span>
          </div>
          <div className="border-t border-gray-200 my-2"></div>
          <div className="flex justify-between text-xl font-bold">
            <span className="text-gray-900">Total Amount</span>
            <span className="text-gray-900">₹{totalAmount.toFixed(2)}</span>
          </div>
        </div>
        <button className="w-full bg-green-600 text-white p-3 rounded-lg font-semibold text-lg mt-6 hover:bg-green-700 transition-colors cursor-pointer">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;