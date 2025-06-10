import express from 'express';
import { StudentSemesterPaymentController } from './studentSemesterPayment.controller';
// Students semester payment
const router = express.Router();

router.get('/my-semester-payments', StudentSemesterPaymentController.getMyPayment);

export const studentSemesterPaymentRoutes = router;
