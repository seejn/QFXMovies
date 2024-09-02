import CitiesGroup from "@containers/citiesgroup/CitiesGroup";
import Navigation from "@containers/navigation/Navigation";
import MoviesCollection from "@containers/movies/MoviesCollection";
import Footer from "@components/footer/Footer";
import Book from "@containers/bookmovie/Book";

function App() {
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

export default App;
