import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import CEPSearch from "../CEPSearch/CEPSearch";
import '@testing-library/jest-dom/extend-expect';

describe("Na tela principal", () => {
  describe("Quando abro o App", () => {
    it("O nome do App é mostrado", () => {
      render(
        <MemoryRouter>
          <CEPSearch />
        </MemoryRouter>
      );
      expect(screen.getByText("BuscadorCEP!")).toBeInTheDocument( );
    });
  });
});
