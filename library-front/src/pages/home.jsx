import React, { useEffect, useState } from "react";

export default function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Мокнутые данные пользователей
    const mockUsers = [
      { id: 1, name: "John", surname: "Doe", amount_of_books: 5 },
      { id: 2, name: "Jane", surname: "Smith", amount_of_books: 3 },
      { id: 3, name: "Alice", surname: "Johnson", amount_of_books: 7 },
    ];

    setUsers(mockUsers); // Установка мокнутых данных в состояние
  }, []);

  return (
    <div className="container">
      <div className="py-4">
        <table className="table table-striped table-dark">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Surname</th>
              <th scope="col">Amount of books</th>
              <th scope="col">Actions</th>{" "}
              {/* Добавил заголовок для столбца действий */}
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <th scope="row">{user.id}</th>
                <td>{user.name}</td>
                <td>{user.surname}</td>
                <td>{user.amount_of_books}</td>
                <td>
                  <button className="btn btn-primary mx-2">View</button>
                  <button className="btn btn-outline-primary mx-2">Edit</button>
                  <button className="btn btn-danger mx-2">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
