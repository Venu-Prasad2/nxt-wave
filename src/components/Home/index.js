import React, { useEffect, useState } from 'react';
import Header from '../Header';
import Sidebar from '../Sidebar';
import ProductCard from '../ProductCard';
import Footer from '../Footer';

import './index.css';

function Home() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [likedItems, setLikedItems] = useState([]);
  const [filters, setFilters] = useState({
    customizable: false,
    idealfor: [],
    occasion: [],
    work: [],
    fabric: [],
    segment: [],
    suitablefor: [],
    rawmaterials: [],
    pattern: []
  });
  const [sortOption, setSortOption] = useState('Recommended');
  const [showSortOptions, setShowSortOptions] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
        setFilteredProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    let result = [...products];

    const matchesFilter = (product, filterKey) => {
      const values = filters[filterKey];
      if (!values || values.length === 0) return true;
      return values.some(val =>
        product.title.toLowerCase().includes(val.toLowerCase())
      );
    };

    const filterKeys = [
      'idealfor',
      'occasion',
      'work',
      'fabric',
      'segment',
      'suitablefor',
      'rawmaterials',
      'pattern'
    ];

    for (let key of filterKeys) {
      result = result.filter(product => matchesFilter(product, key));
    }

    if (filters.customizable) {
      result = result.filter(product => product.rating?.rate > 4);
    }

    // Apply sorting
    switch (sortOption) {
      case 'Price : High to Low':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'Price : Low to High':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'Newest First':
        result.sort((a, b) => b.id - a.id); // Using ID as a proxy for newness
        break;
      case 'Popular':
        result.sort((a, b) => b.rating?.count - a.rating?.count);
        break;
      default:
        break; // Recommended = no extra sorting
    }

    setFilteredProducts(result);
  }, [filters, products, sortOption]);

  const sortOptions = [
    'Recommended',
    'Newest First',
    'Popular',
    'Price : High to Low',
    'Price : Low to High'
  ];

  return (
    <>
      <Header />
      <section className="hero">
        <h1>DISCOVER OUR PRODUCTS</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
          scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
          dolor.
        </p>
      </section>

      <div className="filter-bar">
        <div className="filter-count">{filteredProducts.length} ITEMS</div>
        <div className="sort">
          <div className="sort-selected" onClick={() => setShowSortOptions(!showSortOptions)}>
            {sortOption} ▾
          </div>
          {showSortOptions && (
            <ul className="sort-options">
              {sortOptions.map(option => (
                <li
                  key={option}
                  className={sortOption === option ? 'active' : ''}
                  onClick={() => {
                    setSortOption(option);
                    setShowSortOptions(false);
                  }}
                >
                  {option}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="container">
        <Sidebar filters={filters} setFilters={setFilters} />
        <main className="product-grid">
          {filteredProducts.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              likedItems={likedItems}
              setLikedItems={setLikedItems}
            />
          ))}
        </main>
      </div>

      
      

      <Footer />
    </>
  );
}

export default Home;
