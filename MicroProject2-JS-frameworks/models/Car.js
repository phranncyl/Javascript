//Import mongoose to define the schema and model
import mongoose from 'mongoose';

const carSchema = new mongoose.Schema({
    make: { 
        type: String, 
        required: [true, 'Car make is required.'],
        trim: true, // Removes unnecessary spaces
        minlength: [2, 'Car make must be at least 2 characters long.'],
        maxlength: [50, 'Car make must not exceed 50 characters.'],
        match: [/^[a-zA-Z\s]+$/, 'Car make should only contain letters and spaces.']
    }, 
    model: { 
        type: String, 
        required: [true, 'Car model is required.'],
        trim: true,
        minlength: [1, 'Car model must be at least 1 character long.'],
        maxlength: [50, 'Car model must not exceed 50 characters.']
    }, 
    year: { 
        type: Number, 
        required: [true, 'Manufacturing year is required.'],
        min: [1886, 'Year must be after the invention of the car (1886).'],
        max: [new Date().getFullYear(), 'Year cannot be in the future.']
    }, 
    color: { 
        type: String, 
        default: 'Red',
        trim: true,
        minlength: [3, 'Color name must be at least 3 characters long.'],
        maxlength: [20, 'Color name must not exceed 20 characters.']
    },
    price: { 
        type: Number, 
        required: [true, 'Car price is required.'],
        min: [1, 'Price must be at least 1.'],
        validate: {
            validator: Number.isInteger,
            message: 'Price must be an integer value.'
        }
    }, 
    mileage: { 
        type: Number, 
        default: 0,
        min: [0, 'Mileage cannot be negative.']
    }, 
    isElectric: { 
        type: Boolean, 
        default: false 
    }, 
    owner: { 
        type: String, 
        default: 'Dealer',
        trim: true,
        minlength: [3, 'Owner name must be at least 3 characters long.'],
        maxlength: [50, 'Owner name must not exceed 50 characters.']
    }, 
    features: {
        type: [String],
        validate: {
            validator: function(features) {
                return features.every(feature => typeof feature === 'string' && feature.length <= 30);
            },
            message: 'Each feature must be a string with a maximum length of 30 characters.'
        }
    }, 
    registrationDate: { 
        type: Date, 
        default: Date.now,
        validate: {
            validator: function(date) {
                return date <= Date.now();
            },
            message: 'Registration date cannot be in the future.'
        }
    }
});

// Create a model from the schema
const Car = mongoose.model('Car', carSchema);

export default Car;