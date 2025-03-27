import Input from "./Input";

const LogInForm = () => {
  return (
    <>
      <div className="flex flex-col gap-3 md:gap-6 text-black">
        <h2 className="font-medium text-3xl md:text-4xl ">
          Log in to Exclusive
        </h2>
        <p className="font-['poppins'] text-sm md:text-base">
          Enter your details below
        </p>
      </div>
      <form className="font-['poppins'] flex flex-col gap-5 md:gap-10">
        <Input placeholder="Email or Phone Number" />
        <Input type="password" placeholder="Password" />
        <div className="flex justify-between items-center">
          <Button value="Log In" width={143} />
          <span className="text-[#DB4444] text-sm md:text-base">
            Forget Password?
          </span>
        </div>
      </form>
    </>
  );
};

export default LogInForm;
