const mongoose = require('mongoose');
const employeSchema = new mongoose.Schema(
  {
    nom: {
      type: String,
      required: true,
      match: /^[A-Za-z\s]+$/
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: /^(\w)+[@][a-zA-Z]+\.[a-z]{2,6}$/
    },
    tel: {
      type: String,
      required: true,
      match: /^(0)[5-7][0-9]{8}$/
    },
    salaire: {
      type: Number,
      required: true,
      min: 5000
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Employe', employeSchema);