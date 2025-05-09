import fs from 'fs';
import path from 'path';
import {createToken,verifyToken} from '../middleware/authenticate.js'
import model from '../model/landlordapartmentModel.js'






export async function signUp(req,res){

try{
let info = await model.landlord.create(req.body);


 //createToken({id:info.id},res);


createToken({data:info},res);

res.status(200).json({
  status:"success",
  data:{
    values:info
  }
})



}catch(err){
res.status(400).json({
  status:"fail",
  message:err.message
})
}
}


export async function logIn(req, res) {
  const { email, paswd } = req.body;

  try {
    const info = await model.landlord.findOne({ email, password: paswd });

    if (!info) {
      return res.status(400).json(`not found`);
    }

   
    // ✅ Set cookie
    createToken({data:info},res);

res.status(200).json({
  status:"successfull",
  message:"Logged In successfully"
})

  } catch (err) {
    console.error("Login error:", err);
  }
}


export async function logOut(req,res){

res.cookie('authToken','loggedout',{
  httpOnly:true,
  secure: 'strict',
  maxAge: 2 * 1000
})

res.status(200).json({status:'logged out'})

}






