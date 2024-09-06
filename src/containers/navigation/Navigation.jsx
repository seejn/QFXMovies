export default function () {
    return (
        <>
            <header className="bg-gray-800 p-4">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="flex items-center">
                        <img
                            src="https://via.placeholder.com/50"
                            alt="QFX Movies Logo"
                            className="h-10 w-10 mr-3"
                        />
                        <span className="text-white text-xl font-bold">
                            QFX Movies
                        </span>
                    </div>

                    <nav className="flex items-center space-x-4">
                        <a
                            href="#"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        >
                            Sign In
                        </a>
                    </nav>
                </div>
            </header>
        </>
    );
}
