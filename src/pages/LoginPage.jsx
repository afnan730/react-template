import image from '../assets/shopping.jpg';
import React from "react";
const LoginPage = ()=>{
    return(
        <div className="login-container">
            <div className="login-left">
                <div className="login-overlay">
                    <img 
                    
                        src={image} 
                        alt="Background" 
                        className="login-background"
                    />
                </div>
            </div>
            <div className="login-right">
                <h1>Welcome</h1>
                <p>Log in to your account to continue</p>
                <form className="login-form">
                    <div className="form-group">
                        <input 
                            type="email" 
                            placeholder="awesome@user.com" 
                            className="input-field"
                        />
                    </div>
                    <div className="form-group">
                        <input 
                            type="password" 
                            placeholder="Password" 
                            className="input-field"
                        />
                        <a href="/forgot-password" className="forgot-password">
                            Forgot your password?
                        </a>
                    </div>
                    <button type="submit" className="btn btn-login">Log In</button>
                </form>
                <p className="signup-text">
                    Don’t have an account? <a href="/sign-up">Sign up!</a>
                </p>
                
            </div>
        </div>
    );
}


export default LoginPage;