import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import validateRequest from '../../middlewares/validateRequest';
import auth from '../../middlewares/auth';
import { StudentController } from './student.controller';
import { StudentValidation } from './student.validations';

const router = express.Router();

router.get('/', StudentController.getAllFromDB);
router.get('/profile/:id', StudentController.getStudentProfile);
router.get('/my-courses', auth(ENUM_USER_ROLE.STUDENT), StudentController.getMyCourses);
router.get(
  '/my-academic-infos',
  auth(ENUM_USER_ROLE.STUDENT),
  StudentController.getMyAcademicInfos
);
router.get(
  '/my-course-schedules',
  auth(ENUM_USER_ROLE.STUDENT),
  StudentController.getMyCourseSchedules
);
router.get('/:id', StudentController.getByIdFromDB);
router.get('/:id', StudentController.getByIdFromDB);

router.patch(
  '/:id',
  validateRequest(StudentValidation.updateStudent),
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  StudentController.updateOneInDB
);

router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  StudentController.deleteByIdFromDB
);

export const studentRoutes = router;
