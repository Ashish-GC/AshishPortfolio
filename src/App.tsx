
import { useState } from 'react'
import './global.css'

import Layout from "./pages/layout"
import { Context } from './utils/Context'


function App() {
  const [activePage,setActivePage] = useState<String>("about");

  return (
    <>
    <main className='w-max h-max'> 
    <Context.Provider value={{activePage , setActivePage}}>
      <Layout></Layout>
    </Context.Provider>
    </main>
    </>
  )
}

export default App
