const express = require("express");
const app = express();
var cors = require("cors");
app.use(cors());

app.get("/api/timestamp/:date_string", (req, res) => {
  const { date_string } = req.params;  

  if (Number(date_string)) {    
    const time = new Date(date_string).toUTCString();
    res.json({
      unix: date_string.getTime(),
      utc: time
    });
  }
  const time = new Date(date_string).toUTCString();
  res.json({
    unix: Date.parse(time),
    utc: time
  });
});

//Если строка даты пуста, то выводится текущее время
app.get("/api/timestamp/", (req, res) => {
  const timeInMs = Date.now();
  const timeUTC = new Date().toUTCString();
  res.json({
    unix: timeInMs,
    utc: timeUTC
  });
});

app.listen(3000);