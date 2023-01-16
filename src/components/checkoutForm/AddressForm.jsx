import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useForm, FormProvider } from "react-hook-form";
import AddressInput from "./AddressInput";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useStateValue } from "../../StateProvider";
import { actionTypes } from "../../reducer";


export default function AddressForm({next}) {
  const methods = useForm();
  const [{shippinData}, dispatch] = useStateValue();
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(data =>{
          dispatch({
            type: actionTypes.SET_SHIPPINGDATA,
            shippinData: data,
          })
          next()
        })}>
          <Grid container spacing={3}>
            <AddressInput required name="firstName" label="First Name" />
            <AddressInput required name="lastName" label="Last Name" />
            <AddressInput required name="address" label="Address" />
            <AddressInput required name="email" label="Email address" />
            <AddressInput required name="city" label="City" />
            <AddressInput required name="postCode" label="Post Code" />
          </Grid>
          <div style={{ display: "flex", justifyContent: "space-between", marginTop: "1rem"}}>
            <Button component={Link} to="/cart">
              Back to Cart
            </Button>
            <Button type="submit" variant="contained">
              Next
            </Button>
          </div>
        </form>
      </FormProvider>
    </React.Fragment>
  );
}
