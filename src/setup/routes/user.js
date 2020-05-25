// App Imports
import Login from '../../modules/user/Login/login'
import UserProfile from '../../modules/user/Profile'
import UserDashboard from '../../modules/user/Dashboard'



// Pages routes
export default {
  userLogin: {
    name: 'Login',
    path: '/user/login',
    component: Login
  },

  userProfile: {
    name: 'User Profile',
    path: '/user/profile',
    component: UserProfile,
    auth: true
  },

  userDashboard: {
    name: 'User Dashboard',
    path: '/user/dashboard',
    component: UserDashboard,
    auth: true
  }
}
