import React, {useState} from "react";
import classes from "./BreedSearch.module.css"
import useFilterNames from "../../util/use-filter-names";
import {useLoaderData} from "react-router-dom";

type BreedName = {
  id: string;
  name: string;
  vcahospitals_url: string;
  cfa_url: string;
  vetstreet_url: string;
};

const BreedSearch: React.FC = () => {
  const [searchFocused, setSearchFocused] = useState(false);
  const [breedInputData, setBreedInputData] = useState("");

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBreedInputData(e.target.value);
  };

  const nameData = useLoaderData() as BreedName[]

  const filteredData = useFilterNames(nameData, breedInputData);

  let searchContent = null;

  if (filteredData.length > 0) {
    searchContent = (
      <div className={classes.searchCard}>
        {filteredData.map((cat) => {
          const link = `/breed/?breedId=${cat.id}`;
          return (
            <a key={cat.id} href={link} className={classes.searchCardLink}>
              {cat.name}
            </a>
          );
        })}
      </div>
    );
  }

  return (
    <>
      <div className={classes.inputIcons}>
        <input
            className={classes.breedInput}
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
