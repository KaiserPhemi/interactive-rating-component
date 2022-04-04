// react libraries
import React from "react";

// styles
import "./_thank.scss";

const ThankYou = ({ selected }) => {
  return (
    <div className="submit-container">
      <section className="img-container">
        <img src="images/illustration-thank-you.svg" />
      </section>
      <section className="msg-container">
        You selected out {selected} of 5
      </section>
      <h2>Thank you! </h2>
      <p>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </div>
  );
};

export default ThankYou;
