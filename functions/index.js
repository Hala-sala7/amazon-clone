const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

// App config
const app = express();

// Middlewares
// Use CORS with specific origin to enhance security
app.use(cors({ origin: 'http://localhost:3000' })); // Replace with your frontend URL in production
app.use(express.json());

// API Routes
app.get("/", (req, res) => res.status(200).send("Hello World"));

app.post("/payments/create", async (req, res) => {
  try {
    const total = req.query.total;
    if (!total) {
      return res.status(400).send("Total is required");
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount: total,
      currency: "usd",
    });

    // Respond with client secret for frontend
    res.status(201).send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    console.error("Error creating payment intent: ", error);
    res.status(500).send("Internal Server Error");
  }
});

// Listen command
exports.api = functions.https.onRequest(app);
