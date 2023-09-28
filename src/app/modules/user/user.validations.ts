import { z } from 'zod';

const createStudent = z.object({
  password: z.string().optional(),

  student: z.object({
    name: z.object({
      firstName: z.string({
        required_error: 'First name is required'
      }),
      lastName: z.string({
        required_error: 'Last name is required'
      }),
      middleName: z.string().optional()
    }),

    dateOfBirth: z.string({
      required_error: 'Date of birth is required'
    }),

    gender: z.string({
      required_error: 'Gender is required'
    }),

    bloodGroup: z.string({
      required_error: 'Blood group is required'
    }),

    email: z
      .string({
        required_error: 'Email is required'
      })
      .email(),

    contactNo: z.string({
      required_error: 'Contact number is required'
    }),

    emergencyContactNo: z.string({
      required_error: 'Emergency contact number is required'
    }),

    presentAddress: z.string({
      required_error: 'Present address is required'
    }),

    permanentAddress: z.string({
      required_error: 'Permanent address is required'
    }),

    academicDepartment: z.string({
      required_error: 'Academic department is required'
    }),

    academicFaculty: z.string({
      required_error: 'Academic faculty is required'
    }),

    academicSemester: z.string({
      required_error: 'Academic semester is required'
    }),

    guardian: z.object({
      fatherName: z.string({
        required_error: 'Father name is required'
      }),
      fatherOccupation: z.string({
        required_error: 'Father occupation is required'
      }),
      fatherContactNo: z.string({
        required_error: 'Father contact number is required'
      }),
      motherName: z.string({
        required_error: 'Mother name is required'
      }),
      motherOccupation: z.string({
        required_error: 'Mother occupation is required'
      }),
      motherContactNo: z.string({
        required_error: 'Mother contact number is required'
      }),
      address: z.string({
        required_error: 'Guardian address is required'
      })
    }),

    localGuardian: z.object({
      name: z.string({
        required_error: 'Local guardian name is required'
      }),
      occupation: z.string({
        required_error: 'Local guardian occupation is required'
      }),
      contactNo: z.string({
        required_error: 'Local guardian contact number is required'
      }),
      address: z.string({
        required_error: 'Local guardian address is required'
      })
    })
  })
});

const createAdmin = z.object({
  password: z.string().optional(),

  admin: z.object({
    name: z.object({
      firstName: z.string({
        required_error: 'First name is required'
      }),
      lastName: z.string({
        required_error: 'Last name is required'
      }),
      middleName: z.string().optional()
    }),

    dateOfBirth: z.string({
      required_error: 'Date of birth is required'
    }),

    gender: z.string({
      required_error: 'Gender is required'
    }),

    bloodGroup: z.string({
      required_error: 'Blood group is required'
    }),

    email: z
      .string({
        required_error: 'Email is required'
      })
      .email(),

    contactNo: z.string({
      required_error: 'Contact number is required'
    }),

    emergencyContactNo: z.string({
      required_error: 'Emergency contact number is required'
    }),

    presentAddress: z.string({
      required_error: 'Present address is required'
    }),

    permanentAddress: z.string({
      required_error: 'Permanent address is required'
    }),

    managementDepartment: z.string({
      required_error: 'Management department is required'
    }),

    designation: z.string({
      required_error: 'Designation is required'
    })
  })
});

const createFaculty = z.object({
  password: z.string().optional(),

  faculty: z.object({
    name: z.object({
      firstName: z.string({
        required_error: 'First name is required'
      }),
      lastName: z.string({
        required_error: 'Last name is required'
      }),
      middleName: z.string().optional()
    }),

    dateOfBirth: z.string({
      required_error: 'Date of birth is required'
    }),

    gender: z.string({
      required_error: 'Gender is required'
    }),

    bloodGroup: z.string({
      required_error: 'Blood group is required'
    }),

    email: z
      .string({
        required_error: 'Email is required'
      })
      .email(),

    contactNo: z.string({
      required_error: 'Contact number is required'
    }),

    emergencyContactNo: z.string({
      required_error: 'Emergency contact number is required'
    }),

    presentAddress: z.string({
      required_error: 'Present address is required'
    }),

    permanentAddress: z.string({
      required_error: 'Permanent address is required'
    }),

    academicDepartment: z.string({
      required_error: 'Academic department is required'
    }),

    academicFaculty: z.string({
      required_error: 'Academic faculty is required'
    }),

    designation: z.string({
      required_error: 'Designation is required'
    })
  })
});

const updateUser = z.object({
  body: z.object({
    password: z.string().optional(),
    firstName: z.string().optional(),
    lastName: z.string().optional(),
    dateOfBirth: z.string().optional(),
    gender: z.string().optional(),
    email: z.string().email().optional(),
    contactNo: z.string().optional(),
    emergencyContactNo: z.string().optional(),
    presentAddress: z.string().optional(),
    permanentAddress: z.string().optional()
  })
});

export const UserValidation = {
  createStudent,
  createAdmin,
  createFaculty,
  updateUser
};
