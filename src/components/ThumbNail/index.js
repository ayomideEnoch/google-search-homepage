/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import "./thumbnail.scss";
const ThumbNail = ({data}) => {
  const { source, title, date, author, description} = data;
  return (
    <div className="thumbnail">
      <p>
        {source} › watch <span>&#9660;</span>
      </p>
      <a href="#" className="thumbnail__link">
        {title}
      </a>
      <div className="thumbnail__details">
        <img src="./shakes-1.jpg" alt="Shakes" />
        <div>
          <p>{date} - Uploaded by {author}</p>
          <p>
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThumbNail;