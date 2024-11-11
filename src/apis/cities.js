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
                Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3MzIyMmFkNDM4MmQ0ZWE2MWRiZjI5ZCIsImVtYWlsIjoic2Vlam5tYWhhcmphbkBnbWFpbC5jb20iLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3MzEzNDAxNDYsImV4cCI6MTczMTM0Mzc0Nn0.wjVdxt_BEV4FeQ0NfkB5u8nhp0jEdyBHoy40FNAdG8E"
            }
        });
        alert(response.data.message);
        return response.data.data;
    }catch(error){
        console.log(error);
        throw error;
    }
}