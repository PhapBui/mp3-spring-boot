import * as React from 'react';
import { Outlet } from 'react-router-dom';

interface AdminProps {
  children?: React.ReactNode;
}

const Admin: React.FunctionComponent<AdminProps> = ({ children }) => {
  return (
    <>
      <h2>Admin</h2>
      <Outlet />
      <h4>cac</h4>
      <Outlet />
    </>
  );
};

export default Admin;
