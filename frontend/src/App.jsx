import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios"

function App() {
  let [st, setSt] = useState({ id: null, name: null });
  // const query = useQuery();

  useEffect(() => {

    const fetchData = async () => {
      await axios.get("http://localhost:8080/api/").then(res => {
        setSt(res.data);
      }).catch(err => {
        console.log(err);
      })
    }

    fetchData();
  }, {});
  return (
    <>
      <h1>Users List</h1>
      <ul>
        <li><p>{st.id}</p><mark>{st.name}</mark></li>
      </ul>
    </>
    // <>
    //   <p>hello</p>
    // </>
  )
}

export default App
