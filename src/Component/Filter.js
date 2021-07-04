import React from "react";
import { Rate } from "antd";

export const Filter = ({ ratevalue, setratevalue, search }) => {
  const ratingSetValue = (newRating) => {
    setratevalue(newRating);
  };
  return (
    <div className="header">
      <input
        type="text"
        onChange={(e) => search(e.target.value)}
        placeholder="Movie Search ..."
      ></input>
      <br />
      <Rate
        style={{ fontSize: 40 }}
        value={ratevalue}
        onChange={ratingSetValue}
      />
    </div>
  );
};
