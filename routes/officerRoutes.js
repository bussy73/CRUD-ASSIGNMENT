const express = require('express');
const officerRouter = express.Router();
const officerController = require('../controllers/officerControllers');


officerRouter.get('/officers', officerController.fetchOfficers);
officerRouter.get('/officers/:id', officerController.fetchOfficer);
officerRouter.post('/officers', officerController.createNewOfficer);
officerRouter.put('/officers/:id', officerController.updateOfficer);
officerRouter.delete('/officers/:id', officerController.deleteOfficer);

module.exports = officerRouter;