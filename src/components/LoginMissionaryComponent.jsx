import React, { useState } from "react";
import { RegisterAPI, GoogleSignInAPI } from "../api/AuthAPI";
import LinkedinLogo from "../assets/Mission.png";
import GoogleButton from 'react-google-button';
import { useNavigate } from "react-router-dom";
import '../Sass/RegisterSupporterComponent.scss';
import { toast } from "react-toastify";

export default function RegisterComponent() {
    let navigate = useNavigate();
    const [credentials, setCredentials] = useState({});
    const login = async () => {
        try{
            let res = await RegisterAPI(credentials.email, credentials.password);
            toast.success("Account Created !");
            navigate("/home");
        } catch(err) {
            toast.error("Cannot Create your Account");
        }
    };

    const googleSignIn = () => {
        let response = GoogleSignInAPI();
        navigate("/home");
    };
    return( 
    <div className = "login-wrapper">
        <img src ={LinkedinLogo} className="linkedinLogo"/>
        <div className="login-wrapper-inner">
            <h1 className="heading">Login Missionário</h1>
            <div className="auth-inputs">
                <input
                    onChange={(event) =>
                        setCredentials({ ...credentials, email: event.target.value})
                    }
                    type="email"
                    className = "common-input"
                    placeholder = "Email ou Número de telefone"
                />
                <input 
                    onChange= {(event) =>
                        setCredentials({...credentials, password: event.target.value})
                    }
                    type="password"
                    className="common-input"
                    placeholder= "Senha"
                />
            </div>
            <button onClick={login} className="loginBtn">
                Entrar
            </button>
        </div>
        <hr className="hr-text" data-content="or"/>
        <div className="google-btn-container">
            <GoogleButton
                className="google-btn"
                onClick={googleSignIn}
            />
            <p className="go-to-signup">
               Já possui cadastro?{" "}
                <span className="join-now" onClick={() => navigate('/')}>
                    Login
                </span>
            </p>
            <p className="go-to-signup">
               Missionário ou Projeto Social?{" "}
                <span className="join-now" onClick={() => navigate('/')}>
                    Início
                </span>
            </p>
        </div>
    </div>
    );
}