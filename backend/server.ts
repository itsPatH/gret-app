import express from 'express';
import authRoutes from './routes/authRoutes';
import userRoutes from './routes/userRoutes';

const app = express();

app.use(express.json()); // Para poder manejar datos JSON

// Rutas
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);

// Configuración de puerto
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
