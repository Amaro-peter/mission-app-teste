import React, { useState } from "react";
import { RegisterAPI, GoogleSignInAPI } from "../api/AuthAPI";
import MissionLogo from "../assets/Mission.png";
import GoogleButton from 'react-google-button';
import { useNavigate } from "react-router-dom";
import '../Sass/RegisterMissionaryComponent.scss';
import { toast } from "react-toastify";

export default function RegisterMissionaryComponent() {
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

    const handleClick = () => {
        window.window.open('https://docs.google.com/forms/d/e/1FAIpQLSc7jX1orcS1fXn2kJh29qkr4TwofY6Mcb62OuWVJ__lS-QD8A/viewform?usp=sf_link', '_blank');
    };    

    return( 
    <div className = "login-wrapper-missionary">
        <div className="container-top-missionary">
            <img src={MissionLogo} className="MissionLogo" /> 
        </div>
        <div className="login-wrapper-inner-missionary">
            <h1 className="heading-missionary-forms">
                Clique no botão abaixo para o formulário   
            </h1> 
            <div className="container-missionary-btn">
                <button className="missionary-application-form-btn" onClick={handleClick}>
                    Formulário de aplicação
                </button>
            </div>
            <h1 className="heading-missionary-forms">
                Cadastro aprovado?    
            </h1>
            <div className="container-missionary-btn">
                <button className="missionary-application-form-btn" onClick={() => navigate("/LoginMissionary")}>
                    Login Missionário
                </button>
            </div>
            <div className="back-landing-page">
                <h1 className="heading-missionary-forms">
                    Apoiador ou Projeto social?   
                </h1>
                <button className="missionary-landing-btn" onClick={() => navigate("/")}>
                        Início
                </button>
            </div>   
        </div>
    </div>
    );
}