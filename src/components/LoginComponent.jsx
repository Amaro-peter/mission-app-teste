import React, { useState } from "react";
import { LoginAPI, GoogleSignInAPI } from "../api/AuthAPI";
import LinkedinLogo from "../assets/Mission.png";
import XLogo from "../assets/X.png"
import InstaLogo from "../assets/instagram.png";
import FaceLogo from "../assets/facebook.png";
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
                </div>
                <div className="login-wrapper-inner">
                    <button onClick={() => navigate("/registerSupporter")} className="donor-button">
                        Sou um Apoiador
                    </button>
                    <button onClick={() => navigate("/registerMissionary")} className="missionary-button">
                        Sou um Missionário
                    </button>
                    <button onClick={() => navigate("/registerSupporter")} className="social-project-button">
                        Tenho um projeto social
                    </button>
                </div>
                <hr className="hr-text-landing-page"/>
                <div className="page-footer">
                    <div className="links-page-footer">
                        <h1>Links úteis</h1>
                        <p>
                            <span className="text-link-page-footer" onClick={() => navigate('/home')}>
                                Quem somos
                            </span>
                        </p>
                        <p>
                            <a className = "text-link-page-footer-admin-btn" href="https://console.firebase.google.com/u/2/project/linkedin-clone-212cd/authentication/users?hl=pt-br&fb_utm_campaign=latam-BR-all-pt-dr-SKWS-all-all-trial-e-dr-1707800-LUAC0008679&fb_utm_content=text-ad-none-any-DEV_c-CRE_429626774316-ADGP_Hybrid%20%7C%20SKWS%20-%20EXA%20%7C%20Txt_Compute-Firebase-KWID_43700066431125567-kwd-312330826250&fb_utm_medium=cpc&fb_utm_source=google&fb_utm_term=KW_firebase-ST_Firebase" target="_blank">
                                Administrador
                            </a>
                        </p>
                        <p>
                            <span className="text-link-page-footer" onClick={() => navigate('/home')}>
                                Termos de uso
                            </span>
                        </p>
                        <p>
                            <span className="text-link-page-footer" onClick={() => navigate('/contato')}>
                                Contato
                            </span>
                        </p>
                        <p>
                            <span className="text-link-page-footer" onClick={() => navigate('/home')}>
                                Políticas de privacidade
                            </span>
                        </p>
                        <p>
                            <span className="text-link-page-footer" onClick={() => navigate('/home')}>
                                Critérios para escolha de missionários e projetos sociais
                            </span>
                        </p>
                    </div>
                    <div className="social-media-page-footer">
                        <h1>Redes sociais</h1>
                        <a href="https://x.com">
                        <img src= {XLogo} alt="Logo" className="x-logo"/>
                        </a>
                        <a href="https://instagram.com">
                        <img src= {InstaLogo} alt="Logo" className="insta-logo"/>
                        </a>
                        <a href="https://facebook.com">
                        <img src= {FaceLogo} alt="Logo" className="face-logo"/>
                        </a>
                    </div>    
                </div>
            </div>
        </body>        
    );
}