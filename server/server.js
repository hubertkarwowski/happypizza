const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const pizzaController = require("./controllers/pizzas");

mongoose
  .connect(
    "mongodb+srv://mern:admin@happypizza.23cvt.mongodb.net/Shop?retryWrites=true&w=majority"
  )
  .then(() => {
    const app = express();
    const PORT = 5000;
    app.use(cors());
    app.options("*", cors());
    app.use(express.json());

    app.get("/pizzas", pizzaController.findPizzas);
    app.post("/pizzas", pizzaController.createPizza);
    app.get("/pizzas/:id", pizzaController.findPizza);

    app.listen(PORT, () => {
      console.log(`Server runs on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(`database connection failed: ${error}`);
  });
