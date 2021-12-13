import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import CEPSearch from "../CEPSearch/CEPSearch";
import '@testing-library/jest-dom/extend-expect';

describe("Na tela de busca por CEP", () => {
  describe("Quando a tela é iniciada", () => {
    it("O campo do CEP é exibido", () => {
      render(
        <MemoryRouter>
          <CEPSearch />
        </MemoryRouter>
      );
      expect(screen.getByTestId("cepField")).toBeInTheDocument();
    });
  });
});
