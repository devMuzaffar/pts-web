const SignIn = ({ isNewUser, setIsNewUser }) => {
  const changeForm = (e) => {
    e.preventDefault();
    setIsNewUser(!isNewUser);
  };

  return (
    <form className="flex flex-col gap-3 w-full py-2">
      <input
        className="p-2 border-2 outline-none rounded-md px-5"
        type="text"
        placeholder="Username"
      />
      <input
        className="p-2 border-2 outline-none rounded-md px-5"
        type="password"
        placeholder="Password"
      />
      <button className="bg-primary-blue text-lg font-medium text-white rounded-md py-2">
        Sign In
      </button>
      <div className="flex flex-col text-sm text-center gap-2">
        <a href="/" className="text-primary-blue font-medium w-full">
          Forgot Password?
        </a>
        <a
          href=""
          className="text-primary-blue font-medium w-full"
          onClick={(e) => {
            changeForm(e);
          }}
        >
          Create new account
        </a>
      </div>
    </form>
  );
};

export default SignIn;
