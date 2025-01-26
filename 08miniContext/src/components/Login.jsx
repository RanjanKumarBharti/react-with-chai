import {useState,useContext} from 'react'
import userContext from '../context/UserContext'

function Login(){
    const [username,setUsername] = useState('')
    const [password, setPassword] = useState('')
    const {setUser} = useContext(userContext)
    const handelSubmit =(e)=>{
          e.preventDefault()
          setUser({username,password})
    }
  return (
    <div>
      <h2>Login</h2>
      <input value={username} onChange={(e)=>setUsername(e.target.value)} type="text" placeholder='username' />{" "}
      <input value={password} onChange={(e)=> setPassword(e.target.value)} type="text" placeholder='password' />{" "}
      <button onClick={handelSubmit} type="submit">submit</button>
    </div>
  )
}

export default Login
