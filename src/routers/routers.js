import { Router }  from 'express';
import { Auth } from '../middleware/AuthMiddleware.js';
import AuthController from '../controllers/AuthController.js';
import UserController from '../controllers/UserController.js';
import AdController from '../controllers/AdController.js';

const router = Router();

router.get('/ping', (request, response) => {
    return response.json({pong: true})
});

router.post("/login", AuthController.signin);
router.post("/register", AuthController.signup);

router.get('/states', UserController.getStates);
router.get('/user/me', Auth.private, UserController.show);
router.put('/user/me', Auth.private, UserController.update);

router.get('/categories', AdController.getCategories);
router.get('/ads/', AdController.index);
router.get('/ad/show', Auth.private, AdController.show);
router.post('/ad/store', Auth.private, AdController.store);
router.post('/ad/:id', Auth.private, AdController.update);

export default router;