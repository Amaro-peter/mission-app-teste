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
            toast.success("Signed In to Mission!");
            navigate("/home");
            localStorage.setItem(res);
        } catch(err) {
            toast.error("Please Check your Credentials.");
            toast.error("If it is your first time in the platform, Click Sign up now !");
        }
    };

    const googleSignIn = () => {
        let response = GoogleSignInAPI();
        console.log(response);
        navigate("/home");
    };
    return( 
        <body>
            <div className="login-wrapper">
                <div className="container-top-landing-page">
                    <img src={LinkedinLogo} className="linkedinLogo" />
                    <button onClick={() => navigate("/register")} className="admin-btn">
                        Administrador
                    </button>
                </div>
                <div className="login-wrapper-inner">
                    <button onClick={() => navigate("/register")} className="donor-button">
                        Sou um Apoiador
                    </button>
                    <button onClick={() => navigate("/register")} className="missionary-button">
                        Sou um Missionário
                    </button>
                    <button onClick={() => navigate("/register")} className="social-project-button">
                        Tenho um projeto social
                    </button>
                </div>
                <div className="page-footer">
                        
                </div>    
            </div>
        </body>        
    );
}