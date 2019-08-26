const connection = require('./conf');
const express = require('express')
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

// Support JSON-encoded bodies
app.use(bodyParser.json());
// Support URL-encoded bodies
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use((req, res,next) => {
  res.header('Access-Control-Allow-Origin', req.headers.origin || '*')
	res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,HEAD,DELETE,OPTIONS')
  res.header('Access-Control-Allow-Headers', 'content-Type,x-requested-with')

  next()
})


app.post('/contact', (req, res, next) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    secureConnection: false,
    port: 587,
    tls: {
       ciphers:'SSLv3'
    },
    auth: { //meme adresse que dans 'from' l39
           user: 'b13fbd48111b7e',
           pass: 'bd2a415cd12f82'
       }
   });

   const mailOptions = {
    from: 'b13fbd48111b7e', // sender address
    to: 'emilie.fernandez1@hotmail.com', // list of receivers
    subject: 'Contact Wild Circus', // Subject line
    html: `
      contact name : ${req.body.contactFormName}
      contact email : ${req.body.contactFormEmail}
      subject : ${req.body.contactFormSubjects}
      message  : ${req.body.contactFormMessage}    
    `// plain text body
  };
  transporter.sendMail(mailOptions, function (err, info) {
    if(err)
      res.json(err)
    else
      res.json('Email sent')
  });
})

// GET - Récupération de l'ensemble des données de la table
app.get('/artists', (req, res) => {
  // connection à la base de données, et sélection des employés
  connection.query('SELECT * from artists', (err, results) => {
    if (err) {
      // Si une erreur est survenue, alors on informe l'utilisateur de l'erreur
      res.status(500).send('Erreur lors de la récupération des artists');
    } else {
      // Si tout s'est bien passé, on envoie le résultat de la requête SQL en tant que JSON.
      res.json(results);
    }
  });
});


//sauvegarde nouvelle entité (commande INSERT INTO)
app.post('/artists', (req, res) => {
  // récupération des données envoyées
  const formData = req.body;
  // connexion à la base de données, et insertion de l'artiste
  connection.query('INSERT INTO artists SET ?', formData, (err, results) => {
    if (err) {
      // Si une erreur est survenue, alors on informe l'utilisateur de l'erreur
      console.log(err);
      res.status(500).send("Erreur lors de la sauvegarde d'un artist");
    } else {
      // Si tout s'est bien passé, on envoie un statut "ok".
      res.json(results);
    }
  });
});


// DELETE - Suppression d'une entité
// écoute de l'url "/api/employees"
app.delete('/artists/:id', (req, res) => {
  // récupération des données envoyées
  const id = req.params.id;
  // connexion à la base de données, et suppression de l'employé
  connection.query('DELETE FROM artists WHERE id = ?', [id], (err, results) => {
    if (err) {
      // Si une erreur est survenue, alors on informe l'utilisateur de l'erreur
      console.log(err);
      res.status(500).send("Erreur lors de la suppression d'un artiste");
    } else {
      // Si tout s'est bien passé, on envoie un statut "ok".
      res.json(results);
    }
  });
});



//PUT - Modification d'une entité
app.put('/artists/:id', (req, res) => {
  // récupération des données envoyées
  const id = req.params.id;
  const formData = req.body;
  // connection à la base de données, et insertion de l'employé
  connection.query('UPDATE artists SET ? WHERE id = ?', [formData, id], (err, results) => {
    if (err) {
      // Si une erreur est survenue, alors on informe l'utilisateur de l'erreur
      console.log(err);
      res.status(500).send("Erreur lors de la modification d'un artiste");
    } else {
      // Si tout s'est bien passé, on envoie un statut "ok".
      res.json(results);
    }
  });
});

// ajoute un vote en mode bulletin
app.post('/vote', (req, res, next) => {
    // récupération des données envoyées
    const formData = req.body;
    // connexion à la base de données, et insertion de l'artiste
    connection.query('INSERT INTO vote SET ?', formData, (err, results) => {
      if (err) {
        // Si une erreur est survenue, alors on informe l'utilisateur de l'erreur
        console.log(err);
        res.status(500).send("Erreur lors de la sauvegarde d'un artist");
      } else {
        // Si tout s'est bien passé, on envoie un statut "ok".
        res.json(results);
      }
    });
})

// get tous les votes
// formater en regroupant tous les votes
app.get('/vote', (req, res, next) => {
  connection.query('SELECT * from vote', (err, results) => {
    if (err) {
      // Si une erreur est survenue, alors on informe l'utilisateur de l'erreur
      res.status(500).send('Erreur lors de la récupération des artists');
    } else {
      // Si tout s'est bien passé, on envoie le résultat de la requête SQL en tant que JSON.
//rassembler/compter les votes pour chaque valeur
      
      res.json(results);
    }
  });
})


app.listen(port, (err) => {
  if (err) {
    throw new Error('Something bad happened...');
  }

  console.log(`Server is listening on ${port}`);
});

