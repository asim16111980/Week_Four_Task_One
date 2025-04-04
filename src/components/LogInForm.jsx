import Input from "./Input";
import Button from "./Button";
import { NavLink } from "react-router-dom";
import { useReducer, useState } from "react";
import { initialState, loginReducer } from "../hooks/loginReducer";
import { logIn } from "../utils/crud";
import { useNavigate } from "react-router-dom";
import { getValue } from "../utils/storage";

const LogInForm = () => {
  const navigate = useNavigate();
  const [errorMsg, setErrorMsg] = useState("");
  const [state, dispatch] = useReducer(loginReducer, initialState);

  const handleInputChange = (e, type) => {
    dispatch({ type: type, payload: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!state.emailOrPhone || !state.password) {
      setErrorMsg("Please fill in all fields");
      return;
    }
  
    let loginData = {
      username: "emilys",
      password: "emilyspass",
    };
  
    const isLoggedIn = await logIn(loginData); 
    if (isLoggedIn) {
      navigate("/"); 
    } else {
      dispatch({ type: "CLEAR_STATE" });
      setErrorMsg("Login failed, please try again.");
    }
  };
  
  return (
    <>
      <div className="flex flex-col text-center md:text-left gap-2 md:gap-4 text-black">
        <h2 className="font-medium text-2xl sm:text-3xl md:text-4xl ">
          Log in to Exclusive
        </h2>
        <p className="font-poppins text-base">Enter your details below</p>
      </div>
      <form
        className="font-poppins flex flex-col gap-5 md:gap-10"
        onSubmit={handleSubmit}
      >
        <Input
          placeholder="Email or Phone Number"
          value={state.emailOrPhone}
          onChange={(e) => handleInputChange(e, "SET_EMAILORPHONE")}
        />
        <Input
          type="password"
          placeholder="Password"
          value={state.password}
          onChange={(e) => handleInputChange(e, "SET_PASSWORD")}
        />
        <div className="flex flex-col sm:flex-row gap-3 justify-between items-center">
          <Button
            type="submit"
            value="Log In"
            className="w-full rounded sm:w-48 md:w-36 bg-[#DB4444] text-neutral-50 hover:bg-[#E07575]"
          />
          <span className="text-[#DB4444] text-base">
            <NavLink href="#">Forget Password?</NavLink>
          </span>
        </div>
      </form>
    </>
  );
};

export default LogInForm;
