import React, { useState } from "react";
import Layout from "../../layouts/Admin/Layout";
import FormView from "../../components/forms/Form";

import { getAllCities, addCity } from "../../apis/cities";
import { useEffect } from "react";

const CitiesPage = () => {
    const [cities, setCities] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [newCity, setNewCity] = useState("");

    useEffect(() => {
        const fetchCities = async () => {
            try{
                const data = await getAllCities();
                setCities([...data]);
            }catch(error){
                console.error("Error while fetching cities", error);
            }
        }   
        fetchCities();
    },[]);

    const handleAddCity = async (e) => {
        e.preventDefault();
        if (newCity) {
            const newCityObj = {
                name: newCity,
            };
            try{
                const data = await addCity(newCityObj)
                setCities([...cities, data]);
            }catch(error){
                alert("Something went wrong");
            }

            setNewCity("");
            setShowForm(false);
        }
    };
    return (
        <>
            <Layout>
                <div className="">
                    {/* Header */}
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-3xl font-semibold">
                            Available Cities
                        </h2>
                        <button
                            onClick={() => setShowForm(true)}
                            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                        >
                            Add City
                        </button>
                    </div>

                    {/* City Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {cities.map((city) => (
                            <div
                                key={city?.id || 1}
                                className="bg-white p-4 rounded shadow hover:shadow-lg transition"
                            >
                                <h3 className="text-xl font-semibold">
                                    {city?.name || "random city"}
                                </h3>
                            </div>
                        ))}
                    </div>

                    {/* Add City Form Modal */}
                    {showForm && (
                        <FormView handleSubmit={handleAddCity} submitText="Add City" setShowForm={setShowForm}>
                            <input
                                type="text"
                                placeholder="City Name"
                                value={newCity}
                                onChange={(e) => setNewCity(e.target.value)}
                                className="w-full p-2 border rounded mb-4"
                            />
                        </FormView>
                    )}
                </div>
            </Layout>
        </>
    );
};

export default CitiesPage;
