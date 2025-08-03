import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Trash2, ArrowLeft, CreditCard, MapPin } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { items, removeFromCart, clearCart, total } = useCart();

  const handlePurchase = () => {
    alert('Purchase functionality would be implemented here with a payment gateway.');
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 pt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-16">
            <ShoppingCart className="h-24 w-24 text-gray-400 mx-auto mb-8" />
            <h1 className="text-3xl font-bold text-[#273F4F] mb-4">Your Cart is Empty</h1>
            <p className="text-xl text-gray-600 mb-8">
              Start exploring our amazing properties to find your dream home.
            </p>
            <Link
              to="/properties"
              className="inline-flex items-center bg-[#FE7743] hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors space-x-2"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Browse Properties</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <Link 
            to="/properties"
            className="inline-flex items-center text-[#447D9B] hover:text-blue-600 transition-colors mb-4"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Continue Shopping
          </Link>
          <h1 className="text-4xl font-bold text-[#273F4F] mb-2">Your Cart</h1>
          <p className="text-xl text-gray-600">
            {items.length} {items.length === 1 ? 'property' : 'properties'} selected
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-semibold text-[#273F4F]">Selected Properties</h2>
                  <button
                    onClick={clearCart}
                    className="text-red-500 hover:text-red-700 transition-colors"
                  >
                    Clear All
                  </button>
                </div>
              </div>
              
              <div className="divide-y divide-gray-200">
                {items.map((item) => (
                  <div key={item.id} className="p-6 hover:bg-gray-50 transition-colors">
                    <div className="flex items-center space-x-4">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-24 h-24 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-[#273F4F] mb-2">{item.title}</h3>
                        <div className="flex items-center text-gray-600 mb-2">
                          <MapPin className="h-4 w-4 mr-1" />
                          <span>{item.location}</span>
                        </div>
                        <div className="text-2xl font-bold text-[#FE7743]">
                          ${item.price.toLocaleString()}
                        </div>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="p-2 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors"
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Cart Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-8">
              <h3 className="text-xl font-semibold text-[#273F4F] mb-6">Purchase Summary</h3>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-semibold">${total.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Processing Fee</span>
                  <span className="font-semibold">$2,500</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Legal Fees</span>
                  <span className="font-semibold">$1,500</span>
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between text-lg font-bold">
                    <span className="text-[#273F4F]">Total</span>
                    <span className="text-[#FE7743]">${(total + 4000).toLocaleString()}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={handlePurchase}
                className="w-full bg-[#FE7743] hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2 mb-4"
              >
                <CreditCard className="h-5 w-5" />
                <span>Proceed to Purchase</span>
              </button>

              <div className="text-center text-sm text-gray-500 mb-4">
                Secure payment processing
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-[#273F4F] mb-2">Next Steps:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Property inspection arranged</li>
                  <li>• Legal documentation prepared</li>
                  <li>• Financing assistance available</li>
                  <li>• 24/7 customer support</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-[#273F4F] mb-6 text-center">What Happens Next?</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FE7743] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h4 className="text-lg font-semibold text-[#273F4F] mb-2">Purchase Confirmation</h4>
              <p className="text-gray-600">Your purchase will be processed and you'll receive a confirmation email with all details.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#447D9B] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h4 className="text-lg font-semibold text-[#273F4F] mb-2">Property Inspection</h4>
              <p className="text-gray-600">Schedule a professional inspection to ensure everything meets your expectations.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#273F4F] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h4 className="text-lg font-semibold text-[#273F4F] mb-2">Move-in Ready</h4>
              <p className="text-gray-600">Complete the legal process and get your keys to start your new journey.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;