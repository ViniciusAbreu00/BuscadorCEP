import * as React from "react";
import { useFooterStyle } from "./Footer.style";

const Footer = () => {
    const styles = useFooterStyle()
  return (
    <footer className={styles.footer}>
        2021 - BuscadorCEP!
    </footer>
  );
};
export default Footer;
