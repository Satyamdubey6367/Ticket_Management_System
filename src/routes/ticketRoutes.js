const express = require('express');
const addTicketPage = require('../Controller/ticketController');
const router = express.Router();

router.post("/createTickets",addTicketPage.createTicket)
router.get("/getTickets",addTicketPage.getTickets)
router.delete("/deleteTickets/:id",addTicketPage.deleteTicket)
router.put("/updateTickets/:id",addTicketPage.updateTicket)
router.get("/getTicketsById/:id",addTicketPage.getTicketId)

module.exports = router;