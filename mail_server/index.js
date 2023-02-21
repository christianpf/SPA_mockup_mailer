var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var cors = require('cors');

const creds = require('./config');

var transport = {
    host: 'smtp.gmail.com',
    port: 465,
    auth: {
        user: creds.USER,
        pass: creds.PASS
    }
}

var transporter = nodemailer.createTransport(transport);
transporter.verify((error, success) => {
    if(error) {
        console.log(error);
    }else{
        console.log("Server is ready to take messages");
    }
});

router.post('/send', (req, res, next) => {
    var name = req.body.name
    var email = req.body.email
    var message = req.body.message
    var phone = req.body.phone
    var content = `Nombre: ${name} \n Teléfono: ${phone} \n Mensaje: ${message}`

    var mail = {
        from: {name: name, address: email},
        to: creds.USER,
        subject: "Un nuevo mensaje de tu página web",
        html: `<h1> Nuevo mensaje de ${name} </h1> <h4>Telefono; ${phone}</h4> <p>${message}</p>`
    }

    transporter.sendMail(mail, (err, data) => {
        err ? res.json({status: 'fail'}) : res.json({status: 'success'})
    })
})

const app = express()
app.use(cors());
app.use(express.json());
app.use('/', router);
app.listen(3002)