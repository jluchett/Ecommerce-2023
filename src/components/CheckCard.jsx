import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { Delete } from "@mui/icons-material";
import accounting from "accounting";
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducer";

export default function CheckCard({
  producto: { id, nombre, precio, rating, imagen },
}) {
  const [{basket}, dispatch] = useStateValue();

  const removeItem = () => dispatch({
    type: actionTypes.REMOVE_ITEM,
    id: id,
  })

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        action={
          <Typography variant="h5" color="textSecondary">
            {accounting.formatMoney(precio,"$",0)}
          </Typography>
        }
        title={nombre}
        subheader="in Stock"
      />
      <CardMedia component="img" height="194" image={imagen} />

      <CardActions disableSpacing sx={{ justifyContent: "space-between" }}>
        <div style={{ display: "flex" }}>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>&#11088;</p>
            ))}
        </div>
        <IconButton onClick={removeItem}>
          <Delete fontSize="large"/>
        </IconButton>
      </CardActions>
    </Card>
  );
}
