import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const LikeButton = () => {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <div
      onClick={toggleLike}
      style={{
        position: "absolute",
        top: "10px",
        right: "10px",
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        borderRadius: "50%",
        padding: "8px",
        cursor: "pointer",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Subtle shadow for floating effect
        zIndex: 10,
      }}
    >
      {liked ? (
        <FaHeart style={{ color: "red", fontSize: "18px" }} />
      ) : (
        <FaRegHeart style={{ color: "#6c757d", fontSize: "18px" }} />
      )}
    </div>
  );
};

export default LikeButton;
