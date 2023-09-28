import { z } from 'zod';
import { daysInWeek } from '../../../constants/global';

const timeStringSchema = z.string().refine(
  (time) => {
    const regex = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/;
    return regex.test(time);
  },
  {
    message: "Invalid time format, expected 'HH:MM' in 24-hour format"
  }
);

const create = z
  .object({
    body: z.object({
      dayOfWeek: z.enum([...daysInWeek] as [string, ...string[]], {
        required_error: 'Day of week is required'
      }),
      startTime: timeStringSchema,
      endTime: timeStringSchema,
      roomId: z.string({
        required_error: 'Room id is required'
      }),
      facultyId: z.string({
        required_error: 'Faculty id is required'
      }),
      offeredCourseSectionId: z.string({
        required_error: 'Section id is required'
      })
    })
  })
  .refine(
    ({ body }) => {
      const start = new Date(`1970-01-01T${body.startTime}:00`);
      const end = new Date(`1970-01-01T${body.endTime}:00`);

      return start < end;
    },
    {
      message: 'Start time must be before end time'
    }
  );

const update = z.object({
  body: z.object({
    roomId: z.string().optional(),
    facultyId: z.string().optional(),
    offeredCourseSectionId: z.string().optional()
  })
});

export const OfferedCourseClassScheduleValidation = {
  create,
  update
};
