import express from 'express';
import { cardController } from '../controllers/cardController';

const router = express.Router();

router.get('/', cardController.getAllCards);
router.post('/', cardController.createCard);

export default router;