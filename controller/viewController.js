import rent from '../model/landlordapartmentModel.js'



function home(req,res){
res.status(200).render('homeRentals')
}

async function overview(req, res) {

   

    try{
            if (!req.info || !req.info._id) {
              return res.status(401).send('Unauthorized access.');
            }

            let homes = await rent.apartment.find({ landlord: req.info._id });
         
            res.status(200).render('overview', {
                title: 'Your Dashboard',
                homes // send it to the view
              });
              

    }catch(err){console.log(`oops, there is some error  ${err.message}`)}
    
  }
  
  
  

async function updateApartment(req,res){
let homes = await rent.apartment.find({'landlord':req.info._id});

res.status(200).render('updateapartment',{
    title:'all update apartment',
    homes
})
}

async function updateAdvert(req,res){
    let index = req.params.id;
    let info = await rent.apartment.findById(index);
 
try{
res.status(200).render('updateAdvertise',{
    title:'update apartment',
    info  
})
}catch(err){console.log(`oops, error`)}

}

async function updateById(req,res){
    let index = req.params.id;
    
}

async function detailapartment(req,res){

 try{
  
    let index = req.params.id;

    let info = await rent.apartment.findById(index);

  

    res.status(200).render('apartment',{
        title:'apartment',
        info,
       
    })

 }catch(err){}



}

async function deleteApartment(req,res){

try{
     
if(!req.info || !req.info._id){return res.status(401).send(`Unauthorized Access`)}

let homes  = await rent.apartment.find({landlord:req.info._id});

res.status(200).render('deleteApartment',{
    title: 'delete Apartment',
    homes
})

}catch(err){console.log(err.message)}


}

async function tenantOverview(req,res){
    const homes = await rent.apartment.find()

    res.status(200).render('overview',{
        title:'all apartment',
          homes
    })

}

function login(req,res){
    res.status(200).render('login')
}

function createAccount(req,res){
    res.status(200).render('signup')
}

function dashbod(req,res){
 
    res.status(200).render('dashboard')
}

function advert(req,res){
    res.status(200).render('advertisement')
}


function bases(req,res){
    res.status(200).render('base')
}






export default {
home,
overview,
detailapartment,
updateApartment,
updateAdvert,
tenantOverview,
login,
createAccount,
dashbod,
advert,
bases,
deleteApartment
}