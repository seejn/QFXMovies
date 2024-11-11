import { Routes, Route } from "react-router-dom";

import GuestLanding from "@pages/user/Guest/Landing";
import Dashboard from "@pages/admin/Dashboard";
import Cities from "@pages/admin/Cities";
import Cinemas from "@pages/admin/Cinemas";
import Movies from "@pages/admin/Movies";
import NowPlayingMovies from "@pages/admin/NowPlayingMovies";

const Router = () => {
    return (
        <>
            <Routes>
                {/* Guest Routes */}
                <Route path="/" element={<GuestLanding />} />

                {/* Admin Routes */}
                <Route path="/admin/dashboard" element={<Dashboard />} />
                <Route path="/admin/cities" element={<Cities />} />
                <Route path="/admin/cinemas" element={<Cinemas />} />
                <Route path="/admin/movies" element={<Movies />} />
                <Route path="/admin/now-playing-movies" element={<NowPlayingMovies />} />
            </Routes>
        </>
    )
}

export default Router;