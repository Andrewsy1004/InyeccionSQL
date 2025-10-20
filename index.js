import { fileURLToPath } from 'url';
import express from 'express';
import cors from 'cors';
import path from 'path';
import 'dotenv/config';

import UsuarioRoutes from './routes/usuario.routes.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.APP_PORT || 3010; 

const corsOptions = {
  origin: '*',
  credentials: true,
};

// Middlewares
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Servir archivos estáticos desde ../public
app.use(express.static(path.join(__dirname, 'public')));

// Rutas API
app.use('/api/usuarios', UsuarioRoutes);

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on http://0.0.0.0:${PORT}`);
});
