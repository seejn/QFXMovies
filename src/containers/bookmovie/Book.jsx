export default function () {
    return (
        <>
            <div className="sticky w-full bottom-0 bg-white shadow-md rounded-lg p-4 sm:p-6 mx-auto mt-8">
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
                        >
                            <option>Select a Cinema</option>
                            <option>Cinema 1</option>
                            <option>Cinema 2</option>
                            <option>Cinema 3</option>
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
                        >
                            <option>Select a Movie</option>
                            <option>Movie 1</option>
                            <option>Movie 2</option>
                            <option>Movie 3</option>
                        </select>
                    </div>

                    <div className="flex-1 min-w-0">
                        <label
                            htmlFor="date"
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            Select Date
                        </label>
                        <input
                            type="date"
                            id="date"
                            className="w-full bg-gray-100 border border-gray-300 text-gray-700 py-2 px-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
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
                        >
                            <option>Select a Time</option>
                            <option>10:00 AM</option>
                            <option>1:00 PM</option>
                            <option>4:00 PM</option>
                            <option>7:00 PM</option>
                        </select>
                    </div>

                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded sm:self-stretch">
                        Buy
                    </button>
                </div>
            </div>
        </>
    );
}
