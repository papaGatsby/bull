import mongoose from "mongoose"


const landlordSchema = new mongoose.Schema({
  firstName:{
    type:String,
    required:[true,"First name is required"]
  },
  lastName:{
    type:String,
    required:[true,"Last name is required"]
  },
  email:{
    type:String,
    required:[true,"Email is required"],
    unique: true,
    lowercase:true
  },
  password:{
type:String,
required:[true,"Password is required"]
  },
  telephone:{
    type:String,
    required:[true,"Phone number is required"]
  }  
},{timestamps:true});








const apartmentSchema = new mongoose.Schema({
    location:{
        type:String,
        required:[true,"Location is required"]
    },
    price:{
        type:Number,
        required:[true,"Price is required"],
        min:[0,"Price cannot be negative"]
    },
    landlord: {
        type:mongoose.Schema.ObjectId,
        ref: "Landlord",
        required:true
    }
    ,
    pic1:{
      type:Object,
      required:[true,'please specify the path of image1']
    },

    pic2:{
type:Object,
required:[true,'please specify the path of image2']
    },

   video: {
type:Object,
required:[true,'please specify the path of video']
    },
    telephone:{
      type:String,
      required:[true,'please add the telphone number']
    },
    email:{
      type:String,
      required:[true,'please add the email']
    },
    property_title:{
         type:String,
         required:[true,'please add property title']
    },
    description:{
      type:String,
      required:[true,'please provide a description']
    },
    available:{
      type:Boolean,
      default:true
    }

},{timestamps:true})

const landlord = mongoose.model("Landlord",landlordSchema);
const apartment = mongoose.model("Apartment",apartmentSchema);

export default{
    landlord,
    apartment
}