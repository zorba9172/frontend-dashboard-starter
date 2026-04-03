import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import BarChartIcon from '@mui/icons-material/BarChart';

export interface MenuChild {
  title: string;
  to: string;
  children?: MenuChild[];
}

export interface MenuItem {
  title: string;
  icon: React.ReactNode;
  to?: string;
  children?: MenuChild[];
  badge?: string;
}

export const menuConfig: MenuItem[] = [
  {
    title: 'דף הבית',
    icon: <HomeIcon />,
    to: '/dashboard',
  },
  {
    title: 'Dashboard',
    icon: <BarChartIcon />,
    children: [
      { title: 'Dashboard Dark', to: '/dashboard-dark' },
      { title: 'Project', to: '/project' },
      { title: 'Contacts', to: '/contacts' },
      { title: 'Kanban', to: '/kanban' },
      { title: 'Task', to: '/task' },
      { title: 'Calendar', to: '/calendar' },
      { title: 'Messages', to: '/messages' },
      { title: 'Content', to: '/content' },
      { title: 'Menu', to: '/menu-1' },
      { title: 'Email Template', to: '/email-template' },
      { title: 'Blog', to: '/blog' },
      { title: 'Profile', to: '/app-profile' },
      { title: 'Edit Profile', to: '/edit-profile' },
      { title: 'Post Details', to: '/post-details' },
      { title: 'Email Compose', to: '/email-compose' },
      { title: 'Email Inbox', to: '/email-inbox' },
      { title: 'Email Read', to: '/email-read' },
      { title: 'Product Grid', to: '/ecom-product-grid' },
      { title: 'Product List', to: '/ecom-product-list' },
      { title: 'Checkout', to: '/ecom-checkout' },
      { title: 'Invoice', to: '/ecom-invoice' },
      { title: 'Widget', to: '/widget-basic' },
    ],
  },
];
