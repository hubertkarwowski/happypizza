const Pizza = require("../models/Pizza");

exports.findPizzas = async (req, res) => {
  const pizzas = await Pizza.find();
  res.send({ pizzas: pizzas });
};

exports.createPizza = async (req, res) => {
  const pizza = new Pizza(req.body);
  await pizza.save();
  res.send({ pizzas: pizza });
};

exports.findPizza = async (req, res) => {
  const pizza = await Pizza.findById(req.params.id);
  res.send({ pizzas: pizza });
};
