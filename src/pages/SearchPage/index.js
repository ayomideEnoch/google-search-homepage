/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import AutoComplete from "../../components/Autocomplete";
import ThumbNail from "../../components/ThumbNail/";
import results from "../../mockdata/results";
import "./searchpage.scss";
import SearchCard from "../../components/SearchCard";
import { useParams } from "react-router";
const SearchPage = ({match}) => {
  const { searchValue } = match.params;
  console.log(searchValue);
  const renderOtherResults = () => {
    const { others } = results;
    return others.map(result => {
      if(result && result.type === 'video'){
        return <ThumbNail key={result.id} data={result}/>
      }
      return <SearchCard key={result.id} data={result} />
    })
  }
  return (
    <div className="search__details">
      <header className="search__details-header">
        <a href="#">
          <img src="./logo.png" alt="Logo" className="logo" />
        </a>
        <div className="autocomplete">
          <AutoComplete searchValue={searchValue} />
        </div>
        <nav className="search__nav">
          <div className="app-icon search__nav-item"></div>
          <div className="avatar search__nav-item"></div>
        </nav>
      </header>
      <div className="search__details__stories">
        <h2>Top Stories</h2>
        <div className="search__details__story">
          <img src="/shakes-1.jpg" alt="shakes" />
          <div className="search__details__story-body">
            <a href="#">
              Harper Beckham made a surprise stage appearance with one of her
              heroes – see photo
            </a>
            <p>Simply flying</p>
            <span>13 hours ago</span>
          </div>
        </div>
        <div className="search__details__story">
          <img src="/shakes-1.jpg" alt="shakes" />
          <div className="search__details__story-body">
            <a href="#">
              Harper Beckham made a surprise stage appearance with one of her
              heroes – see photo
            </a>
            <p>Simply flying</p>
            <span>13 hours ago</span>
          </div>
        </div>
        <div className="search__details__story">
          <img src="/shakes-1.jpg" alt="shakes" />
          <div className="search__details__story-body">
            <a href="#">
              Harper Beckham made a surprise stage appearance with one of her
              heroes – see photo
            </a>
            <p>Simply flying</p>
            <span>13 hours ago</span>
          </div>
        </div>
        {/* <p>More for hello</p> */}
      </div>
      <div className="container search__details__results">
          {renderOtherResults()}
      </div>
    </div>
  );
};

export default SearchPage;