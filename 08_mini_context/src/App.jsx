
import './App.css'
import Login from './components/Login'
import Profile from './components/profile'
import UserContextrovider from './context/UserContextrovider'

function App() {

  return (
    <>
      <UserContextrovider>
        <Login/>
        <Profile/>
      </UserContextrovider>
    </>
  )
}

export default App
