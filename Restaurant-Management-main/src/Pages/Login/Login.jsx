import toast from "react-hot-toast";
import { getToken } from "../../api/auth";
import CustomCursor from "../../Components/Shared/CustomCursor/CustomCursor"
import useAuth from "../../Hooks/useAuth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useState } from "react";
import { ImSpinner10 } from "react-icons/im";

const Login = () => {
  const {signIn, loading } = useAuth();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || '/';
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    
    try {
     
      // registration
      const result = await signIn(email, password);
      
      // get token
      await getToken(result?.user?.email);
      navigate(from,{replace:true});
      toast.success('Sign In Successful')


    } catch (err) {
      console.log(err);
      toast.error(err?.message)
    }
  }
  return (
    <>
    <CustomCursor />
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-md  p-8 rounded-lg shadow-lg ">
        <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-secondary to-tertiary text-transparent bg-clip-text">Sign In</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
         

          {/* Email Field */}
          <div className="relative">
            <label
              htmlFor="email"
              className="block bg-gradient-to-r from-secondary to-tertiary text-transparent bg-clip-text font-medium mb-2 after:content-['*'] after:ml-0.5 after:text-red-500"
            >
              Email address
            </label>
            <div className="relative w-full p-[2px] bg-gradient-to-r from-secondary to-tertiary rounded-md">
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-3 bg-white border-none rounded-md focus:outline-none  transition-colors duration-300"
                required
              />
            </div>
          </div>

          {/* Password Field with Icon */}
          <div className="relative">
            <label
              htmlFor="password"
              className="block bg-gradient-to-r from-secondary to-tertiary text-transparent bg-clip-text font-medium mb-2 after:content-['*'] after:ml-0.5 after:text-red-500"
            >
              Set A Password
            </label>
            <div className="relative w-full p-[2px] bg-gradient-to-r from-secondary to-tertiary rounded-md">
              <input
                type={passwordVisible ? 'text' : 'password'}
                id="password"
                name="password"
                className="w-full p-3 bg-white border-none rounded-md focus:outline-none  transition-colors duration-300"
                required
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-0 pr-3  flex items-center justify-center cursor-pointer bgt"
              >
                {passwordVisible ? <FaEyeSlash className="text-gray-300" /> : <FaEye className="text-gray-300" />}
              </button>
            </div>


          </div>

         

          {/* Submit Button */}
          <div className="text-center mt-5">
            <button
              type="submit"
              className=" w-full bg-gradient-to-r from-secondary to-tertiary bg-transparent px-4 py-2 rounded-md shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              {loading ? <ImSpinner10 className='animate-spin m-auto text-xl' /> : 'Sign In'}
            </button>
          </div>
                      {/* toggle signIn or sign up here */}
                      <div className="text-center mt-4 flex justify-between">
  
  <p className="text-sm text-tertiary font-semibold">
  Don't have an account? 
   
  </p>
 
 <Link to='/sign-up'>
 <p className="text-sm text-secondary font-semibold hover:underline">
 Create an Account
  </p>
 </Link>
</div>
        </form>
      </div>
    </div>
  </>
  )
}

export default Login