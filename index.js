const express = require("express");
const app = express();
var cors = require("cors");
app.use(cors());

app.get("/:date", (req, res) => {
  const { date } = req.params;
  console.log(date)

  if (Number(date)) {
    const timeInMs = Number(date);
    const time = new Date(timeInMs).toUTCString();
    res.json({
      unix: timeInMs,
      utc: time
    });
  }
  const time = new Date(date).toUTCString();
  res.json({
    unix: Date.parse(time),
    utc: time
  });
});

//Если строка даты пуста, то выводится текущее время
app.get("/", (req, res) => {
  const timeInMs = Date.now();
  const timeUTC = new Date().toUTCString();
  res.json({
    unix: timeInMs,
    utc: timeUTC
  });
});

app.listen(3000);