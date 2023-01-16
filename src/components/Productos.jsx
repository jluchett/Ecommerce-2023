import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import Producto from "./Producto";
import products from "../productData";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Productos() {
  return (
    <Box sx={{ flexGrow: 1, padding: "1rem" }}>
      <Grid container spacing={3} marginTop={10}>
        {products.map((product) => (
          <Grid xs={12} sm={6} md={4} lg={3} key={product.id}>
            <Producto  producto={product} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
