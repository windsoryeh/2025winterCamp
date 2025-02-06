import { useState, createContext, useContext } from "react";


function UserList() {
    const users = [
      { name: "小明", score: 90 },
      { name: "小美", score: 88 },
      { name: "小華", score: 60 },
    ];
    return (
      <ul>
        {users.map((user) => (
          <li>
            {user.name} - {user.score} 分
          </li>
        ))}
      </ul>
    );
  }

export default UserList;