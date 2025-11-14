import express, { Request, Response } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mysql from 'mysql2';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use("/uploads", express.static("uploads"));
import reportesRoutes from "./src/routes/reportes";
app.use("/api", reportesRoutes);


const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'home'
});

db.connect(err => {
  if (err) {
    console.error('❌ Error al conectar a la base de datos:', err);
    return;
  }
  console.log('✅ Conectado a MySQL (XAMPP)');
});

app.get('/', (req: Request, res: Response) => {
  res.send('Servidor backend funcionando correctamente 🚀');
});

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


// 🔹 NUEVO: Login
app.post('/api/login', (req: Request, res: Response) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Faltan campos requeridos' });
  }

  const sql = 'SELECT * FROM usuarios WHERE email = ? AND password = ?';
db.query(sql, [email, password], (err, results: any[]) => {
  if (err) {
    console.error('❌ Error al buscar usuario:', err);
    return res.status(500).json({ message: 'Error en el servidor' });
  }

  if (results.length > 0) {
    const user = results[0];
    return res.status(200).json({
      message: '✅ Inicio de sesión exitoso',
      user: {
        id: user.id,
        nombre: user.nombre,
        email: user.email,
        pais: user.pais,
      },
    });
  } else {
    return res.status(401).json({ message: 'Credenciales incorrectas' });
  }
});

});


app.listen(PORT, () => {
  console.log(`🚀 Servidor backend corriendo en http://localhost:${PORT}`);
});
