let fs = require("fs");
let csvData = "Timestamp,UserName,EventName,NumberEventsRecorded,EventID\n";
const https = require("https");
const url =
  "https://my-json-server.typicode.com/adubrock/json-server-test/events";

https.get(url, res => {
  res.setEncoding("utf8");
  let body = "";
  res.on("data", data => {
    body += data;
  });
  res.on("end", () => {
    body = JSON.parse(body);
    body.forEach(function(event) {
      csvData +=
          `${event.timestamp},` +
          `${event.user_info},` +
          `${event.event_name},` +
          `${event.num_of_events},` +
          `${event.event_id}\n`
      });
      fs.writeFile('Events.csv', csvData, 'utf8', function (err) {
      if (err) {
        console.log('An error occured - your csv file either did not save or a corrupted file was saved.');
      } else {
        console.log('Your events csv file (Event.csv) has been saved to the current directory!');
      }
    });
  });
});
