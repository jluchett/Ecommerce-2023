import { Button } from "@mui/material";
import accounting from "accounting";
import React from "react";
import { Link } from "react-router-dom";
import { getBasketTotal } from "../reducer";
import { useStateValue } from "../StateProvider";

const Total = () => {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div>
      <h5>Total items : {basket?.length}</h5>
      <h5>{accounting.formatMoney(getBasketTotal(basket), "$")}</h5>
      <Link to="/checkout">
        <Button variant="contained" color="secondary">
          Check Out
        </Button>
      </Link>
    </div>
  );
};

export default Total;
