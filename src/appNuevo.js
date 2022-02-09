const express = require('express');
const path = require('path');
const nodemailer = require('nodemailer');

const app = express();

app.use(express.static(path.join(__dirname,'../public')));
app.use(express.urlencoded({ extended: true }));

app.set('views', __dirname+'/views');
app.set('view engine', 'ejs');


app.get('/', (req,res) => {
    res.render('indexEsp');
});
app.get('/es', (req,res) => {
    res.redirect('/')
});
app.get('/en', (req,res) => {
    res.render('indexEng');
});

// Formulario
app.get('/enviado', (req,res) => {
    res.render('enviado');
});
app.post('/enviado', async(req,res) => {
    const { nombre, mail, mensaje } = req.body;
    contentHTML = `
    <h1>Cliente Web Necesita Info</h1>
    <ul>
        <li>Usuario: ${nombre}</li>
        <li>Correo: ${mail}</li>
    </ul>
    <p>Mensaje: <br>${mensaje}</p>
    `;

    const transporter = nodemailer.createTransport({
        host: process.env.HOST,
        port: 465,
        secure: true,
        auth: {
            user: process.env.USER,
            pass: process.env.PASS
        }
    });
    const info = await transporter.sendMail({
        from: 'Crevna Server <form1@crevna.com>',
        to: process.env.REMITENTE,
        subject: 'Cliente Web Necesita Info',
        html: contentHTML

    });
    res.redirect('/enviado');
});
app.get('/sent', (req,res) => {
    res.render('sent');
})
app.post('/sent', async(req,res) => {
    const { nombre, mail, mensaje } = req.body;
    contentHTML = `
    <h1>Web Client Needs Info</h1>
    <ul>
        <li>User: ${nombre}</li>
        <li>Mail: ${mail}</li>
    </ul>
    <p>Message: <br>${mensaje}</p>
    `;

    const transporter = nodemailer.createTransport({
        host: process.env.HOST,
        port: 465,
        secure: true,
        auth: {
            user: process.env.USER,
            pass: process.env.PASS
        }
    });
    const info = await transporter.sendMail({
        from: 'Crevna Server <form1@crevna.com>',
        to: process.env.REMITENTE,
        subject: 'Web Client Needs Info',
        html: contentHTML

    })

    res.redirect('/sent');
})


const port = 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});