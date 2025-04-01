import Input from "./Input";
import Button from "./Button";

const LogInForm = () => {
  return (
    <>
      <div className="flex flex-col text-center md:text-left gap-2 md:gap-4 text-black">
        <h2 className="font-medium text-2xl sm:text-3xl md:text-4xl ">
          Log in to Exclusive
        </h2>
        <p className="font-poppins text-base">Enter your details below</p>
      </div>
      <form className="font-poppins flex flex-col gap-5 md:gap-10">
        <Input placeholder="Email or Phone Number" />
        <Input type="password" placeholder="Password" />
        <div className="flex flex-col sm:flex-row gap-3 justify-between items-center">
          <Button
            value="Log In"
            className="w-full sm:w-48 md:w-36 bg-[#DB4444] text-[#FAFAFA] hover:bg-[#E07575]"
          />
          <span className="text-[#DB4444] text-base">
            <a href="#">Forget Password?</a>
          </span>
        </div>
      </form>
    </>
  );
};

export default LogInForm;
