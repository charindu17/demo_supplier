
import './App.css';
import Header from './componenets/Header';
import AddSupplier from './componenets/AddSupplier';
import {BrowserRouter as Router,Route} from "react-router-dom"
function App() {
  return (
   <Router>   
    <div >
            <Header/>
            <Route path="/add" exact component = {AddSupplier}></Route>
          
    </div>
  </Router>
  );
}

export default App;
