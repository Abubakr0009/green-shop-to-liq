import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { Chrome, Eye, EyeOff } from 'lucide-react';
import { signInWithGoogle } from '../../../../firebase';

function Login({ setIsModalOpen, setIsLogged }) {
  const api = import.meta.env.VITE_API;
  const token = import.meta.env.VITE_PUBLIC_ACCESS_TOKEN;
  const [user, setUser] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSetValue = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
  };

  const handleLoginCheck = async (e) => {
    e.preventDefault();
    let newErrors = {};

    if (!user.email.trim()) newErrors.email = 'Please enter your email';
    if (!user.password.trim()) newErrors.password = 'Please enter your password';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsLoading(true);
    try {
      const response = await axios.post(`${api}user/sign-in?access_token=${token}`, user);
      localStorage.setItem('user', JSON.stringify(response?.data?.data));
      localStorage.setItem('wishlist', JSON.stringify(response?.data?.data?.user?.wishlist));
      setUser({ email: '', password: '' });
      setIsLogged(true);
      setIsModalOpen(false);
      setErrors({});
      toast.success(`You successfully logged in as ${response?.data?.data?.user?.name}`);
      navigate('/');
    } catch (err) {
      setErrors({ apiError: err?.response?.data?.extraMessage || 'Login failed.' });
      toast.error(`Login failed. Please make sure you entered the correct email and password.`);
    } finally {
      setIsLoading(false);
    }
  };

  const signInWithGoogleFc = async () => {
    try {
      const result = await signInWithGoogle();
      const userData = { email: result.user.email };
      
      // Google bilan tizimga kirgandan so‘ng APIga yuborish
      const response = await axios.post(`${api}/user/sign-in/google?access_token=${token}`, userData);
      localStorage.setItem('user', JSON.stringify(response?.data?.data));
      localStorage.setItem('wishlist', JSON.stringify(response?.data?.data?.user?.wishlist));
      setIsLogged(true);
      setIsModalOpen(false);
      toast.success(`You successfully logged in as ${response?.data?.data?.user?.name}`);
      navigate('/');
    } catch (error) {
      toast.error('Google login failed, please try again.');
      console.error('Error during Google login:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleLoginCheck} className='px-10'>
        <p className='font-medium text-gray-600 mb-4'>Enter your email and password to login.</p>

        <div className='relative mb-4'>
          <input
            type='email'
            className={`w-full border rounded p-2 outline-none ${errors.email ? 'border-red-500' : 'border-green-500'}`}
            id='email'
            name='email'
            placeholder='Enter your email address'
            value={user.email}
            onChange={handleSetValue}
          />
          {errors.email && <span className='text-red-500 text-xs'>{errors.email}</span>}
        </div>

        <div className='relative mb-4'>
          <input
            type={showPassword ? 'text' : 'password'}
            className={`w-full border rounded p-2 outline-none ${errors.password ? 'border-red-500' : 'border-green-500'}`}
            id='password'
            name='password'
            placeholder='Enter your password'
            value={user.password}
            onChange={handleSetValue}
          />
          <button
            type='button'
            className='absolute right-2 top-2 text-gray-600'
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
          {errors.password && <span className='text-red-500 text-xs'>{errors.password}</span>}
        </div>

        {errors.apiError && <p className='text-red-500 text-sm mt-2'>{errors.apiError}</p>}

        <button
          type='submit'
          className='w-full bg-[#46A358] text-lg font-semibold text-white rounded p-2 mt-3 hover:bg-[#3b8b4a] transition-all'
          disabled={isLoading}
        >
          {isLoading ? 'Logging in...' : 'Login'}
        </button>

        <div className='mt-4'>
          <button
            type='button'
            onClick={signInWithGoogleFc}
            className='flex items-center justify-center gap-2 w-full border border-gray-300 rounded p-2 text-gray-700 hover:bg-gray-100 transition-all'
          >
            <Chrome size={20} /> Login with Google
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;






















// import axios from 'axios';
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { toast } from 'sonner';
// import { Chrome, Eye, EyeOff } from 'lucide-react';
// import { signInWithGoogle } from '../../../../firebase';




// function Login({ setIsModalOpen, setIsLogged }) {

//   const api = import.meta.env.VITE_API;
//   const token = import.meta.env.VITE_PUBLIC_ACCESS_TOKEN;
//   const [user, setUser] = useState({ email: '', password: '' });
//   const [errors, setErrors] = useState({});
//   const [isLoading, setIsLoading] = useState(false);
//   const [showPassword, setShowPassword] = useState(false);
//   const navigate = useNavigate();

//   const handleSetValue = (e) => {
//     const { name, value } = e.target;
//     setUser((prevUser) => ({ ...prevUser, [name]: value }));
//     setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
//   };

//   const handleLoginCheck = async (e) => {
//     e.preventDefault();
//     let newErrors = {};

//     if (!user.email.trim()) newErrors.email = 'Please enter your email';
//     if (!user.password.trim()) newErrors.password = 'Please enter your password';

//     if (Object.keys(newErrors).length > 0) {
//       setErrors(newErrors);
//       return;
//     }
//     setIsLoading(true);
//     try {
//       const response = await axios.post(`${api}user/sign-in?access_token=${token}`, user);
//       localStorage.setItem('user', JSON.stringify(response?.data?.data));
//       localStorage.setItem('wishlist', JSON.stringify(response?.data?.data?.user?.wishlist));
//       setUser({ email: '', password: '' });
//       setIsLogged(true);
//       setIsModalOpen(false);
//       setErrors({});
//       setIsLoading(false);
//       toast.success(`You Successfully logged in as ${response?.data?.data?.user?.name}`);
//       navigate('/');
//     } catch (err) {
//       setErrors({ apiError: err?.response?.data?.extraMessage || 'Login failed. ' });
//       toast.error(`Failed on login, please make sure you have entered the correct email and password`);
//     }
//   };


//   const signInWithGoogleFc = async () => {
//     const result = await signInWithGoogle();
//     let data = await axios.post(`${api}/user/sign-in/google?access_token=${token}`,
//       { email: result.user.email }
//     );
//     console.log(data);
// console.log(`${api}/user/sign-in/google?access_token=${token}`);

//   };


//   return (
//     <div>
//       <form onSubmit={handleLoginCheck} className='px-10'>
//         <p className='font-medium text-gray-600 mb-4'>Enter your email and password to login.</p>

//         <div className='relative mb-4'>
//           <input
//             type='email'
//             className={`w-full border rounded p-2 outline-none ${errors.email ? 'border-red-500' : 'border-green-500'}`}
//             id='email'
//             name='email'
//             placeholder='Enter your email address'
//             value={user.email}
//             onChange={handleSetValue}
//           />
//           {errors.email && <span className='text-red-500 text-xs'>{errors.email}</span>}
//         </div>

//         <div className='relative mb-4'>
//           <input
//             type={showPassword ? 'text' : 'password'}
//             className={`w-full border rounded p-2 outline-none ${errors.password ? 'border-red-500' : 'border-green-500'}`}
//             id='password'
//             name='password'
//             placeholder='Enter your password'
//             value={user.password}
//             onChange={handleSetValue}
//           />
//           <button
//             type='button'
//             className='absolute right-2 top-2 text-gray-600'
//             onClick={() => setShowPassword(!showPassword)}
//           >
//             {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
//           </button>
//           {errors.password && <span className='text-red-500 text-xs'>{errors.password}</span>}
//         </div>

//         {errors.apiError && <p className='text-red-500 text-sm mt-2'>{errors.apiError}</p>}

//         <button
//           type='submit'
//           className='w-full bg-[#46A358] text-lg font-semibold text-white rounded p-2 mt-3 hover:bg-[#3b8b4a] transition-all'
//         >
//           Login
//         </button>

//         <div className=' mt-4'>
//           <button onClick={signInWithGoogleFc} className='flex items-center justify-center gap-2 w-full border border-gray-300 rounded p-2 text-gray-700 hover:bg-gray-100 transition-all'>
//             <Chrome size={20} /> Login with Google
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default Login;