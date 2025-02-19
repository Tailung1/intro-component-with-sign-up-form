import React, { useState } from "react";

import "./App.css";

function App() {
  const [userInfo, setUserInfo] = useState({
    FirstName: "",
    LastName: "",
    Email: "",
    Password: "",
  });
  const handleSubmission=(event:React.FormEvent<HTMLFormElement>)=>{
    event.preventDefault();

    setUserInfo(userInfo)
    console.log(userInfo)
  }
  const [erros,setErros]=useState()

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setUserInfo({ ...userInfo, [event.target.name]: event.target.value });

  return (
    <>
      <form
       onSubmit={handleSubmission} 
      >
        <input
          onChange={handleChange}
          value={userInfo.FirstName}
          placeholder="First Name"
          name="FirstName"
          type="text"
        />
        <input
          onChange={handleChange}
          value={userInfo.LastName}
          placeholder="Last Name"
          name="LastName"
          type="text"
        />
        <input
          onChange={handleChange}
          value={userInfo.Email}
          placeholder="Email Address"
          name="Email"
          type="text"
        />
        <input
          onChange={handleChange}
          value={userInfo.Password}
          placeholder="Password"
          name="Password"
          type="password"
        />
        <button>Submit</button>
      </form>
    </>
  );
}

export default App;
