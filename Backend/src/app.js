const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/auth_routes");
const taskRoutes = require("./routes/task_routes");

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api/auth",authRoutes);
app.use("/api/tasks",taskRoutes);

module.exports = app;
