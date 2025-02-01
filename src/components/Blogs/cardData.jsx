import React, { useState } from 'react';
import CardItem from './CardItem';

import mobile from '../../Assets/images/1.png';
import mobile2 from '../../Assets/images/2.png';
import mobile3 from '../../Assets/images/3.png';
import mobile4 from '../../Assets/images/4.png';
import mobile5 from '../../Assets/images/5.png';

import './styles.css';

const cardData = [
  {
    image: mobile,
    title: 'E-Commerce Wesiten',
    description: 'Explore my portfolio to see a variety of web development projects, from sleek, responsive websites to complex web applications. Each project is designed to be',
    category: 'web-development',
  },
  {
    image: mobile2,
    title: 'Video Editing',
    description: 'Explore my portfolio to see a variety of web development projects, from sleek, responsive websites to complex web applications. Each project is designed to be',
    category: 'video-editing',
  },
  {
    image: mobile3,
    title: 'Graphic Designing',
    description: 'Explore my portfolio to see a variety of web development projects, from sleek, responsive websites to complex web applications. Each project is designed to be',
    category: 'graphic-designing',
  },
  {
    image: mobile,
    title: 'Web Development',
    description: 'Explore my portfolio to see a variety of web development projects, from sleek, responsive websites to complex web applications. Each project is designed to be',
    category: 'web-development',
  },
  {
    image: mobile4,
    title: 'UI/UX Designing',
    description: 'Explore my portfolio to see a variety of web development projects, from sleek, responsive websites to complex web applications. Each project is designed to be',
    category: 'ui/ux-designing',
  },
  {
    image: mobile5,
    title: 'Digital Marketing',
    description: 'Explore my portfolio to see a variety of web development projects, from sleek, responsive websites to complex web applications. Each project is designed to be',
    category: 'digital-marketing',
  },
];

const CardList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = [
    'web-development',
    'video-editing',
    'graphic-designing',
    'ui/ux-designing',
    'digital-marketing',
  ];

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value); // Update search term
  };

  // Filter cards based on search term, category, and partial matches
  const filteredCards = cardData.filter((card) => {
    // Check if the search term matches the card's title or description (partial match)
    const searchMatch =
      card.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      card.description.toLowerCase().includes(searchTerm.toLowerCase());

    // If a category is selected, check that it matches the category too
    const categoryMatch =
      !selectedCategory || card.category === selectedCategory;

    return searchMatch && categoryMatch; // Only return cards that match both
  });

  return (
    <div style={{ position: 'relative' }}>
      <div style={{ margin: '20px auto', paddingTop: '50px' }}>
        <h1
          style={{
            fontSize: '48px',
            fontWeight: '700',
            textAlign: 'center',
            fontFamily: 'Manrope',
          }}
        >
          Portfolio
        </h1>
      </div>

      {/* Search input for dynamic filtering */}
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Search for projects..."
          value={searchTerm}
          onChange={handleSearchChange}
          style={{
            padding: '8px',
            width: '300px',
            borderRadius: '4px',
            border: '1px solid #ccc',
            display: 'block',
            margin: '0 auto',
          }}
        />
      </div>

      {/* Category dropdown */}
      <div
        style={{
          textAlign: 'center',
          marginBottom: '20px',
          display: 'flex',
          justifyContent: 'center',
          gap: '10px',
        }}
      >
        <select
          onChange={(e) => setSelectedCategory(e.target.value)}
          value={selectedCategory || ''}
          style={{
            padding: '8px',
            width: '200px',
            borderRadius: '4px',
            border: '1px solid #ccc',
          }}
        >
          <option value="">All Categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category
                .split('-')
                .join(' ')
                .replace(/\b\w/g, (c) => c.toUpperCase())}
            </option>
          ))}
        </select>
      </div>

      {/* Card display */}
      <div className="card-container" style={{ marginTop: '20px' }}>
        {filteredCards.length > 0 ? (
          filteredCards.map((card, index) => (
            <CardItem
              key={index}
              image={card.image}
              title={card.title}
              description={card.description}
            />
          ))
        ) : (
          <p style={{ textAlign: 'center', color: '#888' }}>No matching results</p>
        )}
      </div>
    </div>
  );
};

export default CardList;
