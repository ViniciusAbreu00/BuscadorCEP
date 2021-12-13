import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import '@testing-library/jest-dom/extend-expect';
import Home from "../Home/Home";

describe("Na tela principal", () => {
  describe("Quando o App é aberto", () => {
   
    it("Opção de busca por CEP é exibida", () => {
      render(
        <MemoryRouter>
          <Home />
        </MemoryRouter>
      )

      expect(screen.getByText("Buscar CEP")).toBeInTheDocument();
    });
    it("O botão de busca por endereço é exibido", () => {
      render(
        <MemoryRouter>
          <Home/>
        </MemoryRouter>
      )

      expect(screen.getByText("Buscar endereço")).toBeInTheDocument();
    })
  });
});
