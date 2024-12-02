import { useContext, useState } from 'react';
import loginimg from '../../assets/3094352.jpg'
import { IoMdEye, IoMdEyeOff ,IoLogoGoogle, IoLogoFacebook } from "react-icons/io";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import { FcGoogle } from 'react-icons/fc';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
     
  const {createUser} = useContext(AuthContext)

    const handleRegister = e =>{
      e.preventDefault();
      const form = e.target;
      const name = form.name.value;
      const email = form.email.value;
      const password = form.password.value;
      const photo = form.photo.value;
      console.log(name , email , password , photo)

      createUser(email , password)
      .then(result =>{
        const user = result.user;
        console.log(user)
      })
      .then(error =>console.error(error))
    }

    const [ShowPassword , SetShowPassword] = useState(false)
    return (
        <div className="hero  min-h-screen">
  <div className="hero-content flex-col lg:flex-row">
    <div className=" w-1/2 ">
      <img className='size-5/6 -ml-12' src={loginimg} alt="" />
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleRegister} className="card-body">
        <div className="form-control">
        <h1 className="text-5xl font-bold text-center mb-7">Register !</h1>
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="name" name='name' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input type="text" placeholder="url" name='photo' className="input input-bordered" required />
        </div>
        <div className="form-control">
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
          <button className="btn btn-accent">Register</button>
        </div>
       
      </form>
      <SocialLogin></SocialLogin>
      <p className='text-center my-3 mb-10'>Alredy have an account <Link to={'/login'}><span className='text-accent font-bold'>Login</span></Link></p>
    </div>
  </div>
</div>
    );
};

export default Register;