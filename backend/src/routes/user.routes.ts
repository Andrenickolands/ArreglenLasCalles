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

    // Inserta el usuario
    const [result] = await db.execute(
      'INSERT INTO users (nombre, email, pais, nacimiento, password) VALUES (?, ?, ?, ?, ?)',
      [nombre, email, pais, nacimiento, password]
    );

    res.status(201).json({ message: 'Usuario registrado con éxito', result });
  } catch (error: any) {
    console.error(error);
    res.status(500).json({ message: 'Error al registrar el usuario', error: error.message });
  }
});

export default router;
