import Input from "./Input";
import Button from "./Button";
import Icon from "./Icon";

const SignUpForm = () => {
  return (
    <>
      <div className="flex flex-col text-center md:text-left gap-2 md:gap-4 text-black">
        <h2 className="font-medium text-2xl sm:text-3xl md:text-4xl ">
          Create an account
        </h2>
        <p className="font-['poppins'] text-base">Enter your details below</p>
      </div>
      <form className="font-['poppins'] w-full flex flex-col gap-3 lg:gap-6">
        <Input placeholder="Name" />
        <Input placeholder="Email or Phone Number" />
        <Input type="password" placeholder="Password" />
        <Button value="Create Account" className="w-full text-base" />
        <button
          type="button"
          className="w-full flex justify-center items-center text-base py-4 border border-black border-opacity-40 rounded gap-3"
        >
          <Icon icon="icons/sign_up/Icon-Google.png" />
          Sign up with Google
        </button>
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
