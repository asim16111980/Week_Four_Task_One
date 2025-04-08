import { Routes, Route } from "react-router-dom";
import LogInForm from "../components/LogInForm";
import SignUpForm from "../components/SignUpForm";

const SignUp = () => {
  return (
    <div className="flex items-stretch py-10">
      <div className="w-1/2 lg:w-3/5 hidden md:block">
        <img
          src="images/sign_up/dl.beatsnoop.png"
          alt="beatsnoop"
          className="h-full"
        />
      </div>
      <div className="flex-1 flex flex-col justify-center gap-3 md:gap-6 ">
        {location.pathname === "/login" ? <LogInForm /> : <SignUpForm />}
      </div>
    </div>
  );
};

export default SignUp;
