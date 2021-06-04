import React, { ReactElement, ReactNode } from "react";

// Just a regular function component
// We destruct message from props object
// We tell TypeScript that the message comes from an object and should be of type string
export function Greetings({ message }: { message: string }) {
  return <h1>{message}</h1>;
}

// A little more explicit example where we also declare what the
// function will return, that is either a ReactElement or null
// The children is declared as a ReactNode cause it takes another JSX element
export function GreetingsWithContent({
  children,
}: {
  children: ReactNode;
}): ReactElement | null {
  return <h1>{children}</h1>;
}
