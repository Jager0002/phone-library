import React from "react";
import UseReview from "../../hook/UseReview";
import Review from "../Review/Review";

const Reviews = () => {
  const reviews = UseReview();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16 w-3/4 mx-auto">
      {reviews.map((review) => (
        <div key={review.id}>
          <Review review={review}></Review>
        </div>
      ))}
    </div>
  );
};

export default Reviews;
