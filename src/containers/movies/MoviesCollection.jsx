import Movie from "../../components/cards/Movie";

export default function () {

    return (
        <section className="bg-gray-100 py-8">
            <div className="container mx-auto px-4">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                    Now Playing
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    <Movie />
                </div>
            </div>
        </section>
    );
}
