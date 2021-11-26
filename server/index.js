const express = require("express")
const cors = require("cors")
const dotenv = require('dotenv')

const connectDB = require('./db.js')
const userRoutes = require('./routes/userRoutes')
const { notFound, errorHandler } = require("./middlewares/errorMiddlewares.js")

dotenv.config()

connectDB()

const app = express();


app.use(express.json());
app.use(cors());

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT

if (process.env.NODE_ENV === 'development') {
    app.use(cors({
        origin: process.env.CLIENT_URL
    }))
    
}

app.use('/api/users', userRoutes)



app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`)
})