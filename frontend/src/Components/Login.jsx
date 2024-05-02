import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"
import axios from "axios"
import toast from 'react-hot-toast'

const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    
      const onSubmit = async(data) => {
        const userInfo={
            email:data.email,
            password:data.password
      }
      await axios.post("http://localhost:4001/user/login",userInfo)
       .then((res)=>{
          console.log(res.data)
          if(res.data){
            toast.success("Loggedin Successfully");
            document.getElementById("my_modal_3").close();
            setTimeout(()=>{
                  
                  window.location.reload();
                  localStorage.setItem("Users",JSON.stringify(res.data.user));
            },1000)          
          }
       })
       .catch((err)=>{
        if(err.response){
          console.log(err); 
          toast.error("Error" + err.response.data.massage);
          setTimeout(()=>{

          },2000)
        }
       })
      };
    
    return (
        <div className='dark:bg-slate-900 dark:text-white'>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box dark:bg-slate-900 dark:text-white">
                    <form onSubmit={handleSubmit(onSubmit)} method="dialog" >
                        {/* if there is a button in form, it will close the modal */}
                        <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                        onClick={()=> document.getElementById("my_modal_3").close()}>✕</Link>
                   
                    <h3 className="font-bold text-lg dark:text-white">Login</h3>
                    <div className='mt-4 space-y-2'>
                        <span className='dark:text-white'>Email</span>
                        <br/>
                        <input {...register("email", { required: true })} 
                        type='email'placeholder='Enter your Email' className='w-80 px-3 py-2 border rounded-md outline-none dark:bg-slate-600 dark:text-white'/><br/>
                         {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
                    </div>
                    <div className='mt-4 space-y-2'>
                        <span className='dark:text-white'>Password</span>
                        <br/>
                        <input type='text'placeholder='Enter your Password' className='w-80 px-3 py-2 border rounded-md outline-none dark:bg-slate-600 dark:text-white'
                        {...register("password", { required: true })}/><br/>
                         {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
                    </div>
                    {/*Button*/}
                    <div className='flex justify-around mt-4'>
                        <button type='submit' className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>Login</button>
                        <p>Not registered? <Link to='/signup' className='underline text-blue-500 cursor-pointer'>Signup</Link></p>
                    </div>
                    </form>
                </div>
            </dialog>
        </div>
    )
}

export default Login