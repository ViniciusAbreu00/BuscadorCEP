import { Box } from "@mui/material";
import React from "react";
import { useDefaultStyles } from "./DefaultLayout.style";

interface ComponentProps { 
    children : JSX.Element
}

export default function DefaultLayout({children}: ComponentProps) {
  const styles = useDefaultStyles();
  return (
    <div className={styles.root}>
      <Box className={styles.box}>
        <Box className={styles.content}>
            {children}
        </Box>
      </Box>
    </div>
  );
}
