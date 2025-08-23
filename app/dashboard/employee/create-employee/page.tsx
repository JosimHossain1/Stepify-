'use client';
import CreateEmployee from '@/app/components/Dashboard/employee/CreateEmployee';
import axios from 'axios';
import React, {  useEffect, useState } from 'react';

// create type for user role
type UserRole = {
  id: string;
  roleName: string;
};

const CreateEmployeePage = () => {
  const [userRole, setUserRole] = useState<UserRole[]>([]);
  const [departments, setDepartments] = useState<UserRole[]>([]);
  const [branches, setBranches] = useState<UserRole[]>([]);
  // Get user role from database

  useEffect(() => {
    const userRole = async () => {
      const roles = await axios.get('/api/roles');
      setUserRole(roles.data.data)
    };
    userRole();

    // Departments
    const departments = async () => {
      const departments = await axios.get('/api/department');
      setDepartments(departments.data.data)
    };
    departments();

    // Branches
    const branches = async () => {
      const branches = await axios.get('/api/branch');
      setBranches(branches.data.data)
    }
    branches();
  }, []);
  return (
    <div>
      <CreateEmployee roles = {userRole} departments={departments} branches={branches} />
    </div>
  );
};

export default CreateEmployeePage;
