import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import 'dotenv/config'
import connectToDB from './Config/connectToDB.js'
import appRoutes from './Routes/index.js'


const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json())
app.use(cors({
    origin : "http://localhost:5173",
    credentials : true
}))
app.use(cookieParser())

// Connect db
connectToDB();


// routes
app.use('/api' , appRoutes)


app.listen(PORT , ()=>{
    console.log(`Server is running on port ${PORT}`);
})