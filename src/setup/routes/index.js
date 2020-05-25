// App Imports
import pages from './pages'
import vibe from './vibe'
import user from './user'
import portfolio from './portfolio'


// Combined routes
const routes = {
  ...pages,
  ...vibe,
  ...user,
  ...portfolio
}

export default routes
