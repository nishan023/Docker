import express, { Request, Response } from "express";
const app = express();
import dotenv from "dotenv";


dotenv.config();

const PORT = process.env.PORT || 3000;
app.use(express.json());


app.use("/", (req:Request, res:Response) => {
  return res.json({
    message: "Hello from Docker",
  });
});

app.listen(PORT, () => {
  console.log(`Server is runnning on port ${PORT}`);
});
