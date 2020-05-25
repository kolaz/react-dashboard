import Dashboard from '../../modules/vibe/pages/Dashboard';
import Buttons from '../../modules/vibe/elements/Buttons';
import Alerts from '../../modules/vibe/elements/Alerts';
import Grid from '../../modules/vibe/elements/Grid';
import Typography from '../../modules/vibe/elements/Typography';
import Cards from '../../modules/vibe/elements/Cards';
import Tabs from '../../modules/vibe/elements/Tabs';
import Tables from '../../modules/vibe/elements/Tables';
import Breadcrumbs from '../../modules/vibe/elements/Breadcrumbs';
import Forms from '../../modules/vibe/elements/Forms';
import Loaders from '../../modules/vibe/elements/Loaders';
import Avatars from '../../modules/vibe/elements/Avatars';
import Invoice from '../../modules/vibe/pages/Invoice';
import Analytics from '../../modules/vibe/pages/Analytics';
import CmsPage from '../../modules/vibe/pages/Cms';
import Widgets from '../../modules/vibe/pages/Widgets';
import BlankPage from '../../modules/vibe/pages/BlankPage';
import SubNav from '../../modules/vibe/pages/SubNav';
import Feed from '../../modules/vibe/pages/Feed';
import Modals from '../../modules/vibe/elements/Modals';
import ProgressBars from '../../modules/vibe/elements/ProgressBars';
import PaginationPage from '../../modules/vibe/elements/Pagination';
import ErrorPage from '../../modules/vibe/pages/404';

// See React Router documentation for details: https://reacttraining.com/react-router/web/api/Route
export default{
  Dashboard: {
    name: 'Dashboard',
    path: '/home',
    component: Dashboard,
    auth: true
  },
  Buttons: {
    name: 'Buttons',
    path: '/elements/buttons',
    component: Buttons,
    auth: true
  },
  Alerts: {
    name: 'Alerts',
    path: '/elements/alerts',
    component: Alerts,
    auth: true
  },
  Grid: {
    name: 'Grid',
    path: '/elements/grid',
    component: Grid,
    auth: true
  },
  Typography: {
    name: 'Typography',
    path: '/elements/typography',
    component: Typography,
    auth: true
  },
  Cards: {
    name: 'Cards',
    path: '/elements/cards',
    component: Cards,
    auth: true
  },
  Tabs: {
    name: 'Tabs',
    path: '/elements/tabs',
    component: Tabs,
    auth: true
  },
  Tables: {
    name: 'Tables',
    path: '/elements/tables',
    component: Tables,
    auth: true
  },
  ProgressBars: {
    name: 'Progress Bars',
    path: '/elements/progressbars',
    component: ProgressBars,
    auth: true
  },
  Pagination: {
    name: 'Pagination',
    path: '/elements/pagination',
    component: PaginationPage,
    auth: true
  },
  Modals: {
    name: 'Modals',
    path: '/elements/modals',
    component: Modals,
    auth: true
  },
  Breadcrumbs: {
    name: 'Breadcrumbs',
    path: '/elements/breadcrumbs',
    component: Breadcrumbs,
    auth: true
  },
  Forms: {
    name: 'Forms',
    path: '/elements/forms',
    component: Forms,
    auth: true
  },
  Loader: {
    name: 'Loaders',
    path: '/elements/loaders',
    component: Loaders,
    auth: true
  },
  avatars: {
    name: 'Avatars',
    path: '/elements/avatars',
    component: Avatars,
    auth: true
  },
  BlankPage: {
    name: 'Blank',
    path: '/pages/blank',
    component: BlankPage,
    auth: true
  },
  SubNav: {
    name: 'Sub Navigation',
    path: '/pages/subnav',
    component: SubNav,
    auth: true
  },
  ErrorPage: {
    name: '404',
    path: '/pages/404',
    component: ErrorPage,
  },
  Analytics: {
    name: 'Analytics',
    path: '/apps/analytics',
    component: Analytics,
    auth: true
  },
  Feed: {
    name: 'Activity Feed',
    path: '/apps/feed',
    component: Feed,
    auth: true
  },
  Invoice: {
    name: 'Invoice',
    path: '/apps/invoice',
    component: Invoice,
    auth: true
  },
  CmsPage: {
    name: 'CMS',
    path: '/apps/cms',
    component: CmsPage,
    auth: true
  },
  Widgets: {
    name: 'Widgets',
    path: '/widgets',
    component: Widgets,
    auth: true
  }
}