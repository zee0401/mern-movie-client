import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/user/Home";
import Search from "./pages/user/Search";
import AdminAllMoviesList from "./pages/admin/AdminAllMoviesList";
import Layout from "./components/Layout";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/admin/all-movies" element={<AdminAllMoviesList />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
