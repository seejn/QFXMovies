export default function () {
    return (
        <>
            <header class="bg-gray-800 p-4">
                <div class="container mx-auto flex justify-between items-center">
                    <div class="flex items-center">
                        <img
                            src="https://via.placeholder.com/50"
                            alt="QFX Movies Logo"
                            class="h-10 w-10 mr-3"
                        />
                        <span class="text-white text-xl font-bold">
                            QFX Movies
                        </span>
                    </div>

                    <nav class="flex items-center space-x-4">
                        <a
                            href="#"
                            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        >
                            Sign In
                        </a>
                    </nav>
                </div>
            </header>
        </>
    );
}
