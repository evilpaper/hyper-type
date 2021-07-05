import React from "react";

interface Props {
  first: string;
  last: string;
  id: string;
  imageUrl: string;
}

export default function User({ first, last, id, imageUrl }: Props) {
  return (
    <li className="user" key={id}>
      <img className="user-image" src={imageUrl} alt="User" />
      <p className="user-firstname">{first}</p>
      <p className="user-lastname">{last}</p>
    </li>
  );
}
