const mongoose = require ('../database');

const petSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    porte: {
        type: String,
        required: true, 
    }, 
    pet_type: {
        type: String,
        required: true, 
    },  
    age:{
        type: String,
        required: false,

    },
    gender:{
        type: String,
        required: true, 
    },
    phone:{
        type: String,
        required: true, 
    },
    address:{
        state: {
            type: String,
            required: true,
        },
        city: {
            type: String,
            required: true,
        },
    },
    pet_owner: {
        name:{
            type: String,
            required: true,
        },
        id:{
            type: String,
            required: true,
        },
    },
    pet_description : {
        type: String,
        required: false, 
    },
    status : {
        type: String,
        required: true, 
    },
    createAt: {
        type: Date, 
        default: Date.now,  
        required: true,
    },
  
});


const Pet = mongoose.model('Pet', petSchema);



module.exports = Pet;

