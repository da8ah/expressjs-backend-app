import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import videosRoutes from './routes/videos.routes';
import config from './config';

const app = express();

app.set('port', config.PORT);

app.use(morgan('dev')); // Mostrar en consola las peticiones al servidor
app.use(cors()); // Permitir a cualquiera hacer peticiones
app.use(express.json()); // Data en formato JSON
app.use(express.urlencoded({ extended: false })); // Data desde formularios

app.use(videosRoutes);

export default app;