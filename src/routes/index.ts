import { Router } from 'express';
import audioRoutes from './audio.routes';

const routes = Router();

const syntax = '/api/v1';

routes.use(`${syntax}/audios`, audioRoutes);

export default routes;