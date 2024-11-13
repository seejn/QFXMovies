import { useState } from "react";

import { getAllCities, addCity, updateCity, deleteCity } from "@apis/cities";

const useCities = () => {
    const [cities, setCities] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [newCity, setNewCity] = useState("");

    const fetchCities = async () => {
        try {
            const data = await getAllCities();
            setCities([...data]);
        } catch (error) {
            console.error("Error while fetching cities", error);
        }
    };

    const handleAdd = async (e) => {
        e.preventDefault();
        if (newCity) {
            const newCityObj = {
                name: newCity,
            };
            try {
                const data = await addCity(newCityObj);
                setCities([...cities, data]);
            } catch (error) {
                alert("Something went wrong");
            }

            setNewCity("");
            setShowForm(false);
        }
    };

    const handleEdit = async (id, data) => {
        try{
            const responseData = await updateCity(id, data);
            
            setCities(
                cities.map(city => {
                    if(city.id === responseData?.id){
                         return responseData;
                    }
                    else{
                        return city;
                    } 
                })
            );
        }catch(error){
            console.log("Error while updating cityname", error);
            alert("Failed to update cityname");
        }
    }

    const handleDelete = async (id) => {
        try{
            const responseData = await deleteCity(id);
            setCities(cities.filter(city => city.id !== id));
        }catch(error){
            console.log("Error while deleting city", error);
            alert("Failed to delete city");
        }
    }

    return {
        cities,
        setCities,
        showForm,
        setShowForm,
        newCity,
        setNewCity,
        fetchCities,
        handleAdd,
        handleEdit,
        handleDelete,
    };
};

export default useCities;