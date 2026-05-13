const Employe = require('../models/employeSchema.js');
// CREATE
exports.createEmploye = async (req, res) => {
  try {
    //const{nom,email,salaire,tel}=req.body;
    const employe=Employe.create(req.body);
    const employes=Employe.find();
   
    res.status(201).json(employes);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// READ ALL
exports.getAllEmployes = async (req, res) => {
  try {
    const employes = await Employe.find();
    res.json(employes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// READ BY ID
exports.getEmployeById = async (req, res) => {
  try {
    const employe = await Employe.findById(req.params.id);

    if (!employe) {
      return res.status(404).json({ message: "Employe not found" });
    }
   
    res.json(employe);
  } catch (error) {
    res.status(400).json({ message: "Invalid ID" });
  }
};

// UPDATE
exports.updateEmploye = async (req, res) => {
  try {
    const employe = await Employe.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!employe) {
      return res.status(404).json({ message: "Employe not found" });
    }

    res.json(employe);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// DELETE
exports.deleteEmploye = async (req, res) => {
  try {
    const employe = await Employe.findByIdAndDelete(req.params.id);

    if (!employe) {
      return res.status(404).json({ message: "Employe not found" });
    }

    res.json({ message: "Employe deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};