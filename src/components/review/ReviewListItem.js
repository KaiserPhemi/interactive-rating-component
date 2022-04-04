// react libraries
import React from "react";

// styles
import "./_review.scss";

/**
 *
 * @param {item} param0
 * @param {activeClass} param0
 * @returns
 */
const ReviewListItem = ({ item, activeClass, onClick }) => {
  return (
    <div className={`review-item ${activeClass}`} onClick={onClick}>
      {item}
    </div>
  );
};

export default ReviewListItem;
