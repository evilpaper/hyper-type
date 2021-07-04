import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("Renders landing page", () => {
  render(<App />);
  const landingCopy = screen.getByText(/Hyper Type is a collection/i);
  expect(landingCopy).toBeInTheDocument();
});

// describe("Navigation", () => {
//   test("'Todos' link point to todo page", () => {
//     render(
//       <MemoryRouter>
//         <App />
//       </MemoryRouter>
//     );
//   });
// });
