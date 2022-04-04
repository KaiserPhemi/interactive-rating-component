// react libraries
import React from "react";

// review comopnent
const Review = () => {
  return (
    <div className="review-container">
      <section className="img-container">
        <img src="images/icon-star.svg" />
      </section>
      <h2>How did we do? </h2>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className="rendered-num">
        {reviewCount &&
          reviewCount.map((num, index) => (
            <ReviewListItem
              key={index}
              item={num}
              activeClass={active === num ? "active-item" : ""}
              onClick={() => handleClick(num)}
            />
          ))}
      </div>
      <Submit onClick={handleSubmit} />
    </div>
  );
};

export default Review;
