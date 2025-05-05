import {verifyToken,isLoggedIn,both} from '../middleware/authenticate.js'
import viewController from '../controller/viewController.js'
import express from 'express';

 export const viewrouter = express.Router();


 viewrouter.get("/",viewController.home)

 viewrouter.get('/tenantoverview',both,viewController.tenantOverview)

 viewrouter.get('/signup',viewController.createAccount)

viewrouter.get('/login',viewController.login)

 viewrouter.get('/base',viewController.updateAdvert)

viewrouter.get("/update",isLoggedIn,viewController.updateApartment);

viewrouter.get("/update/:id",isLoggedIn,viewController.updateAdvert)

viewrouter.get('/overview',isLoggedIn,viewController.overview)

viewrouter.get('/apartmentdetail/:id',both,viewController.detailapartment)

viewrouter.get("/dash",isLoggedIn,viewController.dashbod)

viewrouter.get("/advertise",isLoggedIn,viewController.advert)

viewrouter.get("/delete",isLoggedIn,viewController.deleteApartment)

viewrouter.get("/deleteDetail/:id",both,viewController.detailapartment)


