import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import { sendEmailVerification } from 'firebase/auth';

const Register = () => {
  const { createUser, setSuccess, success, error, setError } =
    useContext(AuthContext);

  const handleRegister = e => {
    e.preventDefault();
    const data = new FormData(e.target);
    console.log(data);
    const email = data.get('email');
    const name = data.get('name');
    const password = data.get('password');
    const photo = data.get('photo');

    console.log(name, email, password, photo);

    // clean error and success data from ui

    setError('');
    setSuccess('');

    // create user with email and password
    createUser(email, password)
      .then(res => {
        console.log(res.user);
        const user = res.user;
        if (res.user === res.user) {
          setSuccess('Created Account Successfully');
          toast('Created Account Successfully');
        }

        // send email verification to user
        sendEmailVerification(user);
      })
      .catch(error => {
        console.log(error);
        setError(error.message);
        toast(error.message);
      });
  };

  const style = {
    backgroundColor: 'indigo',
  };

  return (
    <div style={style} className="hero font-medium">
      <form
        onSubmit={handleRegister}
        className="card-body md:w-1/2 text-cyan-600 my-24"
      >
        <h3 className="text-3xl font-bold">
          Please Register to Your Account....
        </h3>
        <div className="form-control">
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
        <div className="form-control">
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
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            placeholder="password"
            name="password"
            className="input input-bordered"
            required
          />
          <label className="label">
            <h3>
              Already Have An Account?{' '}
              <Link className="text-success font-bold" to="/login">
                Login Here
              </Link>
            </h3>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-active btn-secondary">Register</button>
        </div>

        {<p className="text-blue-700">{success}</p>}
        {<p className="text-red-700">{error}</p>}
      </form>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Register;
