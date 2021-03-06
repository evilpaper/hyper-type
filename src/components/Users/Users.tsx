import React, { useEffect, useState } from "react";
import User from "components/Users/User";
import styled from "styled-components";

const StyledUsers = styled.ul`
  width: 90%;
`;
interface UserType {
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
  const [users, setUsers] = useState<UserType[]>([]);

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
      <StyledUsers>
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
      </StyledUsers>
    </>
  );
}
