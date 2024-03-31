
import './App.css';
import Header from './componenets/Header';
import AddSupplier from './componenets/AddSupplier';
import {Route, BrowserRouter as Router} from "react-router-dom"
function App() {
  return (
   <Router>

   
         <div >
            <Header></Header>
            <Route path="/add" exact component = {AddSupplier}></Route>
            <AddSupplier></AddSupplier>
    </div>
  </Router>
  );
}

export default App;
