import { useState } from "react";
import toast from "react-hot-toast";

const datas = [
  {
    id: 1,
    name: "Person 1",
    gender: "Male",
  },
  {
    id: 2,
    name: "Person 2",
    gender: "Female",
  },
  {
    id: 3,
    name: "Person 3",
    gender: "Male",
  },
  {
    id: 4,
    name: "Person 4",
    gender: "Female",
  },
  {
    id: 5,
    name: "Person 5",
    gender: "Male",
  },
];

export default function App() {
  const [persons, setPersons] = useState(datas);
  const [selected, setSelected] = useState([]);
  const [selectedGender, setSelectedGender] = useState("Male");

  const allChecked = !persons.length
    ? false
    : persons.map((person) => person.id).every((id) => selected.includes(id));
  console.log(selected, allChecked, selectedGender);
  return (
    <div>
      <table className="min-w-full border">
        <thead>
          <tr>
            <th className="border px-4 py-2">
              <input
                type="checkbox"
                checked={allChecked}
                onChange={() => {
                  if (persons) {
                    if (allChecked) {
                      setSelected([]);
                    } else {
                      setSelected(persons.map((person) => person.id));
                    }
                  }
                }}
              />
            </th>
            <th className="border px-4 py-2">SN</th>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Gender</th>
          </tr>
        </thead>
        <tbody>
          {persons.map((person) => (
            <tr key={person.id}>
              <td className="border px-4 py-2">
                <input
                  type="checkbox"
                  checked={selected.includes(person.id)}
                  onChange={() => {
                    if (selected.includes(person.id)) {
                      setSelected((prev) =>
                        prev.filter((id) => id !== person.id)
                      );
                    } else {
                      setSelected((prev) => [...prev, person.id]);
                    }
                  }}
                />
              </td>
              <td className="border px-4 py-2">{person.id}</td>
              <td className="border px-4 py-2">{person.name}</td>
              <td className="border px-4 py-2">{person.gender}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {selected.length > 0 && (
        <div className="absolute left-1/2 -translate-x-1/2 bottom-0 flex justify-center gap-40 w-screen">
          <button
            className="bg-red-600 p-4 "
            onClick={() => {
              setPersons((prev) =>
                prev.filter((person) => !selected.includes(person.id))
              );
              toast.success("Selected persons deleted successfully");
            }}
          >
            Delete
          </button>
          <div className="flex gap-5">
            <select
              defaultValue={selectedGender}
              onChange={(e) => setSelectedGender(e.target.value)}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            <button
              className="p-4 bg-black text-white"
              onClick={() => {
                setPersons((prev) =>
                  prev.map((person) => {
                    if (selected.includes(person.id)) {
                      return {
                        ...person,
                        gender: selectedGender,
                      };
                    } else {
                      return person;
                    }
                  })
                );
                toast.success("Selected persons's gender updated successfully");
              }}
            >
              Update
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
