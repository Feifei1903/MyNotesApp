import "dotenv/config";

import express from "express";
//create new instance
const app = express();


const notes = [
  { id: 1, text: "Buy milk" },
  { id: 2, text: "Finish the deployment tutorial" },
  { id: 3, text: "Water the plants" },
  { id: 4, text: "Take the dog for a walk" },
  { id: 5, text: "Read a book" },
];
//app.get takes two arguments, the first is the path, the second is a callback function that takes two arguments, the request and response objects
// app.get("/", (req, res) => {
//   res.send("Hello!");
// });
//return the index file from the public folder
app.use(express.static("public"));

app.use(express.json());

  
app.get("/api/notes", (req, res) => {
  res.json(notes);
});

// app.listen(8000, () => {
//   console.log("Listening on http://localhost:8000");
// });

//read port from .env file
const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});