import { Header } from '@/common/components/header';
import { Main } from '@/common/components/main';
import { Sidebar } from '@/common/components/sidebar';
import * as React from 'react';
import { Outlet } from 'react-router-dom';

interface EmptyLayoutProps {}

export const EmptyLayout: React.FunctionComponent<EmptyLayoutProps> = () => {
  return <Outlet />;
};
