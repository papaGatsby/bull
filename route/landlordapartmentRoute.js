import {  addApartment, allApartment, apartmentById, updateApartment, deleteApartment } from '../controller/landlordapartmentController.js'
import {verifyToken,isLoggedIn,createToken} from '../middleware/authenticate.js'
import express from 'express';
import multer from 'multer'
import path from 'path'

// Set up the upload directory path
const uploadDir = path.join(process.cwd(), 'public','uploads'); // Use a dedicated 'uploads' folder

// Multer setup
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        // Ensure the 'uploads' folder exists
        cb(null, uploadDir);
    },
    filename: function (req, file, cb) {
        
        // Generate a unique name for each file (you can modify this)
        cb(null, req.info._id + '-' + file.originalname);
    }
});

const upload = multer({ storage: storage });

export const routeApartment = express.Router();

// Routes



routeApartment.route("/allApartment")
    .get(verifyToken, allApartment);
 

routeApartment.route("/addApartmentPortal")
    
    .post(isLoggedIn,upload.fields([ // Specify the fields for the files
        { name: 'file', maxCount: 2 }, // images (multiple files)
        { name: 'vid', maxCount: 1 }   // single video
    ]), addApartment);

routeApartment.route(`/landapartment/:id`)
    .get(verifyToken,apartmentById)
    .patch(verifyToken,upload.fields([{name:'file',maxCount:2},{name:'vid',maxCount:1}]),updateApartment)
    .delete(isLoggedIn,deleteApartment);
