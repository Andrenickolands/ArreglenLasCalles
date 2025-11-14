// (Este es tu archivo de Node.js, no de Angular)
import { Router } from 'express';
import { db } from '../db';
import jwt from 'jsonwebtoken'; 

const router = Router();
const JWT_SECRET = 'este-es-mi-secreto-temporal'; 

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: 'Email y contraseña son requeridos' });
    }

    const [results]: any = await db.execute(
      'SELECT id, nombre, email, pais, nacimiento FROM usuarios WHERE email = ? AND password = ?',
      [email, password]
    );

    if (results.length === 0) {
      return res.status(401).json({ message: '❌ Credenciales incorrectas' });
    }

    const user = results[0];

    const payload = {
      userId: user.id,
      email: user.email,
      nombre: user.nombre
    };

    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' });

    res.status(200).json({
      message: '✅ Inicio de sesión exitoso',
      token: token, 
      user: {
        id: user.id,
        nombre: user.nombre,
        email: user.email,
        pais: user.pais,
        nacimiento: user.nacimiento
      }
    });

  } catch (error: any) {
    console.error('Error en login:', error);
    res.status(500).json({ message: 'Error en el servidor', error: error.message });
  }
});

export default router;