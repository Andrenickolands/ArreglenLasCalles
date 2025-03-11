const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/auth.routes');
const db = require('./db'); // Conexión a MySQL

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas
app.use('/api/auth', authRoutes);

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
