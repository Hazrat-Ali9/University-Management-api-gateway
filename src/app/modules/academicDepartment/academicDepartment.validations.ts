import { z } from 'zod';

const create = z.object({
  body: z.object({
    title: z.string({
      required_error: 'Title is required'
    }),
    academicFacultyId: z.string({
      required_error: 'Academic faculty id is required'
    })
  })
});

const update = z.object({
  body: z.object({
    title: z.string().optional(),
    academicFacultyId: z.string().optional()
  })
});

export const AcademicDepartmentValidation = {
  create,
  update
};
