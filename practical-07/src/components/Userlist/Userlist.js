import React, { useEffect, useState} from "react";
import User from "./User";
import "./Userlist.css";
import UserProfileCard from "../UserProfileCard/UserProfileCard";
//import ReactPaginate from 'react-paginate';
function Userlist() {
  const [userlist, setUserlist] = useState([]);
  const [page,setPage]=useState(1);
  const [user,setUser]=useState(null)
  let listOfUsers=[]
  let randomClick=Math.round(2000 + Math.random() * (3000 - 2000));
  function handleAPICall_1() {
 
    fetch("https://reqres.in/api/users?page="+page.toString())

      .then((data) => {
        return data.json();
      })
      .then((JSONData) => {
        listOfUsers = JSONData.data;
        listOfUsers.map((item) => {
          item.access = "Read";
          item.status = "Inactive";
          item.clickreviwed=randomClick;
          return item;
        });
        setUserlist(listOfUsers);
      });
      
    setUserlist(listOfUsers);
    //console.log(listOfUsers,'listofusers')
  }
  useEffect(()=>{
    handleAPICall_1()
  },[page])
  const Callpage1=React.useCallback(()=>{
    setPage(1)
  },[]);
  const Callpage2=React.useCallback(()=>{
    setPage(2)
  },[]);
  

  return (
    <section>
      <div className="container">
        <div className="userList">
          {/* <UserList/> component which contain user list */}
          <User
            users={userlist}
            handleHover={(user) => {
              setUser(user);
            }}
          />
          {/* <UserProfileCard /> component which contain user details in card */}
           <UserProfileCard user={user} />
        </div>
        <div className="pagination-layout">
        <nav aria-label="Page navigation example">
          <ul className="pagination justify-content-center">
            <li className="page-item">
              <a className="page-link" onClick={Callpage1}>
                1
              </a>
            </li>

            <li className="page-item" >
              <a className="page-link" onClick={Callpage2}>
                2
              </a>
            </li>
          </ul>
        </nav>
      </div>
      </div>
    </section>
  );
}

export default Userlist;
