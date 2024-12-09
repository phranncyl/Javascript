import express from 'express';
import Car  from '../models/Car';

const router=express.Router();

router.post('/',async (req,res)=>{
    try{
        console.log(req.body);
    } catch(error){

    }
});
