import { useEffect, useState } from "react";
import axios from "axios";

const useCatNames = () => {
  const [nameData, setNameData] = useState<
    {
      id: string;
      name: string;
      vcahospitals_url: string;
      cfa_url: string;
      vetstreet_url: string;
    }[]
  >([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/names")
      .then((res) => {
        console.log(res);
        setNameData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return nameData;
};

export default useCatNames;
