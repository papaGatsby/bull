import {allApartment,apartmentById,homepage,bookApartment,head} from '../controller/tenantController.js'
import express from 'express';




export const tenantRot = express.Router();




tenantRot
.route("/head")
.get(head)

tenantRot
.route("/homerentals")
.get(homepage)


tenantRot
.route("/tenantapartment")
.get(allApartment)

tenantRot
.route("/tenantapartment/:id")
.get(apartmentById)

tenantRot
.route("/bookApartment/:id")
.post(bookApartment)