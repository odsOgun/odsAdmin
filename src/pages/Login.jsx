import React, {useState} from 'react'
import odsLogo from '../assets/ods-logo.png'
import banner from '../assets/banner.png'
import Footer from '../components/Footer'
import loader from '../assets/load.gif'
import { useFormik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router";
import { useAuth } from '../context/AuthContext';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const initialValues = {
    email: "",
    password: "",
  };

const Login = () => {
    const { login } = useAuth();
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);

    // const handleLogin = () => {
    //     login();
    //     navigate("/sponsors"); // Redirect after login
    //   };

    const schema = yup.object({
        email: yup
          .string()
          .email("Please enter a valid email")
          .required("Email is required"),
        password: yup.string().required("Password is required").min(3),
      });

      const onSubmit = async (values, actions) => {
        try {       
          setLoading(true);
          await login(values)
          toast.success('Login successful')
          setTimeout(()=> {
            navigate("/sponsors")
          }, 2000)
        } catch (error) {
          toast.error('Login failed')
          // console.log(error);  
        } finally {
          setLoading(false)
        }
        // loginAction(values)
        //   .then((res) => {
        //     console.log(res);
        //     if (res) {
        //       setLoader(false);
        //       setUser(res.data.data.data.user);
        //       toast.success(res.data.data.data.message);
        //       Cookies.set(
        //         "user_details",
        //         JSON.stringify({
        //           name: res.data.data.data.user.firstName,
        //         })
        //       );
        //     }
        //   })
        //   .catch((err) => {
        //     setLoader(false);
        //     console.log(err);
        //     toast.error(err.response?.data?.message);
        //   });
        // actions.resetForm()
      };

      const {
        values,
        handleSubmit,
        handleChange,
        handleBlur,
        isSubmitting,
        errors,
        touched,
      } = useFormik({
        initialValues,
        validationSchema: schema,
        onSubmit,
      });
  return (
    <div>
        <ToastContainer closeButton={false} />
        <div className="flex justify-center items-center h-screen">
            <div className='w-[717px] max-w-[100%] rounded-[24px] border-[1px] border-[#EAEAEA] bg-[#fff] rounded-[24px] p-[80px]'>
                <img src={odsLogo} alt='' className='block mx-auto'/>
                <h1 className='font-[600] text-[28px] text-[#000000] text-center leading-[38.53px] tracking-[-2%] pt-[24px] pb-[16px]'>Log in to your account</h1>
                <p className='font-[400] text-[14px] text-center text-[#70707B] tracking-[0%] leading-[21px] mb-[40px]'>Enter your email address and password to continue.</p>
                <form onSubmit={handleSubmit}>
                    <div className='mb-[24px]'>
                        <label className={`font-[400] text-[14px] ${errors.email && touched.email?'text-[#fc8181]':'text-[#1D1E2C]'} leading-[19.26px] tracking-[0%] block mb-[12px]`} htmlFor='email'>{errors.email&&touched.email?`${errors.email}`:'Email Address'}</label>
                        <input 
                            type='email' 
                            name='email' id='email' 
                            placeholder='johndoe@gmail.com' 
                            className='border-[1px] border-[#D9DCE1] rounded-[5px] w-full h-[46px] px-[12px] py-[13.5px] outline-0'
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </div>
                    <div className=''>
                        <div className='mb-[12px] flex justify-between'>
                            <label className={`font-[400] text-[14px] ${errors.password&&touched.password?'text-[#fc8181]':'text-[#1D1E2C]'} leading-[19.26px] tracking-[0%] block`} htmlFor='password'>{errors.password&&touched.password?errors.password:'Password'}</label>
                            {/* <p className='font-[400] text-[14px] text-[#178A2D] leading-[19.26px] tracking-[0%]'>Forgot Password?</p> */}
                        </div>
                        <input 
                            type='password' 
                            name='password' 
                            id='password' 
                            placeholder='Enter password' 
                            className='border-[1px] border-[#D9DCE1] rounded-[5px] w-full h-[46px] px-[12px] py-[13.5px] outline-0'
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}/>
                    </div>
                    <button type='submit' className='w-[228px] h-[40px] bg-[#178A2D] text-[14px] leading-[20px] tracking-[0.2px] text-[#fff] rounded-[4px] px-[12px] py-[10px] block mx-auto mt-[40px] cursor-pointer'>{loading?<img src={loader} alt='loading gif' className='block mx-auto w-[20px] h-[20px]'/>:'Log In'}</button>
                </form>
            </div>
        </div>
        <div className=''>
            <img src={banner} alt='banner logo' className='object-cover w-full'/>
        </div>
        <Footer />
    </div>
  )
}

export default Login