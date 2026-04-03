import React, { useEffect } from 'react';
import { useThemeContext } from '../context/ThemeContext';
import DashboardHome from '../DashboardHome';

const DashboardDark: React.FC = () => {
  const { setMode } = useThemeContext();
  useEffect(() => { setMode('dark'); }, []);
  return <DashboardHome />;
};

export default DashboardDark;
