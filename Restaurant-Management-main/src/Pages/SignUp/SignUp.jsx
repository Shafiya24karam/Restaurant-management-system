import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import CustomCursor from '../../Components/Shared/CustomCursor/CustomCursor';
import { imageUpload } from '../../api/utils';
import useAuth from '../../Hooks/useAuth';
import { getToken, saveUser } from '../../api/auth';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { ImSpinner10 } from "react-icons/im";
const SignUp = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const { createUser, updateUserProfile,loading } = useAuth();
  const navigate = useNavigate()
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  const handleSubmit = async e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const image = form.image.files[0];
    console.log(name, email, password, image);
    try {
      const imageData = await imageUpload(image);
      console.log(imageData);
      // create user
      const result = await createUser(email, password);
      // update user name and photo
      await updateUserProfile(name, imageData?.data?.display_url)
      // save user user data in data base
      const dbResponse = await saveUser(result?.user)
      console.log(dbResponse);
      // get token
      await getToken(result?.user?.email);
      navigate('/');
      toast.success('Registration Successfully')
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <CustomCursor />
      <div className="min-h-screen flex items-center justify-center p-6">
        <div className="w-full max-w-md  p-8 rounded-lg shadow-lg ">
          <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-secondary to-tertiary text-transparent bg-clip-text">Create an Account</h2>
          {/* form */}
          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* Name Field */}
            <div className="relative">
              <label

                className="block bg-gradient-to-r from-secondary to-tertiary text-transparent bg-clip-text font-medium mb-2 after:content-['*'] after:ml-0.5 after:text-red-500"
              >
                Your Name
              </label>
              <div className="relative w-full p-[2px] bg-gradient-to-r from-secondary to-tertiary rounded-md">
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full p-3 bg-white border-none rounded-md focus:outline-none  transition-colors duration-300"
                  required
                />
              </div>
            </div>

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

            {/* Image Upload Field */}
            <div className="relative cursor-pointer">
              <label
                htmlFor="image"
                className="block bg-gradient-to-r from-secondary to-tertiary text-transparent bg-clip-text font-medium mb-2 after:content-['*'] after:ml-0.5 after:text-red-500 "
              >
                Select Image:
              </label>
              <input
                type="file"
                id="image"
                name='image'
                className="w-full bg-gradient-to-r from-secondary to-tertiary text-transparent bg-clip-text file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-secondary file:text-black hover:file:bg-tertiary transition-colors duration-300 bg-transparent"
              />
            </div>


            {/* Submit Button */}
            <div className="text-center mt-5">
              <button
                type="submit"
                className=" w-full bg-gradient-to-r from-secondary to-tertiary bg-transparent px-4 py-2 rounded-md shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                {loading ? <ImSpinner10 className='animate-spin m-auto text-xl' /> : 'Sign Up'}
              </button>
            </div>
            {/* toggle signIn or sign up here */}
            <div className="text-center mt-4 flex justify-between">
  
  <p className="text-sm text-tertiary font-semibold">
    Already have an account? 
   
  </p>
  
 <Link to='/Login'>
 <p className="text-sm text-secondary font-semibold hover:underline">
   Login Here
   
  </p>
 </Link>
</div>
          </form>
        </div>
      </div>
    </>
  );

}

export default SignUp;
