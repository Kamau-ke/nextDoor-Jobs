// import Register from'./pages/register'
import Navbar from './components/Navbar'
import JobCard from './components/JobCard'
import './App.css'
import MainSection from './components/MainSection'
function App() {
 

  return (
    <div className='h-screen w-screen bg-white'>
    {/* <Register/> */}
    <Navbar/>
    <MainSection/>
    
    </div>
  )
}

export default App
