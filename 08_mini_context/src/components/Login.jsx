import Reactm,{useState,useContext} from 'react'
import UserContext from '../context/UserContext'

function Login() {
    const [username, setusername] = useState('')
    const [password, setpassword] = useState('')

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username, password})
    }

  return (
    <div>
        <h2>Context - Without using props,<br></br> as a global variable which we can use on any component</h2>
        <h2>Login</h2>
        <input 
        type="text" 
        value={username}
        onChange={(e) => setusername(e.target.value)}
        placeholder='Username'/>
        {" "}
        <input 
        type="text" 
        value={password}
        onChange={(e) => setpassword(e.target.value)}
        placeholder='Password'/>
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login