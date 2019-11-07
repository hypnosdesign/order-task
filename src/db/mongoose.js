const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});


 // Modello per i prodotti
const Prodotti = mongoose.model('Prodotti',{
  codice: {
    type: String,
    validate(value) {
      if(parseInt(value) < 0) {
        throw new Error('Il codice non può essere negativo')
      }
    }
  },
  descrizione: {
    type: String,
    trim: true
  },
  qnt: {
    type: Number
  },
  fornitore: {
    type: Array
  }
});



 // const me = new User({
 //   name: 'Mattia',
 //   password: '8080passwrd',
 //   email: 'giuseppe@picon.it'
 // });
 //
 // const prodotto = new Prodotti({
 //   codice: '0345',
 //   descrizione: 'martello gr. 123',
 //   qnt: 5,
 //   fornitore: [
 //     {
 //       nome: 'Fratelli Vitale',
 //       prezzo: 1.3
 //     },
 //     {
 //       nome: 'Viridex',
 //       prezzo: 1.34
 //     }
 //   ]
 // });

 //prodotto.save().then(result => console.log(result)).catch( err => console.log(err));
