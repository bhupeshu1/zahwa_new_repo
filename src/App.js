import './App.css';
import {
  Routes,
  Route,
  BrowserRouter
} from "react-router-dom";
import HomePage from './Zahawa/Homepage/homepage'
import Myorder from './Zahawa/MyOrder/index'
import Sidebar from "./Components/Sidebar"
import Mystore from './Zahawa/MyStore/Mystore'
import Promotion from './Zahawa/Promotion/index'
import Proposal from './Zahawa/Proposal/index'

function App() {
  return (
    <BrowserRouter>
      <div className='app-container'>
        <Sidebar />
        <div className='route-container'>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/MyStore' element={<Mystore />} />
            <Route path='/Myorder' element={<Myorder />} />
            {/* <Route path='/Promotion' element={<Promotion />} /> */}
            {/* <Route path='/Proposal' element={<Proposal />} /> */}
          </Routes>
        </div>
      </div>
    </BrowserRouter>

  );

}
export default App;
