import React, { ReactNode } from "react";

export default function Modal({
  children,
  refValue,
}: {
  children: ReactNode;
  refValue: any;
}) {
  return (
    <div className="container">
      <div ref={refValue} className="modal">
        {children}
      </div>
    </div>
  );
}
