import express from 'express'
import userRoute from './routes/userRoute.js';
import bodyParser from 'body-parser';
import cors from 'cors';


const app = express()

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use('/api/user',userRoute)


app.listen(3000,() =>{
    console.log('port 3000')
})