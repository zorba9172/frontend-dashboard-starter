/* eslint-disable react-refresh/only-export-components */
import React, { lazy, Suspense } from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import { Box, CircularProgress } from '@mui/material';
import { palette } from '../theme';
import { DashboardLayout } from '../layouts';

// ── Dashboard pages ──
const DashboardHome = lazy(() => import('../pages/DashboardHome'));
const DashboardDark = lazy(() => import('../pages/_old/DashboardDark'));
const ProjectPage = lazy(() => import('../pages/_old/ProjectPage'));
const ContactsPage = lazy(() => import('../pages/_old/ContactsPage'));
const KanbanPage = lazy(() => import('../pages/_old/KanbanPage'));
const TaskPage = lazy(() => import('../pages/_old/TaskPage'));
const CalendarPage = lazy(() => import('../pages/_old/CalendarPage'));
const MessagesPage = lazy(() => import('../pages/_old/MessagesPage'));

// ── Apps pages ──
const AppProfilePage = lazy(() => import('../pages/_old/AppProfilePage'));
const EditProfilePage = lazy(() => import('../pages/_old/EditProfilePage'));
const PostDetailsPage = lazy(() => import('../pages/_old/PostDetailsPage'));
const EmailComposePage = lazy(() => import('../pages/_old/EmailComposePage'));
const EmailInboxPage = lazy(() => import('../pages/_old/EmailInboxPage'));
const EmailReadPage = lazy(() => import('../pages/_old/EmailReadPage'));

// ── Shop pages ──
const ProductGridPage = lazy(() => import('../pages/_old/ProductGridPage'));
const ProductListPage = lazy(() => import('../pages/_old/ProductListPage'));
const CheckoutPage = lazy(() => import('../pages/_old/CheckoutPage'));
const InvoicePage = lazy(() => import('../pages/_old/InvoicePage'));

// ── CMS pages ──
const ContentPage = lazy(() => import('../pages/_old/ContentPage'));
const MenuPage = lazy(() => import('../pages/_old/MenuPage'));
const BlogPage = lazy(() => import('../pages/_old/BlogPage'));
const EmailTemplatePage = lazy(() => import('../pages/_old/EmailTemplatePage'));

// ── Widget ──
const WidgetPage = lazy(() => import('../pages/_old/WidgetPage'));

// ── Auth pages (standalone) ──
const LoginPage = lazy(() => import('../pages/_old/LoginPage'));
const RegistrationPage = lazy(() => import('../pages/_old/RegistrationPage'));
const ForgotPasswordPage = lazy(() => import('../pages/_old/ForgotPasswordPage'));
const LockScreenPage = lazy(() => import('../pages/_old/LockScreenPage'));

// ── Error pages (standalone) ──
const Error400Page = lazy(() => import('../pages/_old/Error400Page'));
const Error403Page = lazy(() => import('../pages/_old/Error403Page'));
const Error404Page = lazy(() => import('../pages/_old/Error404Page'));
const Error500Page = lazy(() => import('../pages/_old/Error500Page'));
const Error503Page = lazy(() => import('../pages/_old/Error503Page'));

// Loading fallback
const PageLoader: React.FC = () => (
  <Box
    sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '60vh',
    }}
  >
    <CircularProgress sx={{ color: palette.primary.main }} />
  </Box>
);

const withSuspense = (Component: React.LazyExoticComponent<React.FC>) => (
  <Suspense fallback={<PageLoader />}>
    <Component />
  </Suspense>
);

export const router = createBrowserRouter([
  // ── Auth routes (standalone, no layout) ──
  { path: '/login', element: withSuspense(LoginPage) },
  { path: '/page-register', element: withSuspense(RegistrationPage) },
  { path: '/page-forgot-password', element: withSuspense(ForgotPasswordPage) },
  { path: '/page-lock-screen', element: withSuspense(LockScreenPage) },

  // ── Error routes (standalone, no layout) ──
  { path: '/page-error-400', element: withSuspense(Error400Page) },
  { path: '/page-error-403', element: withSuspense(Error403Page) },
  { path: '/page-error-404', element: withSuspense(Error404Page) },
  { path: '/page-error-500', element: withSuspense(Error500Page) },
  { path: '/page-error-503', element: withSuspense(Error503Page) },

  // ── Dashboard layout routes ──
  {
    path: '/',
    element: <DashboardLayout />,
    children: [
      { index: true, element: <Navigate to="/dashboard" replace /> },

      // Dashboard
      { path: 'dashboard', element: withSuspense(DashboardHome) },
      { path: 'dashboard-dark', element: withSuspense(DashboardDark) },
      { path: 'project', element: withSuspense(ProjectPage) },
      { path: 'contacts', element: withSuspense(ContactsPage) },
      { path: 'kanban', element: withSuspense(KanbanPage) },
      { path: 'task', element: withSuspense(TaskPage) },
      { path: 'calendar', element: withSuspense(CalendarPage) },
      { path: 'messages', element: withSuspense(MessagesPage) },

      // CMS
      { path: 'content', element: withSuspense(ContentPage) },
      { path: 'menu-1', element: withSuspense(MenuPage) },
      { path: 'email-template', element: withSuspense(EmailTemplatePage) },
      { path: 'blog', element: withSuspense(BlogPage) },

      // Apps — Profile
      { path: 'app-profile', element: withSuspense(AppProfilePage) },
      { path: 'edit-profile', element: withSuspense(EditProfilePage) },
      { path: 'post-details', element: withSuspense(PostDetailsPage) },

      // Apps — Email
      { path: 'email-compose', element: withSuspense(EmailComposePage) },
      { path: 'email-inbox', element: withSuspense(EmailInboxPage) },
      { path: 'email-read', element: withSuspense(EmailReadPage) },

      // Apps — Calendar
      { path: 'app-calender', element: withSuspense(CalendarPage) },

      // Apps — Shop
      { path: 'ecom-product-grid', element: withSuspense(ProductGridPage) },
      { path: 'ecom-product-list', element: withSuspense(ProductListPage) },
      { path: 'ecom-product-detail', element: withSuspense(ProductGridPage) },
      { path: 'ecom-product-order', element: withSuspense(InvoicePage) },
      { path: 'ecom-checkout', element: withSuspense(CheckoutPage) },
      { path: 'ecom-invoice', element: withSuspense(InvoicePage) },
      { path: 'ecom-customers', element: withSuspense(ContactsPage) },

      // Widget
      { path: 'widget-basic', element: withSuspense(WidgetPage) },

      // Catch-all → 404
      { path: '*', element: <Navigate to="/page-error-404" replace /> },
    ],
  },
]);
