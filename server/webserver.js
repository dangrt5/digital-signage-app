const express = require("express");
const mysql = require("mysql");
const { resolve } = require("path");
const credentials = require("./credentials.js");
const cors = require("cors");
const bodyParser = require("body-parser");
const port = process.env.PORT || 3001;

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(resolve(__dirname, "public")));
app.use(express.json());
app.use((req, res, next) => {
  res.header("Allow-Control-Allow-Origin", "*");
  res.header(
    "Allow-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

const con = mysql.createConnection(credentials);

con.connect(err => {
  if (err) {
    throw err;
  }
  console.log("Connected");
});

// app.get("/", (req, res) => res.send("Hello World!"));

//LOCATIONS PAGE

app.get("/locations", (req, res) => {
  let sql = `SELECT * FROM locations`;
  con.query(sql, (err, result) => {
    if (err) throw err;
    console.log("Retrieve locations success");
    res.send(result);
  });
});

app.post("/locations/add", (req, res) => {
  let sql = `INSERT INTO locations (city, state) VALUES ('${
    req.body.user.city
  }', '${req.body.user.state}')`;
  con.query(sql, (err, result) => {
    if (err) throw err;
    console.log("Succcess");
    res.send(result);
  });
});

// ROOMS PAGE

app.get("/rooms/:id", (req, res) => {
  let sql = `SELECT * FROM rooms WHERE locationID = '${req.params.id}'`;
  con.query(sql),
    (err, result) => {
      if (err) throw err;
      console.log("Retrieved room success");
      res.send(result);
    };
});

// BOARDS PAGE

// PANELS

app.listen(port, () => console.log(`Server listening on ${port}`));
