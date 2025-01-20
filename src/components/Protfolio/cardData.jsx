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
    <div style={{position:"relative"}}>
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
          cursor: 'pointer',
          textAlign: 'center',
          justifySelf: 'end',
          marginRight: '100px',
          border: '2px solid transparent',
          backgroundColor: '#9A2935',
          borderRadius: '100%',
        }}
      >
        {isExpanded ? (
          <ExpandLessIcon style={{ fontSize: 48, color: 'white' }} />
        ) : (
          <ExpandMoreIcon style={{ fontSize: 48, color: 'white' }} />
        )}
      </div>

      {/* Dropdown menu */}
      {isExpanded && (
        <div
          style={{
            display: 'grid',
            width:"240px",
            position: 'absolute',
            right:"0px",
            gridTemplateColumns: 'repeat(1, 1fr)', // Two-column layout
            gap: '10px',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '20px',
            padding: '10px',
            border: '1px solid #ccc',
            borderRadius: '8px',
            backgroundColor: '#f9f9f9',
          }}
        >
          <label style={{ display: 'flex', alignItems: 'center' }}>
            <input
              type="checkbox"
              onChange={handleAllToggle}
              checked={!selectedCategory} // "All" is selected when no category is selected
              style={{ marginRight: '8px' }}
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
                style={{ marginRight: '8px' }}
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
