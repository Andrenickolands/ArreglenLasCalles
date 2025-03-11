const mysql = require('mysql');

// Configurar conexión a MySQL
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '', // Cambia esto si tienes una contraseña en MySQL
    database: 'login',
    port: 3307 // Asegúrate de que sea el puerto correcto
});

// Conectar a MySQL
db.connect((err) => {
    if (err) {
        console.error('Error al conectar con MySQL:', err.message);
        return;
    }
    console.log('Conectado a MySQL');
});

module.exports = db;

