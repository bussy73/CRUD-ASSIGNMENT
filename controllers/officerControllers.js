const Officer = require("../models/officer.js");

exports.createNewOfficer = (req, res) => {
    Officer.create({
        name: req.body.name,
        email: req.body.email,
        country: req.body.country
    }, (error, newOfficer) => {
        if (error) {
            return res.status(500).json({ message: error });
        } else {
            return res.status(200).json({ message: "New officer created.", newOfficer});
        }
    });
};

exports.fetchOfficers = (req, res) => {
    Officer.find({}, (error, officers) => {
        if (error) {
            return res.status(500).json({ message: error });
        } else {
            return res.status(200).json({ message: officers });
        }
    });
};

exports.fetchOfficer = (req, res) => {
    officer.findById(req.params.id, (error, officer) => {
        if (error) {
            return res.status(500).json({ message: error });
        } else if (!officer) {
            return res.status(404).json({ message: "Officer not found." });
        } else {
            return res.status(200).json({ officer });
        }
    });
};

exports.updateOfficer = (req, res) => {
    Officer.findByIdAndUpdate(req.params.id, {
        name: req.body.name
    }, (error, officer) => {
        if (error) {
            return res.status(500).json({ message: error });
        } else if (!officer) {
            return res.status(404).json({ message: "Officer not found. "});
        } else {    
            officer.save((error, updatedOfficer) => {
                if (error) {
                    return res.status(500).json({ message: error });
                } else {
                    return res.status(200).json({ message: "Officer details updated successfully." });
                }
            });
        }
    });
};

exports.deleteOfficer = (req, res) => {
    Officer.findByIdAndDelete(req.params.id, (error, Officer) => {
        if (error) {
            return res.status(500).json({ message: error });
        } else if (!Officer) {
            return res.status(404).json({ message: "Officer not found." });
        } else {
            return res.status(200).json({ message: "Officer deleted successfully." });
        }
    });
};