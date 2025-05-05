import fs from 'fs';
import path from 'path';
import model from '../model/landlordapartmentModel.js'




export async function head(req,res){
    let ans = fs.readFileSync(path.join(process.cwd(),'public','head.html'),'utf-8');
    res.writeHead(200,{"Content-Type":"text/html"});
    res.end(ans)
}

export async function homepage(req,res){
 
let result = fs.readFileSync(path.join(process.cwd(),'public','homeRentals.html'),'utf-8');
res.writeHead(200,{'Content-Type':'text/html'});
res.end(result)
}


export async function allApartment(req,res){

try{
    const info = await model.apartment.find();
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

export async function apartmentById(req,res){


try{

const info = await model.apartment.findById(req.params.id);

if(!info){
  return res.status(400).json({

status:"fail",
message:"id not found in the database"

  })  
}



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


export async function bookApartment(req,res){

}






