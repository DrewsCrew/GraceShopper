"use strict";
const requireToken = require("../middleware");
const router = require("express").Router();
const { models } = require("../db");
const { LineItem } = models;

//Get /api/lineItem
router.get("/", requireToken, async (req, res, next) => {
  try {
    const products = await LineItem.findAll();
    res.json(products);
  } catch (error) {
    next(error);
  }
});
//where user ^^^
router.get("/:id", requireToken, async (req, res, next) => {
  try {
    const product = await LineItem.findByPk(req.params.id);
    res.send(product);
  } catch (error) {
    next(error);
  }
});

// POST /api/lineItem/
router.post("/", requireToken, async (req, res, next) => {
  try {
    res.status(201).json(await LineItem.create(req.body));
  } catch (error) {
    next(error);
  }
});

router.post("/:id", async (req, res, next) => {
  try {
    const product = await LineItem.findByPk(req.params.id);
    res.status(201).json(await LineItem.create(product));
  } catch (error) {
    next(error);
  }
});


//DELETE /api/lineItem/:id
router.delete('/:id', async (req, res, next) => {
  try {
    const lineItem = await LineItem.findByPk(req.params.id);
    await lineItem.destroy();
    res.json(lineItem);
  } catch (error) {
    next(error);
  }
});

//PUT /api/lineItem/id
router.put('/increase', async (req, res, next) => {
  try {
    const lineItem = await LineItem.findByPk(req.body.id);
    const newLineItem = await lineItem.update({
      quantity: lineItem.quantity + 1,
    });
    res.send(newLineItem);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
