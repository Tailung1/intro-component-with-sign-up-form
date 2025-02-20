import React, { useState } from "react";
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

import "./index.css";
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
    setErrors(newErrors);
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
      <form
        className=" flex flex-col items-center gap-[10px] p-[40px] w-[540px] h-[474px] rounded-[10px] bg-[#fff] "
        onSubmit={handleSubmission}
      >
        <input
          className="w-[460px]"
          onChange={handleChange}
          value={userInfo.FirstName}
          placeholder="First Name"
          name="FirstName"
          type="text"
        />
        {errors.FirstName && <span>First Name cannot be empty</span>}
        <input
          className="w-[460px]"
          onChange={handleChange}
          value={userInfo.LastName}
          placeholder="Last Name"
          name="LastName"
          type="text"
        />
        {errors.LastName && <span>Last Name cannot be empty</span>}
        <input
          className="w-[460px]"
          onChange={handleChange}
          value={userInfo.Email}
          placeholder="Email Address"
          name="Email"
          type="text"
        />
        {errors.Email && (
          <>
            <span>Looks like this is not an email</span>
          </>
        )}
        <div className="flex items-center relative ">
          <input
            className={`w-[460px] border border-[#DEDEDE] rounded-[5px] focus:outline-none ${
              errors.Password ? "border-red-500" : ""
            }`}
            onChange={handleChange}
            value={userInfo.Password}
            placeholder="Password"
            name="Password"
            type="password"
          />
          <img
            className={`w-6 h-6  absolute right-[-30px] ${
              errors.Password ? "block" : "hidden"
            }`}
            src="/images/icon-error.svg"
            alt="error image"
          />
        </div>
        {errors.Password && (
          <span className="text-red-600">Password cannot be empty</span>
        )}
        <button
          className="w-[460px] bg-[#38CC8B] rounded-[5px] p-y-[15px] p-x-[136px]"
          type="submit"
        >
          Submit
        </button>
      </form>
    </>
  );
}

export default App;
