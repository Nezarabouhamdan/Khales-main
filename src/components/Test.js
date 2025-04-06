import React, { useState } from 'react';
import './s.css';

const ServiceItem = ({ title, images = [] }) => {
  const [hover, setHover] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  // Computes a position offset for each image so they’re arranged around the cursor
  const getPositionForIndex = (index, total) => {
    // Place images evenly around a circle
    const angle = (index / total) * Math.PI * 2;
    const radius = 30; // Adjust this radius for more/less separation
    return {
      offsetX: Math.cos(angle) * radius,
      offsetY: Math.sin(angle) * radius,
    };
  };

  return (
    <div
      className="service-item"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      {!hover && <div className="service-title">{title}</div>}
      {hover && (
        <>
          {images.map((img, index) => {
            const pos = getPositionForIndex(index, images.length);
            return (
              <img
                key={index}
                src={img}
                alt={`${title} ${index + 1}`}
                className="service-image"
                style={{
                  top: mousePos.y + pos.offsetY,
                  left: mousePos.x + pos.offsetX,
                }}
              />
            );
          })}
        </>
      )}
    </div>
  );
};

const ServicesGrid = ({ items }) => {
  return (
    <div className="services-grid">
      {items.map((item, idx) => (
        <ServiceItem key={idx} title={item.title} images={item.images} />
      ))}
    </div>
  );
};

export default ServicesGrid;
