const express = require("express");
const cors = require("cors");
const db = require("./db");
const app = express();
const port = process.env.SERVER_PORT || 3000;

app.use(cors());

app.get("/", (_, res) => {
  const sendData = async () => {
    const data = await db.query(
      "SELECT movies.id, movies.title, movies.username,movies.genre_id,genres.title as genre FROM movies JOIN genres ON movies.genre_id = genres.id;"
    );
    res.json(data.rows);
  };
  sendData();
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
