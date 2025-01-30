import AdminMoviesTable from "../../components/Movies/AdminMoviesTable";
import Sortby from "../../components/sort/SortBy";

const AdminAllMoviesList = () => {
  return (
    <>
      <Sortby />
      <AdminMoviesTable />
    </>
  );
};

export default AdminAllMoviesList;
