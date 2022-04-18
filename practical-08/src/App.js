import Signup from "./components/Signup/Signup";
import './App.css';
import { useSelector } from "react-redux";
import Home from "./components/Home/Home";
import {Switch,Route,Redirect} from "react-router-dom";
function App() {
   const loggedStatus = useSelector((state)=>state.signUpform.isLoggedin);
   console.log(loggedStatus)
   const detail=JSON.parse(localStorage.getItem("user"))
  return (
    <>
    <Switch>
      <Route path="/" exact>
        <Redirect to="/signup"></Redirect>
      </Route>
      <Route path="/signup">
        {!loggedStatus?<Signup/>:<Redirect to="/home"></Redirect>}
      </Route>
      <Route path="/home">
      {detail!==null?<Home/>:<Redirect to="/signup"></Redirect>}
      </Route>

    </Switch>
    {/* <Signup/> */}
         
    </> 
  );
}

export default App;
