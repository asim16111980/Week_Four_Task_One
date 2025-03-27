import Input from "./Input";
import Button from "./Button";
import Icon from "./Icon";

const SignUpForm = () => {
  return (
    <>
      <div className="flex flex-col text-center md:text-left gap-3 md:gap-6 text-black">
        <h2 className="font-medium text-3xl md:text-4xl ">Create an account</h2>
        <p className="font-['poppins'] text-sm md:text-base">
          Enter your details below
        </p>
      </div>
      <form className="font-['poppins'] w-full px-10 flex flex-col items-stretch gap-6 md:gap-12">
        <Input placeholder="Name" />
        <Input placeholder="Email or Phone Number" />
        <Input type="password" placeholder="Password" />
        <Button value="Create Account" className="w-full" />
        <button type="button" className="w-full flex justify-center items-center py-4 border border-black border-opacity-40 rounded gap-3">
          <Icon icon="/public/icons/sign_up/Icon-Google.png" />
          Sign up with Google
              </button>
              <p className="flex gap-4 text-base text-opacity-70">
              <span >
              Already have account?
        </span>   <a href="/login" className="font-medium underline underline-offset-8 opacity-50">Log in</a>
              </p>
        
      </form>
    </>
  );
};

export default SignUpForm;
