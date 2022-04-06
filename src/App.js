
import './App.css';

import HomePage from './Pages/homepage';
import MenuBar from './Components/Header/header.components';
import Footer from './Components/Footer/footer.component';
import Copyright from './Components/Copyright/copyright.components';

function App() {
  return (
    <div>
    <MenuBar/>
  <HomePage/>
  <Footer/>
  <Copyright/>
  </div>
  );
}

export default App;
