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

const create = z.object({
  body: z.object({
    offeredCourseId: z.string({
      required_error: 'Offered course id is required'
    }),
    maxCapacity: z.number({
      required_error: 'Max capacity is required'
    }),
    title: z.string({
      required_error: 'Title is required'
    }),
    classSchedules: z.array(
      z
        .object({
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
          })
        })
        .refine(
          ({ startTime, endTime }) => {
            const start = new Date(`1970-01-01T${startTime}:00`);
            const end = new Date(`1970-01-01T${endTime}:00`);

            return start < end;
          },
          {
            message: 'Start time must be before end time'
          }
        ),
      {
        required_error: 'Class schedules are required'
      }
    )
  })
});

const update = z.object({
  body: z.object({
    maxCapacity: z.number().optional(),
    title: z.string().optional()
  })
});

export const OfferedCourseSectionValidation = {
  create,
  update
};
