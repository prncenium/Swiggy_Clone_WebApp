import React from 'react';
import { LifeBuoy, Mail, Phone } from 'lucide-react';

const Help = () => {
  return (
    // We remove items-center from the main App.js layout, so we style this container
    <div className="max-w-4xl w-full mx-auto p-8 bg-white shadow-lg rounded-lg -mt-24">
      <h1 className="text-4xl font-bold text-gray-800 mb-6 flex items-center">
        <LifeBuoy size={36} className="mr-3 text-orange-500" />
        Help & Support
      </h1>
      <p className="text-gray-600 mb-8">
        We're here to help you with any questions or issues you may have. Check out our frequently asked questions below or contact us directly.
      </p>

      {/* --- FAQs Section --- */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Frequently Asked Questions (FAQs)</h2>
        <div className="space-y-4">
          {/* FAQ 1 */}
          <div>
            <h3 className="text-lg font-medium text-gray-800">How do I track my order?</h3>
            <p className="text-gray-600">
              Once your order is confirmed, you can track its status in real-time from the "My Orders" section in your account. You'll see updates from the restaurant preparing your food to the delivery partner arriving at your doorstep.
            </p>
          </div>
          {/* FAQ 2 */}
          <div>
            <h3 className="text-lg font-medium text-gray-800">What if I have an issue with my order?</h3>
            <p className="text-gray-600">
              If you experience any problems with your order (e.g., missing items, incorrect food), please use the "Help" section on your order page or contact our customer support immediately. We'll work to resolve it as quickly as possible.
            </p>
          </div>
          {/* FAQ 3 */}
          <div>
            <h3 className="text-lg font-medium text-gray-800">How do I cancel my order?</h3>
            <p className="text-gray-600">
              You can cancel an order directly from the order tracking screen within the first 60 seconds of placing it. After that, please contact support for assistance, as the restaurant may have already started preparing your food.
            </p>
          </div>
        </div>
      </div>

      {/* --- Contact Section --- */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Contact Us</h2>
        <p className="text-gray-600 mb-4">
          Can't find the answer you're looking for? Get in touch with our team.
        </p>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1 p-4 border border-gray-200 rounded-lg flex items-center gap-3">
            <Phone size={24} className="text-orange-500" />
            <div>
              <h4 className="text-lg font-medium text-gray-800">Call Us</h4>
              <p className="text-gray-600">1800-SWIGGY-123</p>
            </div>
          </div>
          <div className="flex-1 p-4 border border-gray-200 rounded-lg flex items-center gap-3">
            <Mail size={24} className="text-orange-500" />
            <div>
              <h4 className="text-lg font-medium text-gray-800">Email Us</h4>
              <p className="text-gray-600">support@swiggy.clone</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;