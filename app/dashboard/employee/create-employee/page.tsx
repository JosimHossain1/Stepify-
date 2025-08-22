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
  // Get user role from database

  useEffect(() => {
    const userRole = async () => {
      const roles = await axios.get('/api/roles');
      setUserRole(roles.data.data)
    };
    userRole();
  }, []);
  return (
    <div>
      <CreateEmployee roles = {userRole} />
    </div>
  );
};

export default CreateEmployeePage;
