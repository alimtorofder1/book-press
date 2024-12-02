
import { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../../Providers/AuthProvider';
import useAuth from '../../hooks/useAuth';

const SocialLogin = () => {
    const { googlegnIn }=useAuth();
    const auth = useContext(AuthContext)

    const handleGooglegnIn = ()=>{
        googlegnIn()
        .then(result =>{
            console.log(result.user)
        })
    }


    return (
        <div>
        <div onClick={handleGooglegnIn} className="flex gap-4 mx-auto ">
      <button><FcGoogle size={30}></FcGoogle></button>
        </div>
        </div>
    );
};

export default SocialLogin;