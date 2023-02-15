import mongoose from 'mongoose';

const Unprepocess = mongoose.Schema({
    date:{
        type: String,
        required:true
    },
    username:{
        type: String,
        required:true
    },
    followers:{
        type: String,
        required:true
    },
    following:{
        type: String,
        required:true
    },

    usernametarget:{
        type: String,
        required:true
    },

    tweet:{
        type: String,
        required:true
    },

}); 

export default mongoose.model('Unprepocess', Unprepocess);