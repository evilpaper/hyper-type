import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("Renders landing page", () => {
  render(<App />);
  const landingCopy = screen.getByText(/Hyper Type is a collection/i);
  expect(landingCopy).toBeInTheDocument();
});

// describe("header", () => {
//   test("'Todos' link should point to the right page", () => {
//     render(
//       <MemoryRouter>
//         <App />
//       </MemoryRouter>
//     );
//   });
// });
