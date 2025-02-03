import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

import "./App.css";

import { useDispatch, useSelector } from "react-redux";
import { setAuthenticated } from "./redux/features/authSlice";

import { axiosInstance } from "./utility/axiosInstance";

import Home from "./pages/Home";
import Search from "./pages/BrowseMovies";
import AdminAllMoviesList from "./pages/admin/AdminAllMoviesList";
import AddMovie from "./pages/admin/AddMovie";
import UpdateMovie from "./pages/admin/UpdateMovie";

function App() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  useEffect(() => {
    const verifyAdmin = async () => {
      const response = await axiosInstance.get("/admin/verify-user");

      if (response.status === 200) {
        dispatch(setAuthenticated(true));
      }
    };
    verifyAdmin();
  }, []);

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search-movies" element={<Search />} />
          <Route path="/admin/all-movies" element={<AdminAllMoviesList />} />
          <Route path="/admin/add-movie" element={<AddMovie />} />
          <Route path="/admin/update-movie/:id" element={<UpdateMovie />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
