// server.js
const express = require('express');
const app = express();
const port = 8080;
const path = require('path');

app.set("/", "html");
app.use(express.static(path.join(__dirname, "/")));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Menanggapi permintaan GET ke root path
app.get('/', (req, res) => {
  res.render('index');
});

// Mendengarkan port tertentu
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});