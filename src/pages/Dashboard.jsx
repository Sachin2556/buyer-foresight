import { useEffect, useState } from "react";
import { fetchUsers } from "../services/api";
import { sortUsers } from "../utils/sortUtils";
import UserTable from "../components/UserTable";
import SearchBar from "../components/SearchBar";
import SortControls from "../components/SortControls";

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [sortField, setSortField] = useState("name");
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    fetchUsers().then(setUsers);
  }, []);

  const filteredUsers = users.filter(
    (u) =>
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase())
  );

  const sortedUsers = sortUsers(filteredUsers, sortField, sortOrder);

  return (
    <div>
      <h1>User Dashboard</h1>
      <SearchBar search={search} setSearch={setSearch} />
      <SortControls setSortField={setSortField} setSortOrder={setSortOrder} />
      <UserTable users={sortedUsers} />
    </div>
  );
};

export default Dashboard;