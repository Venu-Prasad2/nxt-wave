import React from 'react';
import './index.css';
import { FiHeart as FiHeartOutline } from 'react-icons/fi';
import { FaHeart as FaHeartFilled } from 'react-icons/fa';

const ProductCard = ({ product, likedItems, setLikedItems }) => {
  const isLiked = likedItems.some(item => item.id === product.id);

  const toggleWishlist = () => {
    if (isLiked) {
      setLikedItems(likedItems.filter(item => item.id !== product.id));
    } else {
      setLikedItems([...likedItems, product]);
    }
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <h3>
        {product.title.length > 35
          ? product.title.slice(0, 35) + '...'
          : product.title}
      </h3>
      <div className="align">
        <p className="login-text">
          Sign in or Create an account to see pricing
        </p>
        <div className="wishlist" onClick={toggleWishlist}>
          {isLiked ? (<FaHeartFilled color="red" /> ): <FiHeartOutline />}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
