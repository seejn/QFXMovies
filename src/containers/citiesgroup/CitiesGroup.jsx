import Button from "@components/buttons/Button";
import { useContext } from "react";
import CityContext from "@context/CityContext";

import { getAllCities } from "@apis/booking";

export default function () {
    const cities = getAllCities();
    const {cityId, setCityId} = useContext(CityContext)
    
    const citiesGroup = cities.map((city, index) => (
        <div key={city.id} onClick={() => setCityId(city.id)}>
            <Button >{city.name}</Button>
        </div>
    ));
    
    return (
        <>
            <div className="max-w-lg mx-auto p-5 bg-white border border-gray-300 rounded-lg shadow-md">
                <h2 className="text-lg font-bold mb-4 text-center">
                    Select a City
                </h2>
                <div className="flex flex-wrap justify-center gap-4 p-5">
                    {citiesGroup}
                </div>
            </div>
        </>
    );
}
