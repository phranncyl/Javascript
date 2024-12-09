import express from 'express';
import Car  from '../models/Car.js';

const router=express.Router();

router.post('/', async (req, res) => {
    try {
        // Create a new car document using the data from the request body
        const newCar = new Car({
            make: req.body.make,
            model: req.body.model,
            year: req.body.year,
            color: req.body.color,
            price: req.body.price,
            mileage: req.body.mileage,
            isElectric: req.body.isElectric,
            owner: req.body.owner,
            features: req.body.features,
            registrationDate: req.body.registrationDate
        });

        // Save the new car document to the database
        await newCar.save();

        // Send a success response to the client
        res.status(201).json({ message: 'Car created successfully', car: newCar });
    } catch (error) {
        // Handle any errors that occur
        console.error(error);
        res.status(500).json({ message: 'Failed to create car', error: error.message });
    }
});

export default router;