import './App.css'
import { Routes, Route} from 'react-router-dom'
import AboutPage from './pages/AboutPage/AboutPage'
import PostList from './pages/PostList/PostList'
import Layout from './components/Layout/Layout'


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>} >
              <Route index element={<h3>Home page</h3>}/>
              <Route path='about' element={<AboutPage/>} />
              <Route path='posts' element={<PostList/>} />
        </Route>
      </Routes>
    </>
  )
}

export default App
