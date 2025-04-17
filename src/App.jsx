import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className="flex justify-center">
      <form
        className="w-72 flex flex-col gap-2"
        onSubmit={(event) => {
          event.preventDefault();
          console.log(name, email);
        }}
      >
        <div>
          Name{" "}
          <input
            type="text"
            className="outline border-0"
            value={name}
            placeholder="John Doe"
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div>
          Name{" "}
          <input
            type="email"
            className="outline border-0"
            value={email}
            placeholder="john.doe@gmail.com"
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <button className="border border-black p-2">Submit</button>
        <div>My Name: {name}</div>
        <div>My Email: {email}</div>
      </form>
    </div>
  );
}

export default App;
