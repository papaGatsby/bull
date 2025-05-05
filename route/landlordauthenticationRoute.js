import {logIn,signUp,logOut} from '../controller/landlordauthenticationController.js'
import express from 'express'
import {verifyToken,createToken,isLoggedIn} from '../middleware/authenticate.js';
export const landRot = express.Router()


landRot
.route("/signUp")

.post(signUp)


landRot
.route("/logino")

.post(logIn)



landRot
.route("/logout")
.get(logOut)




