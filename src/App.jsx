import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import Header from '../components/Header'
import Places from '../components/Places'
import Footer from '../components/Footer'

const App = () => {

  return (
    <div className='App'>
      <Header />
      <Places />
      <Footer />
    </div>
  )
}

export default App