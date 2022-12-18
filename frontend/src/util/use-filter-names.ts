import {useEffect, useState} from "react";

const useFilterNames = (nameData: {id: string, name: string, link: string}[], breedInputData: string) => {
    const [filteredData, setFilteredData] = useState<{ id: string; name: string, link: string}[]>([]);
    useEffect(() => {
        setFilteredData(() => {
            return nameData.filter((cat) => {
                return cat.name.toLowerCase().includes(breedInputData.toLowerCase());
            });
        });
    }, [breedInputData, nameData]);
    return filteredData
}

export default useFilterNames