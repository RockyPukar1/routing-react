import { useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function getAllUsers() {
    setIsLoading(true);
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data?.users);
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      });
  }

  console.log(users);

  if (isLoading) {
    return "Loading";
  }

  return (
    <div>
      <button className="bg-black text-white" onClick={() => setUsers([])}>
        Remove Data
      </button>
      <button className="bg-red-500 text-blue" onClick={() => getAllUsers()}>
        Fetch Data
      </button>
      {users.map((user) => (
        <div key={user.id}>
          <div>
            Full Name: {user.firstName} {user.lastName}
          </div>
          <div>Age: {user.age}</div>
          <div>Country: {user.address.country}</div>
        </div>
      ))}
    </div>
  );
}

export default App;
