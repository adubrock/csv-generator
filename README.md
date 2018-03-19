# csv-generator

The csv generator pulls a mock db of events posted on my JSON server and then writes a csv file within the project directory that itemizes each entry in the db, showing the following fields:

a)	Timestamp
b)	Username
c)	Event name
d)	Number of events recorded
e)	Event ID

The mock db is posted in this github project: https://github.com/adubrock/json-server-test
The db can be viewed on My JSON server at this URL: https://my-json-server.typicode.com/adubrock/json-server-test/

To run the app:
* clone this repo
* go into the project folder and run the js file (`node csv-generator.js`)
* An Events.csv file will be written in the project folder with the above itemized events.
