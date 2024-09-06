import { createContext, useState } from "react";

const BookingContext = createContext();

export const BookingProvider = ({children}) => {
    
    const [cinemaId, setCinemaId] = useState(null)
    const [movieId, setMovieId] = useState(null)
    const [dateId, setDateId] = useState(null)
    const [timeId, setTimeId] = useState(null)

    return (
        <BookingContext.Provider value={{
            cinemaId,
            setCinemaId,
            movieId,
            setMovieId,
            dateId,
            setDateId,
            timeId,
            setTimeId
        }}>
            { children }
        </BookingContext.Provider>
    )
}

export default BookingContext