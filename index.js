import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import route from './routes/index.js';

const app = express();
const port = 3000;

mongoose.set('strictQuery', false);
mongoose.connect('mongodb://127.0.0.1:27017/sna_db').

  catch(error => handleError(error));
 
// Or: 
try {
  await mongoose.connect('mongodb://127.0.0.1:27017/sna_db');
 
} catch (error) {
  //handleError(error);
  mongoose.connection.on('error', err => {
    logError(err);
  });
}

app.use(cors());
app.use(express.json());
app.use('/unpreprocess',route);


app.listen(port,()=> {console.log(`Server Running on port ${port}`)}); 

