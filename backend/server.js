import "dotenv/config";

import express from "express";

const app = express();

const notes = [
  { id: 1, text: "Buy milk" },
  { id: 2, text: "Finish the deployment tutorial" },
  { id: 3, text: "Water the plants" },
];

// app.get("/", (req, res) => {
//   res.send("Hello!");
// });
app.use(express.static("public"));

app.use(express.json());

  
app.get("/api/notes", (req, res) => {
  res.json(notes);
});

// app.listen(8000, () => {
//   console.log("Listening on http://localhost:8000");
// });

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});