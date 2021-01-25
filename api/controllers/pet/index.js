const express = require ('express');
const router = express.Router();
const Pet = require ('../../models/Pet');

//pet register  
router.post('/pet-register', async(request, response)=>{

    const NewPet =  request.body
    
    NewPet.status = "aguardando"

    const pet =  await Pet.create(NewPet)
    
    response.send(pet) 
}),


router.get('/pets', async(request, response)=>{
    
    const pets = await Pet.find()  
    
    response.send(pets)
   
}),

module.exports = app => app.use(router)