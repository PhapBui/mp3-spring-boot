import * as React from 'react';
import { Outlet } from 'react-router-dom';

interface EmptyLayoutProps {}

export const EmptyLayout: React.FunctionComponent<EmptyLayoutProps> = () => {
  return <Outlet />;
};
