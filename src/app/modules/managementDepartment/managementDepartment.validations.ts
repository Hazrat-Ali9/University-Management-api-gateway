import { z } from 'zod';

const create = z.object({
  body: z.object({
    title: z.string({
      required_error: 'Title is required'
    })
  })
});

const update = z.object({
  body: z.object({
    title: z.string({
      required_error: 'Title is required'
    })
  })
});

export const ManagementDepartmentValidation = {
  create,
  update
};
