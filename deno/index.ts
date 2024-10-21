import express from "npm:express@4.18.2";
interface Person1 {
    name: string;
    age: number;
  }
  
  const app = express();

  app.get("/", (req, res) => {
    res.send("Welcome to the Dinosaur API!");
  });
  
  app.listen(8000);