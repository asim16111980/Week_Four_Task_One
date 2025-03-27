import { Routes, Route } from "react-router-dom";
import LogInForm from "../components/LogInForm";
import SignUpForm from "../components/SignUpForm";

const SignUp = () => {
  return (
    <div className="flex py-10 items-center">
      <div className="w-3/5 hidden md:block">
        <img src="/public/images/sign_up/dl.beatsnoop.png" alt="beatsnoop" />
      </div>
      <div className="flex-1 flex flex-col items-center gap-6 md:gap-12">
        {location.pathname === "/login" ? <LogInForm /> : <SignUpForm />}
      </div>
    </div>
  );
};

export default SignUp;
