import jwt from 'jsonwebtoken';
import User from '../model/landlordapartmentModel.js'
let check = false;





export function createToken(user,res) {
  const token = jwt.sign(user, process.env.ACCESS_TOKEN, {
    expiresIn: '1800s'
  });

  

  res.cookie('authToken', token, {
    httpOnly: true,
    sameSite: 'Strict',
    maxAge: 30 * 60 * 1000, // 30 minutes
  });


}




export async function verifyToken(req,res,next){



    const token = req.cookies.authToken;

    if(!token){
      
        return res.status(400).json({
            status:'unauthorize',
            message:'please login first'
        });
    }
   
    jwt.verify(token,process.env.ACCESS_TOKEN,(err,decoded)=>{
if(err) return res.status(400).json({
    status:'authorize',
    message:'please your token expired login again'
});

req.info = decoded

next();
    })
}


export async function isLoggedIn(req,res,next){


try{
const token = req.cookies.authToken;


if(!token){
  return res.status(400).json({
    status:'unauthorize',
    message: 'please login'
  })
}

const decoded = jwt.verify(token, process.env.ACCESS_TOKEN);

req.info = decoded;

res.locals.user = decoded

check= false;

if(req.url==='/delete'){check=true;}


next();
}catch(err){

next();
  
  
}


}

export async function both(req,res,next){


  try{

    const token = req.cookies.authToken;

    if(token){
const decoded = jwt.verify(token,process.env.ACCESS_TOKEN);
req.info = decoded;

  res.locals.user = decoded;

  if(check){res.locals.delta=decoded}

next();
    }
    else{
      next();
    }

  }catch(err){

  }
}
