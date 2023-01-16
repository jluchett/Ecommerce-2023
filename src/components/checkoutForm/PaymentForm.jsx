import { Button, Divider, Typography } from "@mui/material";
import { CardElement, Elements, useElements, useStripe } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import Review from "./Review";
import { useStateValue } from "../../StateProvider";
import { getBasketTotal } from "../../reducer";
import accounting from "accounting";

const stripePromise = loadStripe(
  "pk_test_51MQy03AxJ4J6RkaYKssmOT6zDJjIjPOTfoPiyLEr946g3CkdHOQuvUfGWil2utaj826gMhJ9ghr3uwVOEg8VP7Xd00Zp1Yn4iY"
);
const CARD_OPTIONS = {
  iconStyle: "solid",
  style: {
    base: {
      iconColor: "rgb(240. 57, 122)",
      color: "#333",
      fontSize: "18px",
      "::placeholder": {
        color: "#ccc",
      },
    },
    invalid: {
      color: "#e5424d",
      ":focus": {
        color: "#303238",
      },
    },
  },
};

const CheckoutForm = ({ backstep, nextStep }) => {
  const [{basket}, dispatch] = useStateValue();
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async(e) => {
    e.preventDefault();
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement)
    })
    if(!error){
      const {id} = paymentMethod;
    }
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement options={CARD_OPTIONS} />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "1rem",
          }}
        >
          <Button variant="outlined" onClick={backstep}>
            Back
          </Button>
          <Button variant="contained" color="primary" disabled={false} type="submit">
            {`Pay ${accounting.formatMoney(getBasketTotal(basket), "$")}`}
          </Button>
        </div>
      </form>
    </>
  );
};
const PaymentForm = ({ next, back }) => {
  return (
    <>
      <Review />
      <Divider />
      <Typography variant="h5" gutterBottom style={{ margin: "20px 0" }}>
        Payment method
      </Typography>
      <Elements stripe={stripePromise}>
        <CheckoutForm nextStep={next} backstep={back}></CheckoutForm>
      </Elements>
    </>
  );
};

export default PaymentForm;
