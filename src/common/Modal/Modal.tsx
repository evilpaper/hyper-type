import React, { ReactNode } from "react";

export default function Modal({
  children,
  onOutsideClick,
}: {
  children: ReactNode;
  onOutsideClick: any;
}) {
  return (
    <div className="container">
      <div ref={onOutsideClick} className="modal">
        {children}
      </div>
    </div>
  );
}
