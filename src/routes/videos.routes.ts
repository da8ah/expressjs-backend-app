import { Router } from 'express';
const router = Router();

import * as videosController from './videos.controller';

const apiPath = '/api/videos'

router.get(apiPath, videosController.getAll);

router.get(apiPath + '/:id', videosController.getVideo);

router.post(apiPath, videosController.createVideo);

router.delete(apiPath + '/:id', videosController.deleteVideo);

router.put(apiPath + '/:id', videosController.updateVideo);

export default router;
