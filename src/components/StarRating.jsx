import React, { useState } from "react";
import Star from "./Star";

const containerStyle = {
  display: "flex",
  alignItems: "center",
  gap: "16px",
};

const StarContainerStyle = {
  display: "flex",
  gap: "4px",
};

const StarRating = ({
  maxRating,
  color = "#fcc419",
  size = 48,
  defaultRating = 0,
}) => {
  const [rating, setRating] = useState(0);
  const [tempRating, setTempRating] = useState(defaultRating);
  const textStyle = {
    lineHight: "1",
    margin: "0",
    color,
    fontSize: `${size / 1.5}px`,
  };

  return (
    <div style={containerStyle}>
      <div style={StarContainerStyle}>
        {Array.from({ length: maxRating }, (_, i) => (
          <Star
            key={i}
            onClick={() => setRating(i + 1)}
            rating={rating}
            full={tempRating ? tempRating >= i + 1 : rating >= i + 1}
            onHoverIn={() => setTempRating(i + 1)}
            onHoverOut={() => setTempRating(0)}
            color={color}
            size={size}
          />
        ))}
      </div>
      <p style={textStyle}>{tempRating || rating || ""}</p>
    </div>
  );
};

export default StarRating;
