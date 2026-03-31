import API from "../services/api";

const Dashboard = () => {
  const handleLogout = async () => {
    await API.post("/users/logout");
    window.location.href = "/";
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;