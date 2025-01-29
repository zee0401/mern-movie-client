import AdminMoviesTable from "../../components/Movies/AdminMoviesTable";
import Sortby from "../../components/sort/SortBy";

const AdminAllMoviesList = () => {
  return (
    <div>
      <Sortby />
      <AdminMoviesTable />;
    </div>
  );
};

export default AdminAllMoviesList;
