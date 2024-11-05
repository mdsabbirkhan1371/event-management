import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import { sendEmailVerification } from "firebase/auth";

const Register = () => {
  const { createUser, setSuccess, success, error, setError } =
    useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const email = data.get("email");
    const name = data.get("name");
    const password = data.get("password");
    const photo = data.get("photo");

    // Clean error and success data from UI
    setError("");
    setSuccess("");

    // Create user with email and password
    createUser(email, password)
      .then((res) => {
        const user = res.user;
        setSuccess("Created Account Successfully");
        toast("Created Account Successfully");

        // Send email verification to user
        sendEmailVerification(user);
      })
      .catch((error) => {
        setError(error.message);
        toast(error.message);
      });
  };

  return (
    <div className="hero bg-indigo-600 font-medium min-h-screen md:p-10 flex items-center justify-center">
      <form
        onSubmit={handleRegister}
        className="card-body w-full max-w-md mx-auto p-6 bg-white rounded-lg shadow-md"
      >
        <h3 className="text-3xl font-bold text-center mb-6">
          Please Register to Your Account
        </h3>
        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input
            type="text"
            name="photo"
            placeholder="Photo URL"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="Email"
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
            placeholder="Password"
            name="password"
            className="input input-bordered"
            required
          />
          <label className="label mt-2">
            <h3>
              Already Have An Account?{" "}
              <Link className="text-success font-bold" to="/login">
                Login Here
              </Link>
            </h3>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-active btn-secondary w-full">
            Register
          </button>
        </div>

        {success && <p className="text-blue-700 mt-2">{success}</p>}
        {error && <p className="text-red-700 mt-2">{error}</p>}
      </form>
      <ToastContainer />
    </div>
  );
};

export default Register;
