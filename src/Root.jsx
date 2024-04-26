
import { Outlet } from 'react-router-dom'
import './App.css'
import NavBar from './Components/NavBar/NavBar'
import Footer from './Components/Footer/Footer'
import FirebaseProviders from './FirebaseProviders/FirebaseProviders'

function Root() {

  return (
    <div className='2xl:container mx-auto'>
      <NavBar />

      <FirebaseProviders  text={'hello'} text2={'world'}>
        <button>click me</button>
      </FirebaseProviders>
      
      <Outlet />
      <Footer />
    </div>
  )
}


export default Root