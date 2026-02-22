import { Route, Routes } from 'react-router-dom'
import IndexOne from './pages/index/index-one'
import IndexTwo from './pages/index/index-two'
import IndexThree from './pages/index/index-three'
import IndexFour from './pages/index/index-four'
import AboutUs from './pages/inner-pages/about-us'
import Services from './pages/inner-pages/services'
import Project from './pages/projects/projects'
import ProjectDetail from './pages/projects/project-detail'
import Pricing from './pages/inner-pages/pricing'
import Team from './pages/inner-pages/team'
import Faqs from './pages/inner-pages/faqs'
import Blogs from './pages/blog/blogs'
import BlogDetail from './pages/blog/blog-detail'
import Login from './pages/auth/login'
import Signup from './pages/auth/signup'
import ForgotPassword from './pages/auth/forgot-password'
import Comingsoon from './pages/special/comingsoon'
import Maintenance from './pages/special/maintenance'
import Error from './pages/special/error'
import Terms from './pages/utility/terms'
import Privacy from './pages/utility/privacy'
import Contactus from './pages/inner-pages/contactus'
import Switcher from './components/switcher'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<IndexOne/>}/>
        <Route path='/index-two' element={<IndexTwo/>}/>
        <Route path='/index-three' element={<IndexThree/>}/>
        <Route path='/index-four' element={<IndexFour/>}/>
        <Route path='/aboutus' element={<AboutUs/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/projects' element={<Project/>}/>
        <Route path='/project-detail' element={<ProjectDetail/>}/>
        <Route path='/project-detail/:id' element={<ProjectDetail/>}/>
        <Route path='/pricing' element={<Pricing/>}/>
        <Route path='/team' element={<Team/>}/>
        <Route path='/faqs' element={<Faqs/>}/>
        <Route path='/blogs' element={<Blogs/>}/>
        <Route path='/blog-detail' element={<BlogDetail/>}/>
        <Route path='/blog-detail/:id' element={<BlogDetail/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/forgot-password' element={<ForgotPassword/>}/>
        <Route path='/comingsoon' element={<Comingsoon/>}/>
        <Route path='/maintenance' element={<Maintenance/>}/>
        <Route path='/404' element={<Error/>}/>
        <Route path='/terms' element={<Terms/>}/>
        <Route path='/privacy' element={<Privacy/>}/>
        <Route path='/contactus' element={<Contactus/>}/>
      </Routes>
      <Switcher/>
    </>
  )
}

export default App
