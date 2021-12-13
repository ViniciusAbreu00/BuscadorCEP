import { Box, Button, Paper, TextField } from "@mui/material";
import React, { useCallback, useState } from "react";
import { useCEPSearchStyles } from "./CEPSearch.style";
import { FormikProps, useFormik } from "formik";
import ModalCEP from "./Modal/ModalCEP";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import axios from "axios";

interface CpfValues {
  cpfValue: string;
}

const validationSchema = yup.object({
  cpfValue: yup
    .string()
    .min(8, "Minimo 8 dígitos")
    .max(9, "Máximo 9 dígitos")
    .matches(/^\d{5}-?\d{3}$/, "CEP aceita somente numeros")
    .required("CEP obrigatório"),
});

export default function CEPSearch() {
  const navigate = useNavigate();
  const styles = useCEPSearchStyles();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [cepData, setCepData] = useState([])

  const formik: FormikProps<CpfValues> = useFormik<CpfValues>({
    initialValues: {
      cpfValue: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values)
    },
  });

  const onCepBlur = useCallback(
    (ev) => {
      formik.handleBlur(ev);
    },
    [formik]
  );

  const onSubmit =() => {
    axios.get(`https://viacep.com.br/ws/${formik.values.cpfValue}/json/`).then(({data}) => {
    handleOpen()
    setCepData(data)
    })
    
  }

  const goToHome = () => {
    navigate('/')
  };
  return (
    <Box className={styles.SearchBox}>
      <Box>
        <h1>Busca por CEP</h1>
      </Box>
      <Paper
        style={{ backgroundColor: "#eeefea" }}
        variant="outlined"
        className={styles.ContentBox}
      >
        <Box className={styles.SubTitle}>
          <h2>Insira seu CEP</h2>
        </Box>
        <Box>
          <form onSubmit={formik.handleSubmit}>
            <TextField
              id="cpfValue"
              name="cpfValue"
              label="CEP"
              value={formik.values.cpfValue}
              onChange={formik.handleChange}
              onBlur={onCepBlur}
              error={formik.touched.cpfValue && Boolean(formik.errors.cpfValue)}
              helperText={formik.touched.cpfValue && formik.errors.cpfValue}
              inputProps={{"data-testid": "cepField"}}
              fullWidth
            />
          </form>
        </Box>
        <Box className={styles.Buttons}>
          <Button onClick={() => goToHome()} fullWidth variant="outlined">
            Voltar
          </Button>
          <Button
            disabled={!(formik.dirty && formik.isValid)}
            onClick={() => onSubmit()}
            type="submit"
            fullWidth
            variant="contained"
          >
            Buscar
          </Button>
          <ModalCEP handleClose={handleClose} open={open} cepData={cepData} />
        </Box>
      </Paper>
    </Box>
  );
}
