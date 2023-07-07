const mongoose = require("mongoose");

const Scheme = mongoose.Schema;

const authorScheme = new Scheme({
  firstName: { type: String, required: true, max: 100 },
  lastName: { type: String, required: true, max: 100 },
  dateOfBirth: { type: Date },
  dateOfDeath: { type: Date },
});
