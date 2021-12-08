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
// app.use(cors());

app.use('/api/users', userRoutes)



if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running..");
  });
}

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000


app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`)
})