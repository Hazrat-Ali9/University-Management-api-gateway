import { z } from 'zod';
import { ExamType } from '../../../enums/student-enrolled-course-marks';

const updateStudentMarks = z.object({
  body: z.object({
    academicSemesterId: z.string({
      required_error: 'Academic semester id is required'
    }),
    studentId: z.string({
      required_error: 'Student id is required'
    }),
    courseId: z.string({
      required_error: 'Course id is required'
    }),
    examType: z.enum([...Object.values(ExamType)] as [string, ...string[]], {}),
    marks: z
      .number({
        required_error: 'Marks is required'
      })
      .max(100)
      .min(0)
  })
});

const updateStudentCourseFinalMarks = z.object({
  body: z.object({
    academicSemesterId: z.string({
      required_error: 'Academic semester id is required'
    }),
    studentId: z.string({
      required_error: 'Student id is required'
    }),
    courseId: z.string({
      required_error: 'Course id is required'
    })
  })
});

export const StudentEnrolledCourseMarkValidation = {
  updateStudentMarks,
  updateStudentCourseFinalMarks
};
