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
      <img className="" src={imageUrl} alt="User" />
      <h2>{first}</h2>
      <h2>{last}</h2>
      <h2>{id}</h2>
    </li>
  );
}
