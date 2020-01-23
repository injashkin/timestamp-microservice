const express = require("express");
const app = express();
var cors = require('cors');
app.use(cors()); 

//Если строка даты пуста, то выводится текущее время
app.get("/api/timestamp/", (req, res) => {
  const timeInMs = Date.now();
  const timeUTC = new Date().toUTCString();
  res.json({
    unix: timeInMs, utc: timeUTC
  });
});

app.get("/api/timestamp/:date", (req, res) => {

  let date = req.params.date;

  if (Number(date)) {
    const timeInMs = Number(date);
    const time = new Date(timeInMs).toUTCString();
    res.json({
      unix: timeInMs, utc: time
    });
  }
  const time = new Date(date).toUTCString();
  res.json({
    unix: Date.parse(time), utc: time
  });
});

app.listen(3000);