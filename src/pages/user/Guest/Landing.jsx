import CitiesGroup from "@containers/citiesgroup/CitiesGroup";
import Navigation from "@components/navigation/Navigation";
import MoviesCollection from "@containers/movies/MoviesCollection";
import Footer from "@components/footer/Footer";
import Book from "@containers/bookmovie/Book";

const Landing = () => {
    return (
        <>
            <CitiesGroup />
            <Navigation />
            <MoviesCollection />
            <Footer />
            <Book />
        </>
    );
}

export default Landing;