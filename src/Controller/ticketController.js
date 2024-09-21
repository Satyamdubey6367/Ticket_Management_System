const ticketModel = require("../models/ticketModel");

const createTicket = async (req, res) => {
  try {
    const { title, description, status } = req.body;
    function generateTicketId() {
      const now = new Date();

      const year = now.getFullYear();
      const month = String(now.getMonth() + 1).padStart(2, "0");
      const day = String(now.getDate()).padStart(2, "0");
      const hours = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      const seconds = String(now.getSeconds()).padStart(2, "0");
      const milliseconds = String(now.getMilliseconds()).padStart(3, "0");

      const ticketId = `order-${year}${month}${day}-${hours}${minutes}${seconds}-${milliseconds}`;

      return ticketId;
    }

    const ticket = await ticketModel.create({
      title,
      description,
      status,
      ticketId: generateTicketId(),
    });
    console.log(ticket);

    res.status(201).json(ticket);
  } catch (error) {
    res.status(400).json({ message: "error creating ticket" });
  }
};

const getTickets = async (req, res) => {
  try {
    const tickets = await ticketModel.find();
    res.status(200).json(tickets);
  } catch (error) {
    res.status(500).send({ message: "Error fetching tickets", error });
  }
};

const getTicketId = async (req, res) => {
  try {
    const ticket = await ticketModel.findById(req.params.id);
    if (!ticket) return res.status(404).json({ message: "Ticket not found" });
    console.log(ticket);
    res.status(200).json(ticket);
  } catch (error) {
    res.status(500).send({ message: "Error fetching ticket", error });
  }
};

const updateTicket = async (req, res) => {
  try {
    const { title, description, status } = req.body;
    const ticket = await ticketModel.findByIdAndUpdate(
      req.params.id,
      { title, description, status, updatedAt: Date.now() },
      { new: true, runValidators: true }
    );
    if (!ticket) return res.status(404).json({ message: "Ticket not found" });
    res.status(200).json(ticket);
  } catch (error) {
    res.status(400).json({ message: "Error updating ticket", error });
  }
};

const deleteTicket = async (req, res) => {
  try {
    console.log(req.params.id);
    const ticketId = req.params.id.trim();
    const ticket = await ticketModel.findByIdAndDelete(ticketId);
    if (!ticket) return res.status(404).json({ message: "Ticket not found" });
    res.status(200).json({ message: "Ticket deleted successfully" });
  } catch (error) {
    console.error("Error deleting ticket:", error);
    res.status(500).json({ message: "error deleting ticket", error });
  }
};

module.exports = {
  createTicket,
  getTickets,
  getTicketId,
  updateTicket,
  deleteTicket,
};
