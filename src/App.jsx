import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import { useDispatch, useSelector } from "react-redux";
import { setAuthenticated, setChecking } from "./redux/features/authSlice";
import { axiosInstance } from "./utility/axiosInstance";

import Home from "./pages/Home";
import BrowseMovies from "./pages/BrowseMovies";
import AdminAllMoviesList from "./pages/admin/AdminAllMoviesList";
import AddMovie from "./pages/admin/AddMovie";
import UpdateMovie from "./pages/admin/UpdateMovie";
import ProtectedRoute from "./utility/protectRoute";

function App() {
  const dispatch = useDispatch();

  const isChecking = useSelector((state) => state.auth.isChecking);

  useEffect(() => {
    const verifyAdmin = async () => {
      dispatch(setChecking(true));
      try {
        const response = await axiosInstance.get("/admin/verify-user");
        if (response.status === 200) {
          dispatch(setAuthenticated(true));
        }
      } catch (error) {
        dispatch(setAuthenticated(false));
      } finally {
        dispatch(setChecking(false));
      }
    };
    verifyAdmin();
  }, [dispatch]);

  if (isChecking) {
    return <div>Loading...</div>;
  }

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search-movies" element={<BrowseMovies />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/admin/all-movies" element={<AdminAllMoviesList />} />
            <Route path="/admin/add-movie" element={<AddMovie />} />
            <Route path="/admin/update-movie/:id" element={<UpdateMovie />} />
          </Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
