# Ticket Management System

## Description
A simple Ticket Management System API built with Node.js and MongoDB that allows users to perform CRUD operations on support tickets. 

## Features
- The auto generated database ticket ID for each tickets.
- Create a new support ticket.
- Retrieve all tickets.
- Retrieve a ticket by its unique identifier.
- Update a ticket by its unique identifier.
- Delete a ticket by its unique identifier.

### Prerequisites
- Node.js installed on your machine
- MongoDB installed and running locally or accessible via a cloud database
- Nodemon installed on your machine to using running server

## Project Structure

├── Config
     ├── Db.js
├── Controller
│   ├── ticketController.js
├── models
│   ├── ticketModels.js
├── routes
│   ├── ticketRoutes.js
├── .env
└── README.md

## Ticket Routes
- POST /api/tickets/createTickets - (Create a new ticket)
- GET /api/tickets//getTickets -    (Get all tickets)
- GET /api/tickets/getTicketsById/   (get ticket ID)
- PUT /api/tickets/updateTickets/     (update tickets )
- DELETE /api/tickets/deleteTickets/   (delete tickets)

## run project cmd
 - node index.js
 - npm run dev

 
