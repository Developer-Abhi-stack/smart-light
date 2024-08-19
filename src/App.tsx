
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Heading from './components/Heading'
import Products from './components/Products'

function App() {
  

  return (
    <div>
      <Header />
      <Heading />
      <h1 className='text-center text-5xl'>Hello User</h1>
      <Products />
      <Footer />
    </div>
  )
}

export default App
