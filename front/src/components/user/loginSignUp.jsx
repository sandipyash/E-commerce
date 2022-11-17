import React,{useRef,useState} from 'react'
import './loginSignUp.css'
import Loader from '../layout/loader/Loader'
import { Link } from 'react-router-dom'
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import FaceIcon from "@material-ui/icons/Face";

const LoginSignUp = () => {

    const loginTab=useRef(null);
    const registerTab=useRef(null);
    const switcherTab=useRef(null);

    const [loginEmail,setLoginEmail] = useState("");
    const [loginPassword,setLoginPassword] = useState("");

    const [user,setUser]=useState({
        name:"",
        email:"",
        password:"",
    });

    const {name,email,password}=user;

    const loginSubmit = () => {
        console.log("Form Submitted");
    }

    const registerSubmit = (e) => {
       e.preventDefault();

       const myForm = new FormData();
       myForm.set("name",name);
       myForm.set("email",email);
       myForm.set("password",password);
       console.log("Registration Form Submitted")
    }

    const registerDataChange = (e) => {
        setUser({...user,[e.target.name]: e.target.value});
    }

    const switchTabs = (e,tab) => {
        if(tab == "login") {
            switcherTab.current.classList.add("shiftToNeutral");
            switcherTab.current.classList.remove("shiftToRight");

            registerTab.current.classList.remove("shiftToNeutralForm");
            loginTab.current.classList.remove("shiftToLeft");
        }

        if(tab == "register") {
            switcherTab.current.classList.add("shiftToRight");
            switcherTab.current.classList.remove("shiftToNeutral");

            registerTab.current.classList.remove("shiftToNeutralForm");
            loginTab.current.classList.remove("shiftToLeft");
        }
    }

  return (
    <>
        <div className='LoginSignUpContainer'>

        <div className='LoginSignUpBox'>
        <div>
            <div className='login_signUp_toggle'>
                <p onClick={(e) => switchTabs(e,"login")}>LOGIN</p>
                <p onClick={(e) => switchTabs(e,"register")}>REGISTER</p>
            </div>
              <button ref={switcherTab}></button>
        </div>
             <form className='loginForm' ref={loginTab} onSubmit={loginSubmit}>
                <div className='loginEmail'>
                    <MailOutlineIcon/>
                    <input
                        type="email"
                        placeholder="Email"
                        required
                        value={loginEmail}
                        onChange={(e) => setLoginEmail(e.target.value)}
                    />
                </div>

                <div className='loginPassword'>
                <LockOpenIcon/>
                <input 
                    type="password"
                    placeholder="Password"
                    required
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                />
                </div>
                <Link to="/password/forget">Forget Password ?</Link>
                <input type="submit" value="login" className='loginBtn' />
             </form> 

             <form className='signUpForm' ref={registerTab} encType="multipart/form-data"
             onSubmit={registerSubmit}>
                    <div className='signUpName'>
                        <FaceIcon/>
                        <input 
                        type="text"
                        placeholder='Name'
                        required
                        name="name"
                        value={name}
                        onChange={registerDataChange}/>
                    </div>
                    
                    <div className='SignUpEmail'>
                        <MailOutlineIcon/>
                        <input
                        type="email"
                        placeholder="Email"
                        required
                        name='email'
                        value={email}
                        onChange={registerDataChange}/>
                    </div>

                    <div className='signUpPassword'>
                        <LockOpenIcon/>
                        <input
                        type="password"
                        placeholder="Password"
                        required
                        name="password"
                        value={password}
                        onChange={registerDataChange}/>
                    </div>

                    <input
                    type="submit"
                    value="Register"
                    className="signUpBtn"/>
             </form>
        </div>
        </div>
        
    </>
  )
}

export default LoginSignUp