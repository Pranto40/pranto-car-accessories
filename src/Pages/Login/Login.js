import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';
import Loading from '../Shared/Loading';

const Login = () => {
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    // const [datileUser, datileUserLoading] = useAuthState(auth);

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    // const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);

    const onSubmit = data => {
        console.log(data)
        signInWithEmailAndPassword(data.email, data.password)
    };

    if (user || googleUser) {
        navigate(from, { replace: true });
    }

    let loginError;
    if (error || googleError) {
        loginError= <span className='text-red-500 block mb-2'>{error?.message || googleError?.message}</span>
    }
    
    if (loading || googleLoading) {
        return <Loading />
    }

    const handlePasswordReset = async () => {
        // if (!datileUser.email) {
        //     await sendPasswordResetEmail(datileUser.email);
        //     toast('Email Sent')
        // }
    }
    
    return (
        <div className='flex justify-center items-center h-screen'>
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="text-center text-2xl font-bold">Login</h2>

                <form onSubmit={handleSubmit(onSubmit)}>
                    
                  <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input 
                    type="email" 
                    placeholder="Your Email"
                    className="input input-bordered w-full max-w-xs" 
                    {...register("email", {
                        required: {
                            value: true,
                            message: "Email is Required"
                        },
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: 'Provide a valid Email'
                        }
                      })}
                    />
                    <label className="label">
                    {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                    {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                    </label>
                    </div>
                  <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input 
                    type="password" 
                    placeholder="password" 
                    className="input input-bordered w-full max-w-xs" 
                    {...register("password", {
                        required: {
                            value: true,
                            message: "Password is Required"
                        },
                        minLength: {
                          value: 6,
                          message: 'must be 6 characters or longer'
                        }
                      })}
                    />
                    <label className="label">
                    {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                    {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                    </label>
                    </div>
                    <button onClick={handlePasswordReset} className="btn btn-link lowercase">forget password</button>
                    {loginError}
                    <input className='btn w-full text-white' value="Login" type="submit" />
                </form>
                    <p>New to Doctors Portal <Link className='text-primary' to="/signup">Creacte New Account</Link></p>
                <div className='divider'>OR</div>
                <button onClick={() => signInWithGoogle()} className='btn btn-outline'>Contiue With Google</button>
            </div>
        </div>
        </div>
    );
};

export default Login;