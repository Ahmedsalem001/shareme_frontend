import { Routes, Route , useNavigate} from 'react-router-dom'
import Home from './containers/Home'
import Login from './components/Login'
export default function App() {
  return (
    <Routes>
      <Route path="login" element={<Login/>} />
      <Route path="/*" element={<Home />} />
    </Routes>
  )
}