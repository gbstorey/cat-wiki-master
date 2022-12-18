import React, { useState } from "react";
import classes from "../landing_page/Hero.module.css";
import useCatNames from "../util/use-cat-names";
import useFilterNames from "../util/use-filter-names";

const BreedSearch = () => {
  const [searchFocused, setSearchFocused] = useState(false);
  const [breedInputData, setBreedInputData] = useState("");

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBreedInputData(e.target.value);
  };

  const nameData = useCatNames();
  const filteredData = useFilterNames(nameData, breedInputData);

  let searchContent = null;

  if (filteredData.length > 0) {
    searchContent = (
      <div className={classes.searchCard}>
        {filteredData.map((cat) => {
          return (
              <a key={cat.id} href={cat.link} target={"_blank"}>{cat.name}</a>
          );
        })}
      </div>
    );
  }

  return (
    <>
      <div className={classes.inputIcons}>
        <input
          type={"text"}
          name={"breed"}
          id={"breed"}
          value={breedInputData}
          placeholder={"Enter your breed"}
          onFocus={() => setSearchFocused(true)}
          onBlur={() => setTimeout(() => setSearchFocused(false), 500)}
          onChange={onChangeHandler}
        />
      </div>
      {searchFocused ? searchContent : null}
    </>
  );
};

export default BreedSearch;
