export default function () {
    return (
        <>
            <footer class="bg-gray-800 text-white py-8">
                <div class="container mx-auto px-4">
                    <div class="flex flex-col md:flex-row justify-between items-center">
                        <div class="mb-4 md:mb-0">
                            <div class="flex items-center mb-2">
                                <img
                                    src="https://via.placeholder.com/50"
                                    alt="QFX Movies Logo"
                                    class="h-10 w-10 mr-3"
                                />
                                <span class="text-lg font-bold">
                                    QFX Movies
                                </span>
                            </div>
                            <p class="text-sm text-gray-400">
                                Experience movies like never before at QFX
                                Movies.
                            </p>
                        </div>

                        <div class="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
                            <a
                                href="#"
                                class="text-gray-400 hover:text-white text-sm"
                            >
                                Home
                            </a>
                            <a
                                href="#"
                                class="text-gray-400 hover:text-white text-sm"
                            >
                                About Us
                            </a>
                            <a
                                href="#"
                                class="text-gray-400 hover:text-white text-sm"
                            >
                                Contact
                            </a>
                            <a
                                href="#"
                                class="text-gray-400 hover:text-white text-sm"
                            >
                                Privacy Policy
                            </a>
                        </div>

                        <div class="flex space-x-4 mt-4 md:mt-0">
                            <a href="#" class="text-gray-400 hover:text-white">
                                <svg
                                    class="h-5 w-5"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M22.5 0h-21A1.5 1.5 0 000 1.5v21A1.5 1.5 0 001.5 24h11.235v-9.32h-3.14v-3.64h3.14V8.735c0-3.1 1.89-4.785 4.654-4.785 1.324 0 2.463.1 2.795.145v3.24l-1.92.001c-1.506 0-1.798.717-1.798 1.77V11.04h3.595l-.468 3.64h-3.127V24h6.128A1.5 1.5 0 0024 22.5v-21A1.5 1.5 0 0022.5 0z" />
                                </svg>
                            </a>
                            <a href="#" class="text-gray-400 hover:text-white">
                                <svg
                                    class="h-5 w-5"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M24 4.56c-.885.392-1.836.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.723-.951.564-2.005.974-3.127 1.194C19.15 2.905 17.977 2 16.616 2c-2.688 0-4.868 2.18-4.868 4.868 0 .382.044.754.128 1.111C7.728 7.867 4.1 5.894 1.671 2.904c-.418.716-.656 1.548-.656 2.429 0 1.676.854 3.154 2.153 4.018-.793-.025-1.541-.243-2.192-.608v.061c0 2.341 1.666 4.292 3.875 4.734-.406.111-.833.171-1.275.171-.311 0-.615-.029-.91-.086.613 1.913 2.398 3.307 4.507 3.346-1.654 1.295-3.737 2.067-5.998 2.067-.39 0-.773-.023-1.153-.067 2.137 1.371 4.677 2.171 7.406 2.171 8.889 0 13.752-7.364 13.752-13.752l-.016-.626C22.544 6.393 23.37 5.523 24 4.56z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div class="text-center text-gray-400 mt-6 text-sm">
                        &copy; 2024 QFX Movies. All rights reserved.
                    </div>
                </div>
            </footer>
        </>
    );
}
