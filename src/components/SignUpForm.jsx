import Input from "./Input";
import Button from "./Button";
import { signUp } from "../utils/crud";
import { useReducer, useState } from "react";
import { initialState, userReducer } from "../hooks/userReducer";
import { NavLink } from "react-router-dom";
import { getItem, setNewData } from "../utils/storage";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const SignUpForm = () => {
  const navigate = useNavigate();
  const [errorMsg, setErrorMsg] = useState("");
  const [state, dispatch] = useReducer(userReducer, initialState);

  const handleInputChange = (e, type) => {
    dispatch({ type: type, payload: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!state.firstName || !state.emailOrPhone || !state.password) {
      setErrorMsg("Please fill in all fields");
      return;
    }

    let userData = {
      firstName: state.firstName,
      username: state.emailOrPhone,
      password: state.password,
      email: "",
      phone: "",
    };

    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const phonePattern = /^(010|011|012|015)\d{8}$/;

    if (emailRegex.test(state.emailOrPhone)) {
      userData.email = state.emailOrPhone;
    } else if (phonePattern.test(state.emailOrPhone)) {
      userData.phone = state.emailOrPhone;
    } else {
      setErrorMsg("Please enter a valid email or phone number");
      return;
    }

    const isSigningUp = await signUp(userData);
    if (isSigningUp) {
      const userId = getItem("users").length;
      const newUser = { ...userData, id: userId,loggedIn:false };
      setNewData("users", newUser);
      navigate("/");
    } else {
      dispatch({ type: "CLEAR_STATE" });
      setErrorMsg("SignUp failed, please try again.");
    }
  };

  return (
    <>
      <div className="flex flex-col text-center md:text-left gap-2 md:gap-4 text-black">
        <h2 className="font-medium text-2xl sm:text-3xl md:text-4xl ">
          Create an account
        </h2>
        <p className="font-poppins text-base">Enter your details below</p>
      </div>
      <form
        className="font-poppins w-full flex flex-col gap-3 lg:gap-6"
        onSubmit={handleSubmit}
      >
        <Input
          className="w-full"
          placeholder="Name"
          value={state.firstName}
          onChange={(e) => handleInputChange(e, "SET_FIRSTNAME")}
        />
        <Input
          placeholder="Email or Phone Number"
          value={state.emailOrPhone || errorMsg}
          onChange={(e) => handleInputChange(e, "SET_EMAILORPHONE")}
        />
        <Input
          type="password"
          placeholder="Password"
          value={state.password}
          onFocus={() => dispatch({ type: "SET_PASSWORD", payload: "" })}
          onChange={(e) => handleInputChange(e, "SET_PASSWORD")}
        />
        <Button
          type="submit"
          value="Create Account"
          className="w-full rounded h-14 text-base bg-[#DB4444] text-neutral-50 hover:bg-[#E07575]"
        />
        <Button
          value="Sign up with Google"
          icon={<FcGoogle size={16}/>}
          className="w-full h-14 rounded bg-transparent border border-black border-opacity-50 hover:text-opacity-50"
        />
        <p className="flex flex-col sm:flex-row justify-center items-center gap-4 text-base opacity-70">
          <span>Already have account?</span>
          <NavLink
            to="/login"
            className="font-medium border-b border-black border-opacity-50"
          >
            Log in
          </NavLink>
        </p>
      </form>
    </>
  );
};

export default SignUpForm;
