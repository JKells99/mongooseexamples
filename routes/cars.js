const express = require('express');
const router = express.Router();
const Car = require('../models/Car');
const User = require("../models/User");

router.get('/', (req, res) => {
    Car.find()
    .then(cars => res.json(cars))
    .catch(err => res.status(400).json(`Error: ${err}`));
})

router.post('/createCar' , (req, res) => {
    const newCar = new Car({
        name: req.body.name,
        engine: req.body.engine,
        numberOfDoors: req.body.numberOfDoors
    });

    newCar.save()
    .then(() => res.json('Car added!'))
    .catch(err => res.status(400).json(`Error: ${err}`));
})

router.put("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const updatedCar = await Car.findByIdAndUpdate(id, req.body, { new: true });

        if (!updatedCar) {
            return res.status(404).json({ message: "User not found" });
        }

        res.json(updatedCar);
    } catch (error) {
        res.status(500).json({ message: "Error updating Car", error });
    }
});

module.exports = router;