import React, { useState } from "react";
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;


import "./App.css";

type TUserInfo = {
  FirstName: string;
  LastName: string;
  Email: string;
  Password: string;
};
type TErrorInfo = {
  FirstName: boolean;
  LastName: boolean;
  Email: boolean;
  Password: boolean;
};

function App() {
  const [userInfo, setUserInfo] = useState<TUserInfo>({
    FirstName: "",
    LastName: "",
    Email: "",
    Password: "",
  });
  console.log(userInfo);

  const handleSubmission = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newErrors = {
      FirstName: !userInfo.FirstName,
      LastName: !userInfo.LastName,
      Email: !emailRegex.test(userInfo.Email),
      Password: !userInfo.Password,
    };
    setErrors(newErrors)
    if (!Object.values(newErrors).includes(true)) {
      setUserInfo({ FirstName: "", LastName: "", Email: "", Password: "" });
    }
  };
  const [errors, setErrors] = useState<TErrorInfo>({
    FirstName: false,
    LastName: false,
    Email: false,
    Password: false,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setUserInfo({ ...userInfo, [event.target.name]: event.target.value });

  return (
    <>
      <form onSubmit={handleSubmission}>
        <input
          onChange={handleChange}
          value={userInfo.FirstName}
          placeholder="First Name"
          name="FirstName"
          type="text"
        />
        {errors.FirstName && <span>First Name cannot be empty</span>}
        <input
          onChange={handleChange}
          value={userInfo.LastName}
          placeholder="Last Name"
          name="LastName"
          type="text"
        />
        {errors.LastName && <span>Last Name cannot be empty</span>}
        <input
          onChange={handleChange}
          value={userInfo.Email}
          placeholder="Email Address"
          name="Email"
          type="text"
        />
        {errors.Email && (
          <>
            <span>Looks like this is not an email</span>
            <img
             
              src="/images/icon-error.svg"
              alt="error image"
            />
          </>
        )}
        <input
          onChange={handleChange}
          value={userInfo.Password}
          placeholder="Password"
          name="Password"
          type="password"
        />
        {errors.Password && <span>Password cannot be empty</span>}
        <button>Submit</button>
      </form>
    </>
  );
}

export default App;
