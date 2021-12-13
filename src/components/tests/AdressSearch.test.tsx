import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import '@testing-library/jest-dom/extend-expect';
import AdressSearch from "../AdressSearch/AdressSearch";

describe("Na tela de busca por endereço", () => {
  describe("Quando a tela é iniciada", () => {
    it("O campo de estados é exibido", () => {
      render(
        <MemoryRouter>
          <AdressSearch />
        </MemoryRouter>
      );
      expect(screen.getByTestId("estadoField")).toBeInTheDocument();
    });

    it("O campo de cidades é exibido", () => {
      render(
        <MemoryRouter>
          <AdressSearch />
        </MemoryRouter>
      );
      expect(screen.getByTestId("cidadeField")).toBeInTheDocument();
    });
    
    it("O campo de rua é exibido", () => {
      render(
        <MemoryRouter>
          <AdressSearch />
        </MemoryRouter>
      );
      expect(screen.getByTestId("ruaField")).toBeInTheDocument();
    });
  });
});
