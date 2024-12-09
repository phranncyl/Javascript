//Import mongoose to define the schema and model
import mongoose from 'mongoose';

const carSchema = new mongoose.Schema({
    make: { 
        type: String, 
        required: [true, 'Car make is required.'] 
    }, 
    model: { 
        type: String, 
        required: [true, 'Car model is required.'] 
    }, 
    year: { 
        type: Number, 
        required: [true, 'Manufacturing year is required.'] 
    }, 
    color: { 
        type: String, 
        default: 'Red' 
    },
    price: { 
        type: Number, 
        required: [true, 'Car price is required.']
    }, 
    mileage: { 
        type: Number, 
        default: 0 
    }, 
    isElectric: { 
        type: Boolean, 
        default: false 
    }, 
    owner: { 
        type: String, 
        default: 'Dealer' 
    }, 
    features: [String], 
    registrationDate: { 
        type: Date, 
        default: Date.now 
    }
});

// Create a model from the schema
const Car = mongoose.model('Car', carSchema);

export default Car;