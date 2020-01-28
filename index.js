const express = require("express");
const app = express();
var cors = require("cors");
app.use(cors());

app.get("/api/timestamp/:date_string", (req, res) => {
  const { date_string } = req.params;
  const date_number = Number(date_string);
  
  if (date_number) {    
    const time = new Date(date_number);
    res.json({
      unix: time.getTime(),
      utc: time.toUTCString()
    });
  }

  const time = new Date(date_string);
  res.json({
    unix: time.getTime(),
    utc: time.toUTCString()
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