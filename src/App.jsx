import {  useEffect, useState } from 'react'
import './App.css'
import Header from './Componets/Header'
import Home from './Pages/Home'
import { ThemeContext } from './Context/ThemeContext'
import { Hello } from './Componets/Hello'

// import ThemeContext from './Context/ThemeContext'
//export const ThemeContext = createContext('dark');

function App() {
  // const [count, setCount] = useState(0)
  const [theme, setTheme] = useState('light')
useEffect(()=>{
   
  setTheme(localStorage.getItem('theme')?localStorage.getItem('theme'):'dark')

},[])
  return (
    <ThemeContext.Provider value={{theme,setTheme}}>
    <div className={`${theme} ${theme=='dark'?'bg-[#1c083d]':null}`}>
        <Header/>
        <Home/>
   <Hello />
    </div>
     </ThemeContext.Provider>
  )
}

export default App
