import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Footer from "../Footer/Footer";
import '@testing-library/jest-dom/extend-expect';



describe("Na tela principal", () => {
  describe("O elemento Footer", () => {
    it("O nome do App é mostrado", () => {
      render(
        <MemoryRouter>
          <Footer />
        </MemoryRouter>
      );
      expect(screen.getByText("2021 - BuscadorCEP!")).toBeInTheDocument( );
    });
  });
});
