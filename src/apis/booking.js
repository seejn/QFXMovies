import citiesData from '@data/cities.json';
import cinemasData from '@data/cinemas.json';
import moviesData from '@data/movies.json';
import cinemaInCity from '@data/cinema_in_city.json';
import availableShows from '@data/available_show.json';
import dates from '@data/date.json';
import time from '@data/time.json';

export const getAllCities = () => {
    const cities = citiesData.cities.map(city => ({id: city.id, name: city.name}));
    return cities;
}

export const getCity = (id) => {
    const city = citiesData.cities.find(city => city.id === id);
    return city;
}

export const getCinemas = (cityId) => {
    const cinemas = cinemaInCity.available_cinemas.filter(cinema => cinema.city_id === cityId);
    const cinemaCollection = []

    cinemas.forEach(cinema => {
        let cinemaId = cinema.cinema_id;
        cinemaCollection.push(
            cinemasData.cinemas.find(cinema => cinema.id === cinemaId)
        );
    })
    return cinemaCollection;
}

export const getMovies = (cinemaId) => {
    const shows = availableShows.shows.filter(show => show.cinema_id === cinemaId)
    const movieCollection = []

    shows.forEach(show => {
        let movieId = show.movie_id;
        movieCollection.push(
            moviesData.movies.find(movie => movie.id === movieId)
        );
    })
    console.log(movieCollection);
    return movieCollection;
}

export const getDates = (cinemaId, movieId) => {
    const shows = availableShows.shows.filter(show => (
        show.movie_id === movieId &&
        show.cinema_id === cinemaId
    ));
    const datesCollection = []

    shows.forEach(show => {
        let dateId = show.date_id;
        datesCollection.push(
            dates.date.find(date => date.id === dateId)
        )
    })
    return datesCollection;
}


export const getTime = (cinemaId, movieId, dateId) => {
    const shows = availableShows.shows.filter(show => (
        show.cinema_id === cinemaId &&
        show.movie_id === movieId &&
        show.date_id === dateId
    ));
    const timeCollection = []

    shows.forEach(show => {
        let timeId = show.time_id;
        timeCollection.push(
            time.time.find(time => time.id === timeId)
        )
    })
    return timeCollection;
}