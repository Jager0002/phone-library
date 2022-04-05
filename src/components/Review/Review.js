import React from "react";

const Review = ({ review }) => {
  const { name, details, ratings, title, image } = review;
  return (
    <div className="shadow-lg p-8 min-h-[600px] mt-10">
      <div className="flex justify-center">
        <img className="w-40 rounded-full" src={image} alt="" />
      </div>
      <div>
        <h2 className="font-semibold my-4">{name}</h2>
        <h2>Rating: {ratings}</h2>
        <h2 className="text-2xl my-4">{title}</h2>
        <h2>{details.length > 200 ? details.slice(0, 200) : details}</h2>
        <span className="font-semibold">...read more</span>
      </div>
    </div>
  );
};

export default Review;
