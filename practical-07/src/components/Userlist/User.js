import React from "react";
import "./User.css";
import * as Icon from 'react-feather';
const User = (props) => {
  console.log(props)
  return (
    <table>
      {/* headings of userlist */}
      <thead>
        <tr className="headRow">
          <th className="col-1">Name</th>
          <th>Status</th>
          <th>Access</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {/* showing UsersList */}
        {props.users.length!==0 && props.users.map((user, index) => {
          return (
            <>
              {/* first row for owner */}
              {index === 0 && (
                <tr>
                  <td className="userDetailsWrapper">
                    <img
                      className="profileImg"
                      src={user.avatar}
                      alt=""
                    />
                    <span className="userName">{user.first_name}</span>
                    <span className="userEmail">{user.email}</span>
                  </td>
                  <td style={{ color: "#04AA6D", fontWeight: "700" }}>
                    {user.status}
                  </td>
                  <td>{user.access}</td>
                  <td>
                    <Icon.Lock
                      size={18}
                      style={{ color: "rgba(0, 0, 0, 0.6)" }}
                    />
                  </td>
                </tr>
              )}
              {/* other users row */}
              {index !== 0 && (
                <tr
                  onMouseEnter={() => {
                    props.handleHover(user);
                  }}
                  onMouseLeave={() => {
                    props.handleHover(null);
                  }}
                >
                  <td className="userDetailsWrapper">
                    <img
                      className="profileImg"
                      src={user.avatar}
                      alt=" "
                    />
                    <span className="userName">{user.first_name}</span>
                    <span className="userEmail">{user.email}</span>
                  </td>
                  <td className="">
                    <select className="selectMenu" value={user.status}>
                      <option value="Active">Active</option>
                      <option value="Inactive">Inactive</option>
                    </select>
                  </td>
                  <td className="">
                    <select className="selectMenu" value={user.access}>
                      <option value="Manager">Manager</option>
                      <option value="Read">Read</option>
                    </select>
                  </td>
                  <td className="">
                    <Icon.Trash2
                      size={18}
                      style={{ color: "rgba(0, 0, 0, 0.6)" }}
                    />
                  </td>
                </tr>
              )}
            </>
          );
        })}
      </tbody>
    </table>
  );
};

export default React.memo(User);
