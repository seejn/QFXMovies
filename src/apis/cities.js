import axios from "axios";
import baseUrl from "./config/baseUrl.js";

export const getAllCities = async () => {
    try{    
        const response = await axios({
            url: `${baseUrl}/cities`,
            method: "GET"
        });
        return response.data;
    }catch(error){
        console.log("Error while getting all cities from cities.js", error);
    }
}

export const addCity = async (data) => {
    try{
        const response = await axios({
            url: `${baseUrl}/cities`,
            method: "POST",
            data: data,
            headers: {
                Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3MzIyMmFkNDM4MmQ0ZWE2MWRiZjI5ZCIsImVtYWlsIjoic2Vlam5tYWhhcmphbkBnbWFpbC5jb20iLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3MzE1MTM4NTEsImV4cCI6MTczMTUxNzQ1MX0.dEwUOVYxU0n50j_ja64l4Bxut0nURcKN-iCAiYDkJhk"
            }
        });
        alert(response.data.message);
        return response.data.data;
    }catch(error){
        console.log(error);
        throw error;
    }
}

export const updateCity = async (id, data) => {
    try{
        const response = await axios({
            url: `${baseUrl}/cities/${id}`,
            method: "PATCH",
            data: data,
            headers: {
                Authorization: `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`
            }
        });
        alert(response.data.message);
        return response.data.data;
    }catch(error){
        console.log(error);
        throw error;
    }
}

export const deleteCity = async (id) => {
    try{
        const response = await axios({
            url: `${baseUrl}/cities/${id}`,
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`
            }
        });
        alert(response.data.message);
    }catch(error){
        console.log(error);
        throw error;
    }
}