import React, { lazy, Suspense } from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import { Box, CircularProgress } from '@mui/material';
import { palette } from '../theme';
import { DashboardLayout } from '../layouts';

// ── Dashboard pages ──
const DashboardHome = lazy(() => import('../pages/DashboardHome'));
const DashboardDark = lazy(() => import('../pages/DashboardDark'));
const ProjectPage = lazy(() => import('../pages/ProjectPage'));
const ContactsPage = lazy(() => import('../pages/ContactsPage'));
const KanbanPage = lazy(() => import('../pages/KanbanPage'));
const TaskPage = lazy(() => import('../pages/TaskPage'));
const CalendarPage = lazy(() => import('../pages/CalendarPage'));
const MessagesPage = lazy(() => import('../pages/MessagesPage'));

// ── Apps pages ──
const AppProfilePage = lazy(() => import('../pages/AppProfilePage'));
const EditProfilePage = lazy(() => import('../pages/EditProfilePage'));
const PostDetailsPage = lazy(() => import('../pages/PostDetailsPage'));
const EmailComposePage = lazy(() => import('../pages/EmailComposePage'));
const EmailInboxPage = lazy(() => import('../pages/EmailInboxPage'));
const EmailReadPage = lazy(() => import('../pages/EmailReadPage'));

// ── Shop pages ──
const ProductGridPage = lazy(() => import('../pages/ProductGridPage'));
const ProductListPage = lazy(() => import('../pages/ProductListPage'));
const CheckoutPage = lazy(() => import('../pages/CheckoutPage'));
const InvoicePage = lazy(() => import('../pages/InvoicePage'));

// ── CMS pages ──
const ContentPage = lazy(() => import('../pages/ContentPage'));
const MenuPage = lazy(() => import('../pages/MenuPage'));
const BlogPage = lazy(() => import('../pages/BlogPage'));
const EmailTemplatePage = lazy(() => import('../pages/EmailTemplatePage'));

// ── Widget ──
const WidgetPage = lazy(() => import('../pages/WidgetPage'));

// ── Auth pages (standalone) ──
const LoginPage = lazy(() => import('../pages/LoginPage'));
const RegistrationPage = lazy(() => import('../pages/RegistrationPage'));
const ForgotPasswordPage = lazy(() => import('../pages/ForgotPasswordPage'));
const LockScreenPage = lazy(() => import('../pages/LockScreenPage'));

// ── Error pages (standalone) ──
const Error400Page = lazy(() => import('../pages/Error400Page'));
const Error403Page = lazy(() => import('../pages/Error403Page'));
const Error404Page = lazy(() => import('../pages/Error404Page'));
const Error500Page = lazy(() => import('../pages/Error500Page'));
const Error503Page = lazy(() => import('../pages/Error503Page'));

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
