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

    jobTitle: {
      type: String,
      required: true,
    },
    department: {
      type: String,
    },
    employmentType: {
      type: String,
      enum: ['Full-time', 'Part-time', 'Contract', 'Internship'],
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

    workLocation: {
      type: String,
      required: true,
    },

    previousCompany: {
      type: String,
    },

    education: {
      type: String,
    },

    //Salary and Payroll Information

    basicSalary: {
      type: Number,
      required: true,
    },
    allowances: {
      type: String,
    },

    // Branch
    branch: {
      type: String,
    },

    // // // System and Access control
    role: {
      type: String,
    },

    // // Login Credentials

    userId: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

const EmployeeModel =
  mongoose.models.employee || mongoose.model('employee', EmployeeSchema);

export default EmployeeModel;
