import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import UseReview from "../../hook/UseReview";
import Review from "../Review/Review";
import "./Home.css";

const Home = () => {
  const reviews = UseReview();
  const navigate = useNavigate();
  return (
    <>
      <div>
        <div className="items-center text-center grid grid-cols-1 md:grid-cols-2 gap-3 w-[90%] mx-auto mt-20">
          <div>
            <h2 className="font-bold text-6xl my-4">MacBook Air</h2>
            <p className="text-xl">
              Our thinnest, lightest notebook, completely transformed by the
              Apple M1 chip. CPU speeds up to 3.5x faster. GPU speeds up to 5x
              faster. An advanced Neural Engine for up to 9x faster machine
              learning. The longest battery life ever in a MacBook Air. And a
              silent, fanless design. This much power has never been this ready
              to go.
            </p>
          </div>
          <div className="justify-self-center">
            <img
              src="https://cdn.eraspace.com/pub/media/catalog/product/i/b/ibx_macbook_air_2020_space_gay_1_1-1_4.jpg"
              alt=""
            />
          </div>
        </div>
        <h2 className="text-center text-4xl mt-60">Customer Review</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16 px-24 mx-auto">
          {reviews.map((review, index) =>
            index > 2 ? undefined : (
              <div key={review.id}>
                <Review review={review}></Review>
              </div>
            )
          )}
        </div>
        <div className="text-center m-5 ">
          <button
            onClick={() => navigate("/Reviews")}
            className="mt-8 py-2 px-4 bg-zinc-500 text-white font-medium rounded"
          >
            See all Reviews
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
