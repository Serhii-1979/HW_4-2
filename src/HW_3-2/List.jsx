import React, { useState } from "react";

const peopleData = [
  { id: 1, name: "Иван", age: 20 },
  { id: 2, name: "Мария", age: 22 },
  { id: 3, name: "Алексей", age: 21 },
  { id: 4, name: "Марина", age: 19 },
  { id: 5, name: "Даша", age: 23 },
  { id: 6, name: "Глеб", age: 24 },
  { id: 7, name: "Дима", age: 18 },
  { id: 8, name: "Гриша", age: 20 },
  { id: 9, name: "Серафим", age: 21 },
];

function List() {
  const [people, setPeople] = useState(peopleData);

  const removePerson = (id) => {
    setPeople(people.filter((person) => person.id !== id));
  };

  return (
    <div className="sdutents">
      <h1>Список студентов</h1>
      <ul className="students__list">
        {people.map((person) => (
          <div className="students__list-person">
            <li className="students__list-li" key={person.id}>
              <p>
                {person.name}, {person.age} лет
              </p>
              <button onClick={() => removePerson(person.id)}>DELETE</button>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default List;
