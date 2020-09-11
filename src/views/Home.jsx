import React, {useState} from 'react';
import Icones from '../components/Icones';
import Menu from '../components/Menu'


const Home = () => {
  const [count, setCount] = useState(0)

  const addCount = () => setCount(count + 1)


  return (
    <div>
      <Menu />
      < Icones addCount={addCount} text1="Texto1" /> 
      <div className="main"></div>     
      <div>{count}</div>
    </div>
  )
}

export default Home;
