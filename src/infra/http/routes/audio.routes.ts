import { Router } from 'express';

const audioRoutes = Router();

audioRoutes.get('/', );

audioRoutes.post('/', (req, res) => {
  res.json({ ok: true});
});

export default audioRoutes;