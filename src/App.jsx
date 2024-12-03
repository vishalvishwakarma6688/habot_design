import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/header/Header'
import Howworks from './components/How Works/Howworks'
import Main from './components/Main/Main'
import Signup from './components/signup/Signup'
import Verified from './components/verified/Verified'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min';

function App() {

  return (
    <>

      <Header />
      <Main />
      <Signup />
      <Verified />
      <Howworks />
      <Footer />

    </>
  )
}

export default App
