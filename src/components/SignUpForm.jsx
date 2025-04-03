import Input from "./Input";
import Button from "./Button";
import { addNewData } from "../utils/crud";
import { useReducer, useState } from "react";
import { initialState, userReducer } from "../hooks/userReducer";
// import { FcGoogle } from "react-icons/fc";

const SignUpForm = () => {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [state, dispatch] = useReducer(userReducer, initialState);

  const handleInputChange = (e, type) => {
    dispatch({ type: type, payload: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
    if (!state.name || !state.emailOrPhone || !state.password) {
      setErrorMsg("Please fill in all fields");
      return;
    }

    let updatedUserData = { ...userData, username: state.name, password: state.password };

    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const phonePattern = /^(010|011|012|015)\d{8}$/;

    if (emailRegex.test(state.emailOrPhone)) {
      updatedUserData.email = state.emailOrPhone;
      updatedUserData.phone = "";
    } else if (phonePattern.test(state.emailOrPhone)) {
      updatedUserData.phone = state.emailOrPhone;
      updatedUserData.email = "";
    } else {
      setErrorMsg("Please enter a valid email or phone number");
      return;
    }

    setUserData(updatedUserData);

    addNewData("users", updatedUserData); 
  };
  // const handleEmailOrPhoneChange = (e) => {

  //   dispatch({ type: "SET_EMAILORPHONE", payload: e.target.value });
  // };

  // const handlePasswordChange = (e) => {
  //   dispatch({ type: "SET_PASSWORD", payload: e.target.value });
  // };

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
          placeholder="Name"
          value={state.name}
          onChange={(e) => handleInputChange(e, "SET_NAME")}
        />
        <Input
          placeholder="Email or Phone Number"
          value={state.emailOrPhone || errorMsg}
          onFocus={() => dispatch({ type: "SET_EMAILORPHONE", payload: "" })}
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
        {/* <button
          type="button"
          className="w-full flex justify-center items-center text-base py-4 border border-black border-opacity-40 rounded gap-3"
        >
          <Icon icon="icons/sign_up/Icon-Google.png" />
          Sign up with Google
        </button> */}
        <Button
          value="Sign up with Google"
          // icon={<FcGoogle size={24} />}
          // onClick={handleSubmit}
          className="w-full h-14 rounded bg-transparent border border-black border-opacity-50 hover:text-opacity-50"
        />
        <p className="flex flex-col sm:flex-row justify-center items-center gap-4 text-base opacity-70">
          <span>Already have account?</span>
          <a
            href="/login"
            className="font-medium border-b border-black border-opacity-50"
          >
            Log in
          </a>
        </p>
      </form>
    </>
  );
};

export default SignUpForm;
