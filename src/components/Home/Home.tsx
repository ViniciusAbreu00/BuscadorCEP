import { Box, Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useHomeStyles } from "./Home.styles";

export default function LoginPage() {
  const navigate = useNavigate();

  const goToCEPSearch = () => {
    navigate('/buscarcep')
  }

  const goToAdressSearch = () => {
    navigate('/buscarendereco') 
    
  }

  const styles = useHomeStyles();
  return (
    <Box className={styles.contentOptions}>
      <Box className={styles.tittle}>
        <h1>Bem vindo ao BuscadorCEP!</h1>
      </Box>

      <Box className={styles.parag}>
        <h3>
          O aplicativo BuscadorCEP! permite que você encontre códigos de
          endereçamento postais (CEP).
          <br />
          Se você já tiver o CEP em mãos e gostaria de buscar seu endereço, o
          BuscadorCEP! também vai te ajudar.
          <br />
          Aproveite!!
        </h3>
      </Box>

      <Box className={styles.submit}>
        <Button onClick={() => goToCEPSearch()} fullWidth variant="contained">
          Buscar CEP
        </Button>
        <Button onClick={() => goToAdressSearch()} fullWidth variant="outlined">
          Buscar endereço
        </Button>
      </Box>
    </Box>
  );
}
