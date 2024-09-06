import { useState, useEffect, useContext } from "react";
import CityContext from "../../context/CityContext";
import { getCinemas, getMovies, getDates, getTime } from "@apis/booking";
import BookingContext from "../../context/BookingContext";

export default function () {
    const [cinemasDropdown, setCinemasDropdown] = useState([]);
    const [moviesDropdown, setMoviesDropdown] = useState([]);
    const [dateDropdown, setDateDropdown] = useState([]);
    const [timeDropdown, setTimeDropdown] = useState([]);

    const { cityId } = useContext(CityContext);

    const citySelectionWarning = !cityId && (
        <div className="my-2 text-center  text-red-800 font-bold">City not selected</div>
    );

    const {
        cinemaId,
        setCinemaId,
        movieId,
        setMovieId,
        dateId,
        setDateId,
        timeId,
        setTimeId,
    } = useContext(BookingContext);

    const fetchOptions = (fetchFn, setDropdown, dependencies = []) => {
        const data = dependencies.every(Boolean) ? fetchFn(...dependencies) : [];
        console.log("data", data);
        const options = data?.map(d => (
            <option key={d.id} value={d.id}>
                {d.name || d.slot || d.date}
            </option>
        ));
        setDropdown(options)
    }    

    const handleSetId = (setFunc, selectId, selectedValue) => {
        setFunc(selectedValue)
        if(!selectedValue){
            switch(selectId){
                case "cinema":
                    setMovieId(null)
                case "movie":
                    setDateId(null)
                case "date":
                    setTimeId(null)
                    break;
                default:
                    break;
            }
        }
    }

    useEffect(() => {
        fetchOptions(getCinemas, setCinemasDropdown, [cityId]);
    }, [cityId]);

    useEffect(() => {
        fetchOptions(getMovies, setMoviesDropdown, [cinemaId])
        
    }, [cinemaId]);

    useEffect(() => {
        fetchOptions(getDates, setDateDropdown, [cinemaId, movieId])
    }, [cinemaId, movieId]);

    useEffect(() => {
        fetchOptions(getTime, setTimeDropdown, [cinemaId, movieId, dateId])
    }, [cinemaId, movieId, dateId]);

    const buyButton = (
        !cityId ||
        !cinemaId ||
        !movieId ||
        !dateId ||
        !timeId
    ) ? null:(
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded sm:self-stretch">
            Buy
        </button>
    );


    return (
        <>
            <div className="sticky w-full bottom-0 bg-white shadow-md rounded-lg p-4 sm:p-6 mx-auto mt-8">
                { citySelectionWarning }
                <div className="flex flex-col sm:flex-row sm:items-end sm:space-x-4 space-y-4 sm:space-y-0">
                    <div className="flex-1 min-w-0">
                        <label
                            htmlFor="cinema"
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            Select Cinema
                        </label>
                        <select
                            id="cinema"
                            className="w-full bg-gray-100 border border-gray-300 text-gray-700 py-2 px-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            onChange={(e) => handleSetId(setCinemaId, "cinema", parseInt(e.target.value))}
                            disabled={!cityId}
                        >
                            <option>Select a Cinema</option>
                            {cinemasDropdown}
                        </select>
                    </div>

                    <div className="flex-1 min-w-0">
                        <label
                            htmlFor="movie"
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            Select Movie
                        </label>
                        <select
                            id="movie"
                            className="w-full bg-gray-100 border border-gray-300 text-gray-700 py-2 px-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            onChange={(e) => handleSetId(setMovieId, "movie", parseInt(e.target.value))}
                            disabled={!cinemaId}
                        >
                            <option>Select a Movie</option>
                            {moviesDropdown}
                        </select>
                    </div>

                    <div className="flex-1 min-w-0">
                        <label
                            htmlFor="date"
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            Select Date
                        </label>
                        <select
                            id="date"
                            className="w-full bg-gray-100 border border-gray-300 text-gray-700 py-2 px-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            onChange={(e) => handleSetId(setDateId, "date", parseInt(e.target.value))}
                            disabled={!cinemaId || !movieId}
                        >
                            <option>Select a Date</option>
                            {dateDropdown}
                        </select>
                    </div>

                    <div className="flex-1 min-w-0">
                        <label
                            htmlFor="time"
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            Select Time
                        </label>
                        <select
                            id="time"
                            className="w-full bg-gray-100 border border-gray-300 text-gray-700 py-2 px-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            onChange={(e) => handleSetId(setTimeId, "time", parseInt(e.target.value))}
                            disabled={!cinemaId || !movieId || !dateId}
                        >
                            <option>Select a Time</option>
                            {timeDropdown}
                            </select>
                    </div>
                   { buyButton }
                </div>
            </div>
        </>
    );
}
