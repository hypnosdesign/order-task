const mongoose = require('mongoose');
const validator = require('validator');

// Modello degli Utenti
const User = mongoose.model('User',{
  name: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true,
    minlenght: 7,
    trim: true,
    validate(value) {
      if(value.toLowerCase().includes('password')) {
        throw new Error('la password non può contenere la parola "password"')
      }
    }
  },
  email: {
    type: String,
    required: true,
    validate( value ) {
      if(!validator.isEmail(value)) {
        throw new Error('Email non valida')
      }
    }
  }
});


module.exports = User;
