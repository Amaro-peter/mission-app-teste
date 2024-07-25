import React, { useState } from "react";
import { LoginAPI, GoogleSignInAPI } from "../api/AuthAPI";
import LinkedinLogo from "../assets/Mission.png";
import GoogleButton from 'react-google-button';
import { useNavigate } from "react-router-dom";
import '../Sass/LoginComponent.scss';
import { toast } from "react-toastify";

export default function LoginComponent() {
    let navigate = useNavigate();
    const [credentials, setCredentials] = useState({});
    const login = async () => {
        try{
            let res = await LoginAPI(credentials.email, credentials.password);
            toast.success("Signed In to Linkedin!");
            navigate("/home");
        } catch(err) {
            toast.error("Please Check your Credentials.");
            toast.error("If it is your first time in the platform, Click Join now !");
        }
    };

    const googleSignIn = () => {
        let response = GoogleSignInAPI();
        console.log(response);
        navigate("/home");
    };
    return( 
        <div className="login-wrapper">
            <div className="container-top-landing-page">
                <img src={LinkedinLogo} className="linkedinLogo" />
                <button onClick={() => navigate("/register")} className="admin-btn">
                    Administrador
                </button>
            </div>
            <div className="login-wrapper-inner">
                <div className="sign-container">
                    <div className="missionary-sign-container">
                        <h1 className="heading">Sou um missionário</h1>
                        <button onClick={() => navigate("/register")} className="signUp-btn">
                            Cadastrar
                        </button>
                        <button onClick={login} class className="signIn-btn">
                            Login
                        </button>
                    </div>
                    <div className="member-sign-container">
                        <h1 className="heading">Sou um apoiador</h1>
                        <button onClick={() => navigate("/register")} className="signUp-btn">
                            Cadastrar
                        </button>
                        <button onClick={login} class className="signIn-btn">
                            Login
                        </button>   
                    </div>
                </div>        
            </div>
        </div>    
    );
}