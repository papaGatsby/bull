
import path from 'path'
import {landRot} from './route/landlordauthenticationRoute.js';
import {tenantRot} from './route/tenantRoute.js';
import {routeApartment} from './route/landlordapartmentRoute.js';
import {viewrouter} from './route/viewRoute.js'
import express from 'express';
import cookieParser from 'cookie-parser'

 const app = express();



 app.use(cookieParser())

 app.use(express.static('public'))

app.set('view engine','pug')
app.set('views',path.join(process.cwd(),'views'));



 app.use(express.json());




app.use(viewrouter)


app.use(tenantRot)



app.use(landRot);



app.use(routeApartment);

export default{
   app
}