import mongoose from 'mongoose';
import model from '../model/landlordapartmentModel.js'
import fs from 'fs';
import path from 'path';





export async function addApartment(req,res){
const owner = await model.landlord.findById(req.info._id)


try{
const {location,price,description,property_title} = req.body
    const {file,vid} = req.files;
const [a,b] = file
const [c] = vid;
let pic1 = a
let pic2 = b
let video = c

let data = await model.apartment.create({
    description,
    property_title,
    location,
    price,
    pic1,
    pic2,
    video,
    landlord:req.info._id,
    telephone: owner.telephone,
    email:owner.email
})


res.status(200).json({
    status:"success",
    media:{
       data
    }
})

}catch(err){
  
    res.status(400).json({
        status:'fail',
        message: err.message
    })
}

}

export async function allApartment(req,res){

try{
const info = await model.apartment.find({landlord:req.info._id})

if(info.length===0){
    return res.status(400).json({
        status:"fail",
message:'no apartment posted or advertised yet.'
    })
}

res.status(200).json({
    status: "success",
    data:{
        info
    }
})
}catch(err){
res.status(400).json({
    status:"fail",
    message:err.message
})
}

}

export async function apartmentById(req,res){

    try{
const info = await model.apartment.findOne({_id:req.params.id,landlord:req.info._id}).populate('landlord')


if(!info){
    return res.status(400).json({
        status:"fail",
        message:"id not found in the database"
    })
}

return res.status(200).json({
   status:"success",
   data:{
    info
   } 
})

    }catch(err){
res.status(400).json({
    status:"fail",
    message:err.message
})
    }

}


export async function updateApartment(req,res){

    const {location,price,description,property_title} = req.body;

    

const {file,vid} = req.files;

const [a,b] = file || [];

const [c] = vid || [];

let pic1 = a || null;

let pic2 = b || null;

let video = c || null;

const updatedApartment = {};



try{

if(pic1) updatedApartment.pic1 = pic1;
if(pic2) updatedApartment.pic2 = pic2;
if(video) updatedApartment.video = video;
if(location) updatedApartment.location = location;
if(price) updatedApartment.price = price;
if(description) updatedApartment.description = description;
if(property_title) updatedApartment.property_title = property_title;

const check = await model.apartment.findOne({_id:req.params.id,landlord:req.info._id});

if(!check){
    return res.status(404).json({
        status:"invalid id",
        message: "id of apartment does not exist in the databases man."
    })
}

const info = await model.apartment.findOneAndUpdate({_id:req.params.id,landlord:req.info._id},updatedApartment,{new:true,runValidators:true})

res.status(200).json({
    status:"success",
    data:{
     info   
    }
})

}catch(err){
    res.status(400).json({
        status:"fail",
        message:err.message
    })
}

}

export async function deleteApartment(req,res){
   
    try{

        const info = await model.apartment.findByIdAndDelete(req.params.id);

        res.status(200).json({
            status:"success",
            data : null
        })

    }catch(err){
        return res.status(400).json({
            status:"fail",
            message:err.message
        })
    }
    
}