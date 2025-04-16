import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    function getAllUsers() {
      fetch("https://dummyjson.com/users")
        .then((res) => res.json())
        .then((data) => setUsers(data?.users));
    }

    getAllUsers();
  }, []);

  return (
    <div>
      {users.length != 0 ? (
        users.map((user) => (
          <div>
            <div>
              Full Name: {user.firstName} {user.lastName}
            </div>
            <div>Age: {user.age}</div>
            <div>Country: {user.address.country}</div>
          </div>
        ))
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
}

export default App;
