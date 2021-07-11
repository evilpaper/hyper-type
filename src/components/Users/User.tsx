import React from "react";
import styled from "styled-components";

const StyledUser = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 1em 0;
`;

const UserImage = styled.img`
  border-radius: 50%;
  margin-right: 2em;
`;

const UserFirstname = styled.p`
  margin-right: 1em;
`;

interface Props {
  first: string;
  last: string;
  id: string;
  imageUrl: string;
}

export default function User({ first, last, id, imageUrl }: Props) {
  return (
    <StyledUser key={id}>
      <UserImage className="user-image" src={imageUrl} alt="User" />
      <UserFirstname className="user-firstname">{first}</UserFirstname>
      <p className="user-lastname">{last}</p>
    </StyledUser>
  );
}
