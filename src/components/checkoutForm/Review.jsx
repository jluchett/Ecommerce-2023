import { List, ListItem, ListItemText, Typography } from "@mui/material";
import React from "react";
import { useStateValue } from "../../StateProvider";
import { getBasketTotal } from "../../reducer";
import accounting from "accounting";

const Review = () => {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
          {
            basket?.map((producto)=>(
              <ListItem key={producto.nombre}>
                <ListItemText primary={producto.nombre} secondary={`Qty: ${1}`}/>
                <Typography >
                {accounting.formatMoney(producto.precio, "$ ")}
                </Typography>
              </ListItem>
            ))
          }
          <ListItem >
                <ListItemText primary={"Total:"} />
                <Typography variant="h6">
                {accounting.formatMoney(getBasketTotal(basket), "$ ")}
                </Typography>
              </ListItem>
        
      </List>
    </>
  );
};

export default Review;
