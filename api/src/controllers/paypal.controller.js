import axios from "axios";
import {
  HOST,
  HOST_FRONT,
  PAYPAL_API,
  PAYPAL_API_CLIENT,
  PAYPAL_API_KEY,
} from "../config.js";

export const createOrder = async (req, res) => {
  const { monto } = req.body;
  console.log(monto);
  const order = {
    intent: "CAPTURE",
    purchase_units: [
      {
        amount: {
          currency_code: "USD",
          value: monto.toString(),
        },
      },
    ],
    application_context: {
      brand_name: "App Donaciones",
      landing_page: "NO_PREFERENCE",
      user_action: "PAY_NOW",
      return_url: `${HOST}/capture-order`,
      cancel_url: `${HOST}/cancele-order`,
    },
  };

  // aui es dominio desarrollo , por eso incluye sanmbox
  const params = new URLSearchParams();
  params.append("grant_type", "client_credentials");

  const {
    data: { access_token },
  } = await axios.post(`${PAYPAL_API}/v1/oauth2/token`, params, {
    auth: {
      username: PAYPAL_API_CLIENT,
      password: PAYPAL_API_KEY,
    },
  });

  console.log(access_token);

  const response = await axios.post(`${PAYPAL_API}/v2/checkout/orders`, order, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
  console.log(response.data);
 
  res.json(response.data);
};
export const captureOrder = async (req, res) => {
  console.log(req.body)
  const { token } = req.query;

  const response = await axios.post(
    `${PAYPAL_API}/v2/checkout/orders/${token}/capture`,
    {},
    {
      auth: {
        username: PAYPAL_API_CLIENT,
        password: PAYPAL_API_KEY,
      },
    }
  );
  console.log(response.data);

  const dataSuccess = {
    id:response.data.id,
    nombre: response.data.payer.name.given_name,
    surname:response.data.payer.name.surname,
    monto: response.data.purchase_units[0].payments.captures[0].amount.value
    

  }

  console.log(dataSuccess);

  //   // Devolver una respuesta indicando que la captura se ha realizado con éxito
  // return res.status(200).json({ message: "Order captured successfully" , dataOrder : response.data });
  // Redirigir al cliente a la página de éxito en el frontend con los datos de la orden
  // const orderData = JSON.stringify(response.data);
  const orderData = JSON.stringify(dataSuccess);

  res.redirect(`${HOST_FRONT}/success?orderData=${orderData}`);
};
export const cancelOrder = (req, res) => res.send("cancel payment");
