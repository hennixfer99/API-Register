import express from "express";
import "dotenv/config";
import UserRouter from "./routes/routeUser";
import loginRouter from "./routes/routeLogin"

const app = express();

app.use(express.json());

app.use("/user", UserRouter)
app.use("/login", loginRouter)


export default app.listen(3333, () => {
  startDatabase(),
  console.log('Server is running');
});