import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import BarChartIcon from '@mui/icons-material/BarChart';
import InfoIcon from '@mui/icons-material/Info';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import FavoriteIcon from '@mui/icons-material/Favorite';
import StorageIcon from '@mui/icons-material/Storage';
import PersonCheckIcon from '@mui/icons-material/VerifiedUser';
import DescriptionIcon from '@mui/icons-material/Description';
import TableChartIcon from '@mui/icons-material/TableChart';
import FileCopyIcon from '@mui/icons-material/FileCopy';

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
    title: 'Dashboard',
    icon: <HomeIcon />,
    children: [
      { title: 'Dashboard Light', to: '/dashboard' },
      { title: 'Dashboard Dark', to: '/dashboard-dark' },
      { title: 'Project', to: '/project' },
      { title: 'Contacts', to: '/contacts' },
      { title: 'Kanban', to: '/kanban' },
      { title: 'Task', to: '/task' },
      { title: 'Calendar', to: '/calendar' },
      { title: 'Messages', to: '/messages' },
    ],
  },
  {
    title: 'CMS',
    icon: <BarChartIcon />,
    children: [
      { title: 'Content', to: '/content' },
      { title: 'Menu', to: '/menu-1' },
      { title: 'Email Template', to: '/email-template' },
      { title: 'Blog', to: '/blog' },
    ],
  },
  {
    title: 'Apps',
    icon: <InfoIcon />,
    children: [
      { title: 'Profile', to: '/app-profile' },
      { title: 'Edit Profile', to: '/edit-profile' },
      { title: 'Post Details', to: '/post-details' },
      {
        title: 'Email',
        to: '#',
        children: [
          { title: 'Compose', to: '/email-compose' },
          { title: 'Inbox', to: '/email-inbox' },
          { title: 'Read', to: '/email-read' },
        ],
      },
      { title: 'Calendar', to: '/app-calender' },
      {
        title: 'Shop',
        to: '#',
        children: [
          { title: 'Product Grid', to: '/ecom-product-grid' },
          { title: 'Product List', to: '/ecom-product-list' },
          { title: 'Product Details', to: '/ecom-product-detail' },
          { title: 'Order', to: '/ecom-product-order' },
          { title: 'Checkout', to: '/ecom-checkout' },
          { title: 'Invoice', to: '/ecom-invoice' },
          { title: 'Customers', to: '/ecom-customers' },
        ],
      },
    ],
  },
  {
    title: 'Charts',
    icon: <ShowChartIcon />,
    children: [
      { title: 'RechartJs', to: '/chart-rechart' },
      { title: 'Chartjs', to: '/chart-chartjs' },
      { title: 'Sparkline', to: '/chart-sparkline' },
      { title: 'Apexchart', to: '/chart-apexchart' },
    ],
  },
  {
    title: 'Bootstrap',
    icon: <ViewModuleIcon />,
    children: [
      { title: 'Accordion', to: '/ui-accordion' },
      { title: 'Alert', to: '/ui-alert' },
      { title: 'Badge', to: '/ui-badge' },
      { title: 'Button', to: '/ui-button' },
      { title: 'Modal', to: '/ui-modal' },
      { title: 'Button Group', to: '/ui-button-group' },
      { title: 'List Group', to: '/ui-list-group' },
      { title: 'Cards', to: '/ui-card' },
      { title: 'Carousel', to: '/ui-carousel' },
      { title: 'Dropdown', to: '/ui-dropdown' },
      { title: 'Popover', to: '/ui-popover' },
      { title: 'Progressbar', to: '/ui-progressbar' },
      { title: 'Tab', to: '/ui-tab' },
      { title: 'Typography', to: '/ui-typography' },
      { title: 'Pagination', to: '/ui-pagination' },
      { title: 'Grid', to: '/ui-grid' },
    ],
  },
  {
    title: 'Plugins',
    icon: <FavoriteIcon />,
    children: [
      { title: 'Select 2', to: '/uc-select2' },
      { title: 'Sweet Alert', to: '/uc-sweetalert' },
      { title: 'Toastr', to: '/uc-toastr' },
      { title: 'Jqv Map', to: '/map-jqvmap' },
      { title: 'Light Gallery', to: '/uc-lightgallery' },
    ],
  },
  {
    title: 'Redux',
    icon: <StorageIcon />,
    children: [
      { title: 'Todo', to: '/todo' },
    ],
  },
  {
    title: 'Widget',
    icon: <PersonCheckIcon />,
    to: '/widget-basic',
  },
  {
    title: 'Forms',
    icon: <DescriptionIcon />,
    children: [
      { title: 'Form Elements', to: '/form-element' },
      { title: 'Wizard', to: '/form-wizard' },
      { title: 'CkEditor', to: '/form-ckeditor' },
      { title: 'Pickers', to: '/form-pickers' },
      { title: 'Form Validate', to: '/form-validation' },
    ],
  },
  {
    title: 'Table',
    icon: <TableChartIcon />,
    children: [
      { title: 'Table Filtering', to: '/table-filtering' },
      { title: 'Table Sorting', to: '/table-sorting' },
      { title: 'Bootstrap', to: '/table-bootstrap-basic' },
    ],
  },
  {
    title: 'Pages',
    icon: <FileCopyIcon />,
    children: [
      {
        title: 'Error',
        to: '#',
        children: [
          { title: 'Error 400', to: '/page-error-400' },
          { title: 'Error 403', to: '/page-error-403' },
          { title: 'Error 404', to: '/page-error-404' },
          { title: 'Error 500', to: '/page-error-500' },
          { title: 'Error 503', to: '/page-error-503' },
        ],
      },
      { title: 'Lock Screen', to: '/page-lock-screen' },
    ],
  },
];
