import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const { signIn, setError, error, resetPassword } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  // Password reset handler
  const handleChange = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const passwordReset = (email) => {
    if (!email) {
      return toast("Please Enter Your Email");
    } else {
      resetPassword(email);
      toast("Please Check Your Email");
    }
  };

  // Sign in handler
  const handleSignIn = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const email = data.get("email");
    const password = data.get("password");

    // Login with email and password
    signIn(email, password)
      .then((res) => {
        const user = res.user;
        if (user.emailVerified === false) {
          return toast("Please verify Your Email First");
        } else {
          e.target.reset();
          toast("Login Successful");
          navigate("/");
        }
      })
      .catch((error) => {
        setError(error.message);
        toast(error.message);
      });
  };

  return (
    <div className="hero bg-indigo-600 font-medium min-h-screen flex items-center justify-center">
      <form
        onSubmit={handleSignIn}
        className="card-body w-full max-w-md mx-auto p-6 bg-white rounded-lg shadow-md"
      >
        <h3 className="text-3xl font-bold text-center mb-6">
          Please Login to Your Account
        </h3>
        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            onChange={handleChange}
            type="email"
            name="email"
            placeholder="Enter your email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            placeholder="Enter your password"
            name="password"
            className="input input-bordered"
            required
          />
          <label className="label flex flex-col mt-2">
            <a
              href="#"
              onClick={() => passwordReset(email)}
              className="label-text-alt link link-hover"
            >
              Forgot password?
            </a>
            <span className="mt-2">
              New Here?{" "}
              <Link className="text-success font-bold" to="/register">
                Create An Account
              </Link>
            </span>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-active btn-secondary w-full">Login</button>
        </div>
        {error && <p className="text-red-600 mt-2">{error}</p>}
      </form>
      <ToastContainer />
    </div>
  );
};

export default Login;
