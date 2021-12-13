import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { useAppStyles } from "./App.style";
import DefaultLayout from "./components/DefaultLayout/DefaultLayout";
import AdressSearch from "./components/AdressSearch/AdressSearch";
import CEPSearch from "./components/CEPSearch/CEPSearch";

export default function App() {
  const styles = useAppStyles();
  return (
    <div className={styles.root}>
      <Header />
      <DefaultLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="buscarcep" element={<CEPSearch/>} />
          <Route path="buscarendereco" element={< AdressSearch/>} />

        </Routes>
      </DefaultLayout>
      <Footer />
    </div>
  );
}
