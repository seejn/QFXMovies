import Movie from "../../components/cards/Movie";

export default function () {

    return (
        <section class="bg-gray-100 py-8">
            <div class="container mx-auto px-4">
                <h2 class="text-2xl font-bold text-gray-800 mb-6 text-center">
                    Now Playing
                </h2>

                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    <Movie />
                </div>
            </div>
        </section>
    );
}
