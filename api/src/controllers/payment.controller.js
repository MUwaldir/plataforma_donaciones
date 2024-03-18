import Stripe from "stripe";
import { config } from "dotenv";
config();
const stripe = new Stripe(process.env.SECRET_KEY_STRIPE);

export const createSession = async (req, res) => {
  const { id } = req.params;
  const { monto, nombre, description } = req.body;
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price_data: {
          product_data: {
            name: nombre,
            description: description,
          },
          currency: "usd",
          unit_amount: monto*100, // 200 doalres , tiene que ser en centavos
        },
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: "http://localhost:5173/success",
    cancel_url: `http://localhost:5173/projects/${id}`,
  });
  // const session = await stripe.checkout.sessions.create({
  //   line_items: [
  //     {
  //       price_data: {
  //         product_data: {
  //           name: "Laptop",
  //           description: "Gaming Laptop",
  //         },
  //         currency: "usd",
  //         unit_amount: 20000, // 200 doalres , tiene que ser en centavos
  //       },
  //       quantity:1,

  //     },
  //     {
  //       price_data: {
  //           product_data: {
  //             name: "TV",
  //             description: "Smart TV",
  //           },
  //           currency: "usd",
  //           unit_amount: 10000, // 100 doalres , tiene que ser en centavos
  //         },
  //         quantity:2,
  //     }
  //   ],
  //   mode: "payment",
  //   success_url: "http://localhost:5173/success",
  //   cancel_url: `http://localhost:5173/project/${id}`,
  // });

  return res.json(session);
};
