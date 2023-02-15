import Unpreprocess from "../models/Unpreprocess.js";

export const getUnpreprocess = async (req,res) => {
    try{
        const unpreprocess = await Unpreprocess.find();
        res.json(unpreprocess);
    }catch(error){
        res.status(500).json({message:error.message});
    }
}

export const getUnpreprocessById = async (req,res) => {
    try{
        const unpreprocess = await Unpreprocess.findById(req.params.id);
        res.json(unpreprocess);
    }catch(error){
        res.status(404).json({message:error.message});
    }
}

export const saveUnpreprocess = async (req,res) => {
    const unpreprocesss = new Unpreprocess(req.body);
    try{
        const savedunprepocess = await unpreprocesss.save();
        res.status(200).json(savedunprepocess);
    }catch(error){
        res.status(400).json({message:error.message});
    }
} 


export const updateUnpreprocess = async (req,res) => {
    const cekId = await Unpreprocess.findById(req.params.id);
    if(!cekId) return res.status(404).json({message: "Data tidak ditemukan"});
  
    try{
        const updatedunprepocess = await Unpreprocess.updateOne({_id: req.params.id}, {$set: req.body});
        res.status(200).json(updatedunprepocess);
    }catch(error){
        res.status(400).json({message:error.message});
    }
} 

export const deleteUnpreprocess = async (req,res) => {
    const cekId = await Unpreprocess.findById(req.params.id);
    if(!cekId) return res.status(404).json({message: "Data tidak ditemukan"});
  
    try{
        const deletedunprepocess = await Unpreprocess.deleteOne({_id: req.params.id});
        res.status(200).json(deletedunprepocess);
    }catch(error){
        res.status(400).json({message:error.message});
    }
} 