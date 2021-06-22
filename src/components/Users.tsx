import React, { useEffect, useState } from "react";

interface User {
  id: {
    value: string;
  };
  name: {
    first: string;
    last: string;
  };
  picture: {
    medium: string;
  };
}

export default function Users() {
  const [users, setUsers] = useState<User[]>([]);
  useEffect(() => {
    fetch("https://randomuser.me/api/?results=20")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data.results);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <h1>Users</h1>
      <ul>
        {users &&
          users.map((user, index) => {
            return (
              <li key={index}>
                <h2>{user.name.first}</h2>
                <h2>{user.name.last}</h2>
                <h2>{user.id.value}</h2>
                <img src={user.picture.medium} alt="Job" />
              </li>
            );
          })}
      </ul>
    </>
  );
}
