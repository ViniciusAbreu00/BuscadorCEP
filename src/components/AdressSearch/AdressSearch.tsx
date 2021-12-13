import React, { useEffect, useState } from "react";
import {
  Autocomplete,
  Box,
  Button,
  Paper,
  Stack,
  TextField,
} from "@mui/material";
import { useFormik, FormikProps } from "formik";
import { useAdressSearchStyle } from "./AdressSearch.style";
import axios from "axios";
import ModalAdress from "./Modal/ModalAdress";
import { useNavigate } from "react-router-dom";

interface AdressValues {
  cidade: string;
  estado: string;
  logradouro: string;
}

interface EstadoTypes {
  id: number;
  nome: string;
  sigla: string;
  regiao: {
    id: number;
    nome: string;
    sigla: string;
  };
}

interface CidadesTypes {
  id: string;
  nome: string;
  microrregiao: {
    id: number;
    nome: string;
    mesorregiao: {
      id: number;
      nome: string;
      UF: {
        id: number;
        sigla: string;
        nome: string;
        regiao: { id: number; sigla: string; nome: string };
      };
    };
  };
  regiaoimediata: {
    id: number;
    nome: string;
    regiaointermediaria: {
      id: number;
      nome: string;
      UF: {
        id: number;
        sigla: string;
        nome: string;
        regiao: { id: number; sigla: string; nome: string };
      };
    };
  };
}

export interface CepResponse {
  bairro: string;
  cep: string;
  complemento: string;
  ddd: string;
  gia: string;
  ibge: string;
  localidade: string;
  logradouro: string;
  siafi: string;
  uf: string;
}

interface EstadoTypes extends Array<EstadoTypes> {}
interface CidadesTypes extends Array<CidadesTypes> {}
interface CepResponses extends Array<CepResponse> {}

export default function AdressSearch() {
  const styles = useAdressSearchStyle();
  const navigate = useNavigate();
  const [estados, setEstados] = useState([]);
  const [estadosValue, setEstadosValue] = useState<EstadoTypes>();
  const [cidades, setCidades] = useState([]);
  const [cidadesValue, seiCidadesValue] = useState<CidadesTypes>();
  const [rua, setRua] = useState([]);
  const [cepResponse, setCepResponse] = useState<CepResponses>();
  const [loadingCep, setLoadingCep] = useState(false)
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    axios
      .get("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
      .then(({ data }) => {
        setEstados(data);
      });
  }, []);

  useEffect(() => {
    axios
      .get(
        `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estadosValue?.id}/municipios`
      )
      .then(({ data }) => {
        setCidades(data);
      });
  }, [estadosValue]);

  const searchCEP = () => {
    setLoadingCep(true)
    axios
      .get(
        `https://viacep.com.br/ws/${estadosValue?.sigla}/${cidadesValue?.nome}/${rua}/json/`
      )
      .then(({ data }) => {
        handleOpen();
        setCepResponse(data[0]);
        setLoadingCep(false)
      }).catch(() => setLoadingCep(false));
  };

  const goToHome = () => {
    navigate("/");
  };

  const defaultPropsEstados = {
    options: estados,
    getOptionLabel: (estados: EstadoTypes) => estados.nome,
  };

  const defaultPropsCidades = {
    options: estados,
    getOptionLabel: (cidades: CidadesTypes) => cidades.nome,
  };

  const formik: FormikProps<AdressValues> = useFormik<AdressValues>({
    initialValues: {
      cidade: "",
      estado: "",
      logradouro: "",
    },
    onSubmit: (props) => console.log(props),
  });

  return (
    <Box className={styles.SearchBox}>
      <Box>
        <h1>Busca Por Endereço</h1>
      </Box>
      <Paper
        style={{ backgroundColor: "#eeefea" }}
        variant="outlined"
        className={styles.ContentBox}
      >
        <Box className={styles.SubTitle}>
          <h2>Insira Seus Dados</h2>
        </Box>
        <Box className={styles.Form}>
          <form className={styles.FormContent} onSubmit={formik.handleSubmit}>
            <Stack>
              <Autocomplete
                {...defaultPropsEstados}
                fullWidth
                multiple
                autoHighlight
                disableClearable
                value={estadosValue}
                options={estados}
                onChange={(_, value: any) => setEstadosValue(value[0])}
                disableCloseOnSelect
                style={{ marginBottom: 16, padding: "10px" }}
                renderInput={(params) => (
                  <TextField {...params} fullWidth label="Estado" />
                )}
              />

              <Autocomplete
                {...defaultPropsCidades}
                fullWidth
                multiple
                autoHighlight
                disableClearable
                value={cidadesValue}
                options={cidades}
                onChange={(_, value: any) => seiCidadesValue(value[0])}
                disableCloseOnSelect
                style={{ marginBottom: 16, padding: "10px" }}
                renderInput={(params) => (
                  <TextField {...params} fullWidth label="Cidade" />
                )}
              />

              <TextField
                value={rua}
                onChange={(ev: any) => setRua(ev.target.value)}
                style={{ marginLeft: "2%" }}
                fullWidth
                label="Logradouro"
                placeholder="Rua Padre João..."
              />
              <div style={{display: 'flex'}}>
             
              <Button style={{ marginLeft: "2%", marginTop: 16 }} variant='outlined' fullWidth onClick={() => goToHome()}>Voltar</Button>
              <Button
                style={{ marginLeft: "2%", marginTop: 16 }}
                onClick={() => searchCEP()}
                fullWidth
                variant="contained"
              >
                Pesquisar
              </Button>
              </div>
            </Stack>
          </form>

          <ModalAdress
            handleClose={handleClose}
            open={open}
            cep={cepResponse}
            loadingCep={loadingCep}
          />
        </Box>
        <Box className={styles.Buttons}></Box>
      </Paper>
    </Box>
  );
}
