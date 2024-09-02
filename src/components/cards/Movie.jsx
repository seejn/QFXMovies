export default function () {
    return (
        <>
            <div class="bg-white shadow-md rounded-lg overflow-hidden">
                <img
                    src="https://via.placeholder.com/300x450"
                    alt="Movie Poster"
                    class="w-full h-56 object-cover"
                />
                <div class="p-4">
                    <h3 class="text-lg font-bold text-gray-900">
                        Movie Title 1
                    </h3>
                    <p class="text-sm text-gray-600 mb-2">
                        Release Date: August 28, 2024
                    </p>
                    <a
                        href="#"
                        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-block"
                    >
                        Book Now
                    </a>
                </div>
            </div>
        </>
    );
}
