import express from 'express';
import {getUnpreprocess,saveUnpreprocess,updateUnpreprocess,getUnpreprocessById,deleteUnpreprocess} from "../controllers/UnpreprocessController.js";

const router = express.Router();

router.get('/', getUnpreprocess); 

router.post('/', saveUnpreprocess); 

router.get('/:id', getUnpreprocessById); 

router.patch('/:id', updateUnpreprocess); 

router.delete('/:id', deleteUnpreprocess); 

export default router;