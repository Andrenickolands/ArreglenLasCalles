import { Router } from 'express';
import { db } from '../db';

const router = Router();

// Registro de usuario
router.post('/register', async (req, res) => {
  try {
    const { nombre, email, pais, nacimiento, password } = req.body;

    if (!nombre || !email || !pais || !nacimiento || !password) {
      return res.status(400).json({ message: 'Todos los campos son requeridos' });
    }

    // Verificar si el email ya existe
    const [existing]: any = await db.execute(
      'SELECT email FROM usuarios WHERE email = ?',
      [email]
    );

    if (existing.length > 0) {
      return res.status(409).json({ message: 'El email ya está registrado' });
    }

    // Insertar al usuario
    const [result] = await db.execute(
      'INSERT INTO usuarios (nombre, email, pais, nacimiento, password) VALUES (?, ?, ?, ?, ?)',
      [nombre, email, pais, nacimiento, password]
    );

    res.status(201).json({ message: '✅ Usuario registrado con éxito', result });
  } catch (error: any) {
    console.error(error);
    res.status(500).json({ message: 'Error al registrar el usuario', error: error.message });
  }
});

// 🔹 LOGIN de usuario
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: 'Email y contraseña son requeridos' });
    }

    // Buscar usuario por email y password
    const [results]: any = await db.execute(
      'SELECT id, nombre, email, pais, nacimiento FROM usuarios WHERE email = ? AND password = ?',
      [email, password]
    );

    if (results.length === 0) {
      return res.status(401).json({ message: '❌ Credenciales incorrectas' });
    }

    const user = results[0];

    res.status(200).json({
      message: '✅ Inicio de sesión exitoso',
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