import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <>
            <aside className="w-64 bg-gray-800 text-white h-full flex-shrink-0">
                <div className="p-6">
                    <h1 className="text-2xl font-semibold text-center">Admin Dashboard</h1>
                </div>
                <nav className="mt-4">
                    {/* City Section */}
                    <div className="mt-2">
                        <div className="pl-4 mt-2">
                            <Link to="/admin/cities" className="block p-2 text-sm hover:bg-gray-700 rounded">Cities</Link>
                        </div>
                    </div>

                    {/* Cinema Section */}
                    <div className="mt-2">
                        <div className="pl-4 mt-2">
                            <Link to="/admin/cinemas" className="block p-2 text-sm hover:bg-gray-700 rounded">Cinemas</Link>
                        </div>
                    </div>

                    {/* Movies Section */}
                    <div className="mt-2">
                        <div className="pl-4 mt-2">
                            <Link to="/admin/movies" className="block p-2 text-sm hover:bg-gray-700 rounded">Movies</Link>
                        </div>
                    </div>

                    {/* Now Playing Movies Section */}
                    <div className="mt-2">
                        <div className="pl-4 mt-2">
                            <Link to="/admin/now-playing-movies" className="block p-2 text-sm hover:bg-gray-700 rounded">Now Playing Movies</Link>
                        </div>
                    </div>
                </nav>
            </aside>
        </>
    )
}

export default Sidebar;