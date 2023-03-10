import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./login/login.module.css";
const Home = ({ socket }) => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    const userName = localStorage.getItem("userName");
    socket.emit("newUser", { userName, socketID: socket.id });
    navigate("/chat");
  };
  return (
    <div className={style.body}>
      <div className={style.formJoin}>
        <div className="mx-auto">
          <form className="" onSubmit={handleSubmit}>
            <button
              type="button"
              class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              onClick={handleSubmit}
            >
              Join Group Chat
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
