const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const emailPermitido = 'ronaldo@arbyte.com.br';
const senhaPermitida = 'ronaldo';

var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('API está no ar');
})

app.post('/login', (req, res) => {
  let email = req.body.email;
  let senha = req.body.senha;

  if (email == emailPermitido && senha == senhaPermitida) {
    res.send("OK");
  } else {
    res.statusCode = 401;
    res.send();
  }
});

app.post('/fibonacci', (req, res) => {
  let numero = +req.body.numero;

  if (numero <= 20) {
    let atual = 0;
    let lista = [0, 1];
    let i = 1;

    while (atual < numero) {
      atual = lista[i-1] + lista[i];
      if (atual < numero) {
        // adiciona o elemento atual na lista
        lista.push(atual);
      }
      i++;
    }

    // remove o primeiro elemento, que é 0
    lista.shift()

    // junta a lista em uma string com os números separados por ,
    let resultado = lista.join(',')

    res.send(resultado)
  } else {
    res.statusCode = 400;
    res.send("Ops...isso é muito pesado para eu processar");
  }
})

app.listen(3000, () => {
  console.log('Aplicação está no ar');
})
