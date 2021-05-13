const express = require('express');
const officerRouter = express.Router();
const officerController = require('../controllers/officerControllers');


officerRouter.get('/officer', officerController.fetchOfficer);
officerRouter.get('/officer/:id', officerController.fetchOfficer);
officerRouter.post('/officer', officerController.createNewOfficer);
officerRouter.put('/officer/:id', officerController.updateOfficer);
officerRouter.delete('/officer/:id', officerController.deleteOfficer);

module.exports = officerRouter;