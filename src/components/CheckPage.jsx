import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import * as React from "react";
import CheckCard from "./CheckCard";
import Total from "./Total";
import { useStateValue } from "../StateProvider";

export default function CheckPage() {
  const [{basket}, dispatch] = useStateValue();

  function FormRow() {
    return (
      <React.Fragment>
        {basket?.map((product,index) => (
          <Grid  key={index} xs={12} sm={8} md={6} lg={4}>
            <CheckCard producto={product} />
          </Grid>
        ))}
      </React.Fragment>
    );
  }
  return (
      <Box sx={{ flexGrow: 1, padding: "1rem" }}>
        <Grid container spacing={3} marginTop={10}>
            <Grid xs={12}>
                <Typography align="center" gutterBottom variant="h4">
                    Shopping Cart
                </Typography>
            </Grid>
            <Grid xs={12} sm={8} md={9} container spacing={3}>
                <FormRow/>
            </Grid>
            <Grid xs={12} sm={4} md={3} >
                <Typography align="center" gutterBottom variant="h4">
                    <Total/>
                </Typography>
            </Grid>
        </Grid>
      </Box>
  );
}
