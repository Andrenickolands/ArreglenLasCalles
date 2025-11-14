import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import userRoutes from './routes/user.routes';

const app = express();

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('🚀 Servidor backend funcionando correctamente');
});

// Rutas de usuarios (register y login)
app.use('/api', userRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`✅ Servidor corriendo en http://localhost:${PORT}`);
});