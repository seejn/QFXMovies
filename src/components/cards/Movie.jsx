export default function () {
    return (
        <>
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <img
                    src="https://via.placeholder.com/300x450"
                    alt="Movie Poster"
                    className="w-full h-56 object-cover"
                />
                <div className="p-4">
                    <h3 className="text-lg font-bold text-gray-900">
                        Movie Title 1
                    </h3>
                    <p className="text-sm text-gray-600 mb-2">
                        Release Date: August 28, 2024
                    </p>
                    <a
                        href="#"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-block"
                    >
                        Book Now
                    </a>
                </div>
            </div>
        </>
    );
}
