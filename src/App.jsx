import { useState } from "react";

const datas = [
  {
    id: 1,
    name: "Pukar Chhatkuli",
    gender: "Male",
  },
  {
    id: 2,
    name: "Sourish Joshi",
    gender: "Male",
  },
  {
    id: 3,
    name: "Siddharth G.C.",
    gender: "Male",
  },
];

export default function App() {
  const [persons, setPersons] = useState(datas);
  const [selected, setSelected] = useState([]);

  const allChecked = !persons.length
    ? false
    : persons.map((person) => person.id).every((id) => selected.includes(id));
  console.log(selected, allChecked);
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
      <button
        className="bg-red-600 p-4 absolute left-1/2 -translate-x-1/2 bottom-0"
        onClick={() => {
          setPersons((prev) =>
            prev.filter((person) => !selected.includes(person.id))
          );
        }}
      >
        Delete
      </button>
    </div>
  );
}
