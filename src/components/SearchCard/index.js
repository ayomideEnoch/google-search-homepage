/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import "./searchcard.scss";
const SearchCard = ({data}) => {
  const { source, title, description, tags, link, source_short_name, short_title} = data;
  return (
    <div className="search-card">
      <p>
        {source} › {source_short_name} › {short_title} <span>&#9660;</span>
      </p>
      <a href={link} className="search-card__link">
        {title}
      </a>
      <p>
       {description}
      </p>
      <div className="search-card__tags">
        {tags.map(({title, link}) => <a href={link}>‎{title}</a>)}
      </div>
    </div>
  );
};

export default SearchCard;
