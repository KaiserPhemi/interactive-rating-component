// react libraries
import React, { useState } from "react";

// components
import Footer from "./components/footer/Footer";
import Submit from "./components/button/Submit";
import ReviewListItem from "./components/review/ReviewListItem";
import ThankYou from "./components/page/ThankYou";

// styles
import "./_app.scss";

// main app component
const App = () => {
  const reviewCount = [1, 2, 3, 4, 5];
  const [active, setActive] = useState();
  const [rating, setRating] = useState();
  const [checkSubmit, setCheckSubmit] = useState(false);

  /**
   * Handles review selected
   * @param {number} num
   */
  const handleClick = (num) => {
    setActive(num);
    setRating(num);
  };

  /**
   * hanldes form submission
   */
  const handleSubmit = () => {
    if (rating > 0) setCheckSubmit(true);
  };

  return (
    <div className="main-app">
      {checkSubmit && rating > 0 ? (
        <ThankYou selected={rating} />
      ) : (
        <div className="review-container">
          <section className="img-container">
            <img src="images/icon-star.svg" />
          </section>
          <h2>How did we do? </h2>
          <p>
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
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
      )}
      <Footer />
    </div>
  );
};

export default App;
