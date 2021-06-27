import React, { useEffect, useState } from "react";
import User from "./User";

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
  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://randomuser.me/api/?results=20")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data.results);
        setIsLoading(false);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <h1>Users</h1>
      <ul>
        {isLoading && <p>Loading...</p>}
        {users &&
          users.map((user) => {
            return (
              <User
                first={user.name.first}
                last={user.name.last}
                id={user.id.value}
                imageUrl={user.picture.medium}
              />
            );
          })}
      </ul>
    </>
  );
}
