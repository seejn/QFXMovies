import { useState, useEffect } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

import Layout from "../../layouts/Admin/Layout";
import FormView from "../../components/forms/Form";

import useCities from "../../hooks/admin/useCities";

const CityCard = ({ city, handleEdit, handleDelete }) => {
    const [updatedCity, setUpdatedCity] = useState(city.name);
    const [showEditForm, setShowEditForm] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        await handleEdit(city.id, {name: updatedCity});
        setShowEditForm(false);
    }

    const editForm = showEditForm && (
        <FormView 
            submitText={"Save"}
            setShowForm={setShowEditForm}
            handleSubmit={handleSubmit}
        >
            <input
                type="text"
                placeholder="New City Name"
                className="w-full p-2 border rounded mb-4"
                defaultValue={city.name}
                onChange={(e) => setUpdatedCity(e.target.value)}
            />
        </FormView>
    );

    return (
        <>
            {editForm}
            <div
                key={city?.id || 1}
                className="bg-white p-4 rounded shadow hover:shadow-lg transition"
            >
                <h3 className="text-xl font-semibold">
                    {city?.name || "random city"}
                </h3>
                <div className="mt-2 flex space-x-4">
                    <FaEdit
                        className="text-blue-500 cursor-pointer hover:text-blue-600 transition"
                        onClick={() => setShowEditForm(true)}
                        title="Edit"
                        size={20} // Adjust size as needed
                    />
                    <FaTrash
                        className="text-red-500 cursor-pointer hover:text-red-600 transition"
                        onClick={() => handleDelete(city?.id)}
                        title="Delete"
                        size={20} // Adjust size as needed
                    />
                </div>
            </div>
        </>
    );
};

const CitiesPage = () => {
    const {
        cities,
        newCity,
        setNewCity,
        showForm,
        setShowForm,
        fetchCities,
        handleAdd,
        handleEdit,
        handleDelete,
    } = useCities();

    useEffect(() => {
        fetchCities();
    }, []);

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
                            <CityCard
                                key={city.id}
                                city={city}
                                handleEdit={handleEdit}
                                handleDelete={handleDelete}
                            />
                        ))}
                    </div>

                    {/* Add City Form Modal */}
                    {showForm && (
                        <FormView
                            handleSubmit={handleAdd}
                            submitText="Add City"
                            setShowForm={setShowForm}
                        >
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
