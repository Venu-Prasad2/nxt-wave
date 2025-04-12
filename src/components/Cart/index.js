import React from 'react';

const Cart = ({ wishlist }) => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Wishlist</h2>
      {wishlist.length === 0 ? (
        <p className="text-gray-500">Your wishlist is empty.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {wishlist.map((item) => (
            <div key={item.id} className="border p-4 rounded-lg shadow-md">
              <img
                src={item.image || '/placeholder.png'}
                alt={item.title}
                className="w-full h-40 object-contain mb-2"
              />
              <h3 className="text-md font-semibold mb-1">
                {item.title.length > 50 ? item.title.slice(0, 50) + '...' : item.title}
              </h3>
              <p className="text-sm text-gray-600">${item.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
