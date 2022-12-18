import { useEffect, useState } from "react";

const useFilterNames = (
  nameData: {
    id: string;
    name: string;
    vcahospitals_url: string;
    cfa_url: string;
    vetstreet_url: string;
  }[],
  breedInputData: string
) => {
  const [filteredData, setFilteredData] = useState<
    {
      id: string;
      name: string;
      vcahospitals_url: string;
      cfa_url: string;
      vetstreet_url: string;
    }[]
  >([]);
  useEffect(() => {
    setFilteredData(() => {
      return nameData.filter((cat) => {
        return cat.name.toLowerCase().includes(breedInputData.toLowerCase());
      });
    });
  }, [breedInputData, nameData]);
  return filteredData;
};

export default useFilterNames;
