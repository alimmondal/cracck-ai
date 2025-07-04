const express = require("express");
const cors = require('cors');
const { GoogleGenAI } = require("@google/genai");
// import {GoogleGenAI} from '@google/genai';
const app = express();
require("dotenv").config();
app.use(cors());
app.use(express.json())
const port = process.env.PORT || 5000;

app.use(express.urlencoded({extended:true}))


const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const ai = new GoogleGenAI({apiKey: GEMINI_API_KEY});





app.get("/", (req, res) => {
  res.send({ data: "server running", status: 200 });
});

app.listen(port, () => {
  console.log("Server running on port " + port);
});
