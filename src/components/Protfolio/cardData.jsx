import React, { useState } from 'react';
import CardItem from './CardItem';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import mobile from '../../Assets/images/1.png';
import mobile2 from '../../Assets/images/2.png';
import mobile3 from '../../Assets/images/3.png';
import mobile4 from '../../Assets/images/4.png';
import mobile5 from '../../Assets/images/5.png';

import './styles.css';

const cardData = [
  {
    image: mobile,
    title: 'Web Development',
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
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = [
    'web-development',
    'video-editing',
    'graphic-designing',
    'ui/ux-designing',
    'digital-marketing',
  ];

  // Toggle dropdown
  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  // Handle individual category selection (only one selected at a time)
  const handleCategorySelect = (category) => {
    setSelectedCategory(selectedCategory === category ? null : category); // Toggle selection
  };

  // Handle "All" selection
  const handleAllToggle = () => {
    setSelectedCategory(null); // Deselect all categories
  };

  // Filter cards based on the selected category
  const filteredCards = selectedCategory
    ? cardData.filter((card) => card.category === selectedCategory)
    : cardData;

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

      {/* Dropdown toggle button */}
      <div
        onClick={handleToggle}
        style={{
          width:"240px",
          cursor: 'pointer',
          textAlign: 'center',
          color:"black",
          justifySelf: 'end',
          marginRight: '80px',
          border: '2px solid #ccc',
          // backgroundColor: '#9A2935',
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          
        }}
      >
        {isExpanded ? (
          <ExpandLessIcon style={{ fontSize: 40, color: 'white',backgroundColor: '#9A2935', borderRadius: '8px', }} />
        ) : (
          <ExpandMoreIcon style={{ fontSize: 40, color: 'white',backgroundColor: '#9A2935', borderRadius: '8px', }} />
        )}

         {/* Display the label for the selected category or "All" if none is selected */}
         <span
          style={{
            color: '#9A2935',
            fontSize: '16px',
            fontWeight: 'bold',
            fontFamily: 'Manrope',
            
          }}
        >
          {selectedCategory
            ? selectedCategory
                .split('-')
                .join(' ')
                .replace(/\b\w/g, (c) => c.toUpperCase())
            : 'All'}
        </span>
      </div>

      {/* Dropdown menu */}
      {isExpanded && (
        <div
          style={{
            display: 'grid',
            width: '200px',
            position: 'absolute',
            right: '0px',
            gridTemplateColumns: 'repeat(1, 1fr)', // Two-column layout
            gap: '25px',
            justifyContent: 'center',
            alignItems: 'center',
            marginRight: '80px',
            padding: '20px',
            border: '1px solid #ccc',
            borderRadius: '8px',
            backgroundColor: '#f9f9f9',
            transition: 'transform 200s ease, opacity 1s ease', // Smooth animation
          }}
        >
          <label style={{ display: 'flex', alignItems: 'center' }}>
            <input
              type="checkbox"
              onChange={handleAllToggle}
              checked={!selectedCategory} // "All" is selected when no category is selected
              style={{ marginRight: '8px', accentColor: '#9A2935', }}
            />
            All
          </label>
          {categories.map((category) => (
            <label
              key={category}
              style={{ display: 'flex', alignItems: 'center' }}
            >
              <input
                type="checkbox"
                onChange={() => handleCategorySelect(category)}
                checked={selectedCategory === category}
                style={{ marginRight: '8px', accentColor: '#9A2935', }}
              />
              {category
                .split('-')
                .join(' ')
                .replace(/\b\w/g, (c) => c.toUpperCase())}
            </label>
          ))}
        </div>
      )}

      {/* Card display */}
      <div className="card-container">
        {filteredCards.map((card, index) => (
          <CardItem
            key={index}
            image={card.image}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
};

export default CardList;
