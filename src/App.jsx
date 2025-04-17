import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  return (
    <div className="flex justify-center">
      <form
        className="w-72 flex flex-col gap-2"
        onSubmit={(event) => {
          event.preventDefault();
          console.log(formData);
        }}
      >
        <div>
          Name{" "}
          <input
            type="text"
            className="outline border-0"
            value={formData.name}
            placeholder="John Doe"
            onChange={(event) =>
              setFormData((prev) => ({ ...prev, name: event.target.value }))
            }
          />
        </div>
        <div>
          Name{" "}
          <input
            type="email"
            className="outline border-0"
            value={formData.email}
            placeholder="john.doe@gmail.com"
            onChange={(event) =>
              setFormData((prev) => ({ ...prev, email: event.target.value }))
            }
          />
        </div>
        <button className="border border-black p-2">Submit</button>
        <div>My Name: {formData.name}</div>
        <div>My Email: {formData.email}</div>
      </form>
    </div>
  );
}

export default App;
