import './App.css';
import {
  Routes,
  Route,
  BrowserRouter
} from "react-router-dom";
import HomePage from './Zahawa/HomePage'
import Sidebar from './Components/Sidebar/Sidebar'
import Myorders from './Zahawa/Myorders'
import Mystore from './Zahawa/Mystore'
import Promotion from'./Zahawa/Promotion'
import Proposal from './Zahawa/Proposal'
function App() {
return(
  <div> 
    <BrowserRouter>
    <Sidebar />
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/Mystore' element={<Mystore/>} />
      <Route path='/Myorders' element={<Myorders/>} />
      <Route path='/Promotion' element={<Promotion/>} />
      <Route path='/Proposal' element={<Proposal/>} />
    </Routes>
    </BrowserRouter>                                                                                    
  </div>

  );

}
export default App;
