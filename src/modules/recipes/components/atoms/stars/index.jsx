import React from 'react';
import { Star, StarHalf } from 'phosphor-react';

const Stars = ({ value = 0 }) => {
  const maxStars = 5;
  const stars = [];

  for (let i = 1; i <= maxStars; i++) {
    if (i <= Math.floor(value)) {
      stars.push(<Star key={i} size={20} weight="fill" color="#facc15" />);
    } else if (i - value <= 0.5) {
      stars.push(<StarHalf key={i} size={20} weight="fill" color="#facc15" />);
    } else {
      stars.push(<Star key={i} size={20} weight="regular" color="#e5e7eb" />);
    }
  }

  return <div className="flex items-center gap-1">{stars}</div>;
};

export default Stars;
