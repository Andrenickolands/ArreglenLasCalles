import express, { Request, Response } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mysql from 'mysql2';

// 🔹 Configuración del servidor
const app = express();
const PORT = 3000;

// 🔹 Middlewares
app.use(cors());
app.use(bodyParser.json());

// 🔹 Conexión a la base de datos MySQL (XAMPP)
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',          // usuario por defecto de XAMPP
  password: '',          // déjalo vacío si no tienes contraseña
  database: 'home' // cambia esto por el nombre exacto de tu DB
});

// 🔹 Verificar conexión
db.connect(err => {
  if (err) {
    console.error('❌ Error al conectar a la base de datos:', err);
    return;
  }
  console.log('✅ Conectado a MySQL (XAMPP)');
});

// 🔹 Endpoint de prueba
app.get('/', (req: Request, res: Response) => {
  res.send('Servidor backend funcionando correctamente 🚀');
});

// 🔹 Endpoint para registrar usuario
app.post('/api/register', (req: Request, res: Response) => {
  const { nombre, email, pais, nacimiento, password } = req.body;

  if (!nombre || !email || !pais || !nacimiento || !password) {
    return res.status(400).json({ message: 'Faltan campos requeridos' });
  }

  const sql = 'INSERT INTO usuarios (nombre, email, pais, nacimiento, password) VALUES (?, ?, ?, ?, ?)';
  db.query(sql, [nombre, email, pais, nacimiento, password], (err, result) => {
    if (err) {
      console.error('❌ Error al registrar usuario:', err);
      return res.status(500).json({ message: 'Error en el servidor' });
    }

    res.status(200).json({ message: '✅ Usuario registrado correctamente' });
  });
});

// 🔹 Iniciar el servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor backend corriendo en http://localhost:${PORT}`);
});
