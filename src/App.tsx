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
  FirstName: string;
  LastName: string;
  Email: string;
  Password: string;
};
type TChecker = {
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

  const [errors, setErrors] = useState<TErrorInfo>({
    FirstName: "",
    LastName: "",
    Email: "",
    Password: "",
  });

  const handleSubmission = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    let isValid = true; // Local variable to track validation status

    if (!userInfo.FirstName) {
      setErrors((prev) => ({ ...prev, FirstName: "Input can not be empty" }));
      isValid = false;
    } else if (userInfo.FirstName.length < 5) {
      setErrors((prev) => ({
        ...prev,
        FirstName: "Input must contain at least 5 characters",
      }));
      isValid = false;
    } else {
      setErrors((prev) => ({ ...prev, FirstName: "" }));
    }

    if (!userInfo.LastName) {
      setErrors((prev) => ({ ...prev, LastName: "Input can not be empty" }));
      isValid = false;
    } else if (userInfo.LastName.length < 5) {
      setErrors((prev) => ({
        ...prev,
        LastName: "Input must contain at least 5 characters",
      }));
      isValid = false;
    } else {
      setErrors((prev) => ({ ...prev, LastName: "" }));
    }

    if (!userInfo.Email) {
      setErrors((prev) => ({ ...prev, Email: "Emial nput can not be empty" }));
      isValid = false;
    } else if (!emailRegex.test(userInfo.Email)) {
      setErrors((prev) => ({
        ...prev,
        Email: "Email is unvalid",
      }));
      isValid = false;
    } else {
      setErrors((prev) => ({ ...prev, Email: "" }));
    }

    if (!userInfo.Password) {
      setErrors((prev) => ({ ...prev, Password: "Password can not be empty" }));
      isValid = false;
    } else if (userInfo.Password.length < 5) {
      setErrors((prev) => ({
        ...prev,
        Password: "Password must contain at least 5 characters",
      }));
      isValid = false;
    } else {
      setErrors((prev) => ({ ...prev, Password: "" }));
    }

    if (isValid) {
      setUserInfo({ FirstName: "", LastName: "", Email: "", Password: "" });
    }
  };

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
        {errors.FirstName && <span>{errors.FirstName}</span>}
        <input
          className="w-[460px]"
          onChange={handleChange}
          value={userInfo.LastName}
          placeholder="Last Name"
          name="LastName"
          type="text"
        />
        {errors.LastName && <span>{errors.LastName}</span>}
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
            <span>{errors.Email}</span>
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
          <span className="text-red-600">{errors.Password}</span>
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
