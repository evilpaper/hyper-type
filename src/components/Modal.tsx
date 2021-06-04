import React, { ReactNode } from "react";

export default function Modal({ children }: { children: ReactNode }) {
  return (
    <div className="container">
      <div className="modal">{children}</div>
    </div>
  );
}
