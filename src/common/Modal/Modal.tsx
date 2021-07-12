import React, { ReactNode } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const ScreenOverlay = styled(motion.div)`
  position: absolute;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: hsla(255, 8%, 8%, 0.2);
`;

const StyledModal = styled.div`
  width: 14em;
  line-height: 1.5;
  text-align: center;
  color: black;
  background-color: white;
  padding: 2em;
  border-radius: 1em;
  box-shadow: 2px 3px 12px hsl(255, 8%, 38%, 0.2),
    7px 10px 12px hsl(255, 10%, 38%, 0.15),
    5px 14px 12px hsl(255, 12%, 38%, 0.1),
    12px 16px 12px hsl(255, 14%, 38%, 0.05);
`;

export default function Modal({
  children,
  onOutsideClick,
}: {
  children: ReactNode;
  onOutsideClick: any;
}) {
  return (
    <ScreenOverlay
      animate={{
        backgroundColor: ["hsla(255, 8%, 8%, 0.0)]", "hsla(255, 8%, 8%, 0.2)"],
      }}
      transition={{ duration: 0.3 }}
    >
      <StyledModal ref={onOutsideClick}>{children}</StyledModal>
    </ScreenOverlay>
  );
}
