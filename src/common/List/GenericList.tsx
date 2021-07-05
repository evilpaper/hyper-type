import React, { ReactNode } from "react";

export default function GenericList<ListItem>({
  items,
  render,
}: {
  items: ListItem[];
  render: (item: ListItem) => ReactNode;
}) {
  return (
    <ul>
      {items.map((item, index) => {
        return <li key={index}>{render(item)}</li>;
      })}
    </ul>
  );
}
