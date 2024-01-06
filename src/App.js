import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Header from './components/Header';
import "./style/App.scss";
import "./style/header.scss";
import Home from './components/Home';
import "./style/home.scss";
import Footer from './components/Footer';
import "./style/footer.scss";
import Contact from './components/Contact';
import "./style/contact.scss";
import Services from './components/Services';

function App() {
  return (
   <Router>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}  />
      <Route path="/contact" element={<Contact/>}  />
      <Route path="/services" element={<Services/>}  />
    </Routes>
    <Footer/>
   </Router>
  );
}

export default App;
