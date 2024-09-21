const express = require("express");
const mongoose = require("mongoose");
const ticketRoutes = require("./src/routes/ticketRoutes");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");


dotenv.config();
const port = 3002;
const app = express();

mongoose.connect(process.env.DB_URL)
  .then((res) => {
    console.log(" database connected");
  })
  .catch((err) => {
    console.log(err);
  });

  const ticketModel = require("./src/models/ticketModel");
const {createTicket, getTickets, getTicketId, updateTicket, deleteTicket} = require("./src/Controller/ticketController")

app.use(express.json());
app.use(bodyParser.json())

app.use('/api/ticket', ticketRoutes)

app.listen(3002, (error) => {
  if (error) {
    console.log("something is wrong");
  }
    console.log(`server is running on port ${port}`);
});
