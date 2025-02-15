const express = require("express");
const { errorHandler } = require("./middleware/errorMiddleware");
const dotenv = require("dotenv").config();
const connectDB = require("./connect/database");
const port = process.env.PORT || 5000;
 connectDB();
// require('./db')
// const port = 5000

const app = express();
app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use("/api/tasks", require("./routes/taskRouter"));
app.use("/api/users", require("./routes/userRouter"));

app.use(errorHandler);

app.listen(port, () => console.log(`Server listening on ${port}`));
