import Button from "../components/Button";

const SignUp = () => {
  return (
    <div className="flex py-10 items-center">
      <div className="w-3/5">
        <img src="/public/images/sign_up/dl.beatsnoop.png" alt="beatsnoop" />
      </div>
      <div className="flex-1 flex flex-col items-center gap-6 md:gap-12">
        <div className="flex flex-col gap-3 md:gap-6 text-black">
          <h2 className="font-medium text-3xl md:text-4xl ">
            Log in to Exclusive
          </h2>
          <p className="font-['poppins'] text-sm md:text-base">
            Enter your details below
          </p>
        </div>
        <form className="font-['poppins'] flex flex-col gap-5 md:gap-10">
          <input
            type="text"
            placeholder="Email or Phone Number"
            className="placeholder:opacity-40 border-b border-black focus:outline-none text-sm md:text-base"
          />
          <input
            type="password"
            placeholder="Password"
            className="placeholder:opacity-40 border-b border-black focus:outline-none text-sm md:text-base"
          />
          <div className="flex justify-between items-center">
            <Button value="Log In" width={143} />
            <span className="text-[#DB4444] text-sm md:text-base">
              Forget Password?
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
