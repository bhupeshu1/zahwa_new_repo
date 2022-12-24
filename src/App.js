import './App.css';
import {
  Routes,
  Route,
  BrowserRouter
} from "react-router-dom";
import HomePage from './Zahawa/Homepage/homepage'
import MyOrder from './Zahawa/MyOrder/index'
import Sidebar from "./Components/Sidebar"
import Mystore from './Zahawa/MyStore/Mystore'
import Promotion from './Zahawa/Promotion/index'
import Proposal from './Zahawa/Proposal/index'
import HamburgerMenu from './Components/HamburgerMenu/hamburgermenu';
import Authentication from './Zahawa/Authentication/LoginPage'

function App() {
  return (
    <div className='app-container'>
      <Authentication/>
    {/* <BrowserRouter>
      <div className='route-container'>
      <Sidebar />

        <Routes>
          

          <Route path='/' element={<HomePage />} />
          <Route path='/MyStore' element={<Mystore />} />
          <Route path='/MyOrder' element={<MyOrder />} />
          <Route path='/Promotion' element={<Promotion />} />
          <Route path='/Proposal' element={<Proposal />} /> 

        </Routes>
        <HamburgerMenu />
       </div>



      </BrowserRouter> */}
    </div>
  );

}
export default App;
