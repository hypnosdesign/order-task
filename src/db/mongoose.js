const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});

 const User = mongoose.model('User',{
   name: {
     type: String,
     required: true
   },
   password: {
     type: Number,
   required: true
   }
 });

const Prodotti = mongoose.model('Prodotti',{
  codice: {
    type: Number
  },
  codiceFornitore: {
    type: Number
  },
  descrizione: {
    type: String
  },
  prezzo: {
    type: Number
  },
  qnt: {
    type: Number
  }

});

 const me = new User({
   name: 'Mattia',
   password: 8080
 });

 me.save().then(result => console.log(result)).catch( err => console.log(err));
