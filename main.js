const express = require('express');
const mysql =require('mysql2');
const app = express();


app.use(express.json());

const db =mysql.createConnection({
    host: 'mysql-1880053c-dayanaalexandraji-c12f.b.aivencloud.com',
    user: 'avnadmin',
    password: 'AVNS_aJcBmO2kWp79tnwA5k3',
    database: 'defaultdb',
    port:'22655'
});

app.get('/login-seguro', (req, res) => {
    const { usuario, password } = req.query;

    const query = `
        SELECT * FROM usuarios
        WHERE usuarios = ?
        AND password = ?
    `;

    db.query(query, [usuario, password], (err, result) => {
        if (err) {
            return res.json({ error: err });
        }

        if (result.length > 0) {
            res.json({ mensaje: "Usuario autenticado (seguro)" });
        } else {
            res.json({ mensaje: "Credenciales inválidas" });
        }
    });
});

app.listen(3000, () => {
    console.log ('server running on port 3000');
})