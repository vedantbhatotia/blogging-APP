import { ChangeEvent, useState } from "react";
import axios from "axios";
import { Link, Navigate, useNavigate } from "react-router-dom";
import "../App.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const backend_url = "https://backend.vedantbhatotia.workers.dev";

interface AuthProps {
    type: string;
}

function Auth({ type }: AuthProps) {
    const navigate = useNavigate();
    const [email, setEmail] = useState<string>("");
    const [name, setName] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);

    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    async function SendRequest() {
        try {
            setLoading(true);
            const response = await axios.post(`${backend_url}/api/v1/user/${type === "signup" ? "signup" : "signin"}`, {
                name: name,
                email: email,
                password: password
            });
            console.log(response);
            const jwt = response.data;
            if(jwt == "user not found sign up "){
                toast.error('USER NOT FOUND', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    // transition: Bounce,
                    });
                navigate("/signin")
                // console.log(response);
            }else{
                localStorage.setItem("token", jwt);
                navigate('/blogs');
            }
        } catch (err) {
            console.log("error making the request");
        } finally {
            setLoading(false);
        }
    }

    return (
        <>
        <div className="h-screen flex justify-center items-center relative">
            {loading && (
                <div className="loader-container absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="loader"></div>
                </div>
            )}
            <div className="flex justify-center">
                <div>
                    <div className="px-10">
                        <div className="text-3xl font-extrabold">
                            Create an account
                        </div>
                        <div className="text-slate-500">
                            {type === "signin" ? "Don't have an account?" : "Already have an account?"}
                            <Link className="pl-2 underline" to={type === "signin" ? "/signup" : "/signin"}>
                                {type === "signin" ? "Sign up" : "Sign in"}
                            </Link>
                        </div>
                    </div>
                    <div className="pt-8">
                        <LabelledInput label="Name" type="text" placeholder="Vedant Bhatotia..." onChange={handleNameChange} />
                        <LabelledInput label="Email" type="text" placeholder="vedant@gmail.com" onChange={handleEmailChange} />
                        <LabelledInput label="Password" type="password" placeholder="123456" onChange={handlePasswordChange} />
                        <button onClick={SendRequest} type="button" className="mt-8 w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">{type === "signup" ? "Sign up" : "Sign in"}</button>
                    </div>
                </div>
            </div>
        </div>
        {/* <ToastContainer />
         */}
          <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
                // transition: Bounce,
            />
        </>
    );
}

interface LabelledInputType {
    label: string;
    placeholder: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    type: string;
}

function LabelledInput({ label, placeholder, onChange, type }: LabelledInputType) {
    return (
        <div>
            <label className="block mb-2 text-sm text-black font-semibold pt-4">{label}</label>
            <input onChange={onChange} type={type} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder={placeholder} required />
        </div>
    );
}

export default Auth;
