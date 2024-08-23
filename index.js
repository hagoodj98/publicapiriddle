import express from "express";
import axios from "axios";
import bodyParser from "body-parser";


const app = express();
const port = 3000;
const API_URL = " https://riddles-api.vercel.app/random"
const comments = ["{Solve This Riddle!}","I'm hungry, What About You?","Is It Me Or Is The Computer Running Hot?","You Got To Be Quicker Than That","You Got This!","Come On, Just One More"];



app.use(express.static("public"));


app.get("/", async (req, res) => {

    try {
        const response = await axios.get(API_URL);
        const result = response.data;
      
        res.render("index.ejs", { 
            riddle: result.riddle,
            answer: result.answer,
            comments: comments[Math.floor(Math.random() * comments.length)]

         });
      } catch (error) {
        console.error("Failed to make request:", error.message);
        res.render("index.ejs", {
          error: error.message,
        });
      }
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
  