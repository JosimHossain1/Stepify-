import mongoose, { Schema } from 'mongoose';

const EmployeeSchema = new Schema(
  {
    // General Information
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    dateOfBirth: {
      type: String,
      required: true,
    },
    nationalId: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      enum: ['male', 'female', 'other'],
      required: true,
    },

    // Additional Information
    maritalStatus: {
      type: String,
      enum: ['single', 'married', 'divorced'],
      required: true,
    },
    bloodGroup: {
      type: String,
      enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+'],
    },
    emergencyContact: {
      type: String,
      required: true,
    },
    nationality: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },

    // // Job Information
    // employeeId: {
    //   type: String,
    //   required: true,
    // },
    jobTitle: {
      type: String,
      required: true,
    },
    depratment: {
      type: String,
      required: true,
    },
    employmentType: {
      type: String,
      enum: ['Full-time', 'Part-time', 'Contract', 'Internship'],
      required: true,
    },

    workLocation: {
      type: String,
      required: true,
    },
    dateOfJoining: {
      type: Date,
      required: true,
    },

    reportingManager: {
      type: String,
      required: true,
    },

    // // // Employement Records
    // // status: {
    // //   type: String,
    // //   enum: ['Active', 'Inactive', 'On Leave'],
    // //   default: 'Active',
    // // },

    // // profilePicture: {
    // //   type: String,
    // //   default: null,
    // // },
    // // resume: {
    // //   type: String,
    // //   default: null,
    // // },
    // previousCompany: {
    //   type: String,
    // },
    // education: {
    //   type: String,
    // },

    // // Salary and Payroll Information

    // salary: {
    //   type: Number,
    //   required: true,
    // },
    // allowances: {
    //   type: String,
    // },

    // // // Branch
    // // branch: {
    // //   type: String,
    // // },

    // // // System and Access control
    // // roles: {
    // //   type: String,
    // //   enum: ['admin', 'manager', 'salesman'],
    // // },

    // // Login Credentials

    // userId: {
    //   type: String,
    //   required: true,
    //   unique: true,
    // },
    // password: {
    //   type: String,
    //   required: true,
    // },
  },
  { timestamps: true },
);

const EmployeeModel =
  mongoose.models.employee || mongoose.model('employee', EmployeeSchema);

export default EmployeeModel;
