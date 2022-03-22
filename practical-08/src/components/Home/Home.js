import React from 'react'
import {useDispatch} from "react-redux";
import {logout} from "../../store/signUpform"
import "./Home.css"
import {useHistory} from "react-router-dom";

function Home() {
    const detail=JSON.parse(localStorage.getItem("user"))
    const history=useHistory()
    console.log(detail)
    const dispatch=useDispatch();
    const handlelogout=()=>{
      dispatch(logout());
      history.push("/signup")
    }
  return (
    <>
  
    {detail!==null&&<header className="header">
        <div className="container mainWrapper2">
          <div className="userDetailsWrapper">
            <span className="userImg">
              <img src={detail.profile} alt="user_image" />
            </span>
            <span className="userDetails">
              {`Hello ${detail.Name}, you are registered with the ${detail.email} 
              and ${detail.number}.`}
            </span>
          </div>
          <div className="logoutBtnWrapper">
          <button onClick={handlelogout}>Logout</button>
          </div>
        </div>
      </header>}
    </>
  )
}

export default Home




 