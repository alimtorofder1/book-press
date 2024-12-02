import { useContext, useState } from 'react';
import loginimg from '../../assets/3094352.jpg'
import { IoLogoGithub, IoMdEye, IoMdEyeOff } from "react-icons/io";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../../Providers/AuthProvider';

const Login = () => {
  const {signIn} = useContext(AuthContext)

  const location =useLocation();
  const naviget =useNavigate();

  const handleLogin = e =>{
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name , email , password)

    signIn(email , password)
    .then(result =>{
      const user = result.user;
      console.log(user)
      naviget(location?.state ? location?.state : '/')
    })
    .then(error =>{console.log(error)})
  }


    const [ShowPassword , SetShowPassword] = useState(false)
    return (
        <div className="hero  min-h-screen">
  <div className="hero-content flex-col lg:flex-row">
    <div className=" w-1/2 ">
      <img className='size-5/6 -ml-12' src={loginimg} alt="" />
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
        <h1 className="text-5xl font-bold text-center mb-7">Login !</h1>
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name='email' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type={ShowPassword ? 'text' : "password"} placeholder="password" name="password" className="input input-bordered" required />
          <span className="mx-72 -my-8 mb-6" onClick={()=>SetShowPassword (!ShowPassword)}>
            {
              ShowPassword ? <IoMdEye></IoMdEye> : <IoMdEyeOff></IoMdEyeOff>
            }</span>

        </div>
        <div className="form-control mt-6">
          <button className="btn btn-accent">Login</button>
        </div>
      </form>
      <div className="flex gap-4 mx-auto ">
        <Link><FcGoogle size={30}></FcGoogle></Link>
        <Link><IoLogoGithub size={30}></IoLogoGithub></Link>
        </div>
        <p className='text-center my-10'>Don't have an account? <Link to={'/register'}><span className='text-accent font-bold'>Register</span></Link></p>
    </div>
  </div>
</div>
    );
};

export default Login;