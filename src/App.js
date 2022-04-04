// react libraries
import React from "react";

// components
import Footer from "./components/Footer";

// main app component
const App = () => {
  const reviewCount = [1, 2, 3, 4, 5];
  return (
    <>
      <div className="review-container"></div>
      <h2>How did we do? </h2>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>{" "}
      <Button />
      <p>
        You selected out of 5 Thank you! We appreciate you taking the time to
        give a rating. If you ever need more support, don’t hesitate to get in
        touch!
      </p>
      <Footer />
    </>
  );
};

export default App;
