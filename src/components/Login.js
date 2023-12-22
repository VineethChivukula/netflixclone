import { Link, useNavigate, useLocation } from "react-router-dom";
import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
} from "firebase/auth";
import { firebaseConfig } from "./firebaseConfig";
import { useState, useEffect } from "react";

/**
 * Represents a Login component.
 * 
 * @returns {JSX.Element} The rendered Login component.
 */
const Login = () => {
    const app = initializeApp(firebaseConfig);
    console.log(app.options);
    const navigate = useNavigate();
    const location = useLocation();
    const page = location.pathname === "/netflixclone/login" ? true : false;
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [user, setUser] = useState();
    const [emailUsed, setEmailUsed] = useState();
    const [emailValid, setEmailValid] = useState(true);
    const [passwordValid, setPasswordValid] = useState(true);
    const [emailTouched, setEmailTouched] = useState(false);
    const [passwordTouched, setPasswordTouched] = useState(false);
    const auth = getAuth();

    const validation = (type, value) => {
        if (type === "email") {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(value);
        } else if (type === "password") {
            return value && value.length >= 8;
        }
        return false;
    };

    const validateEmail = () => {
        const isValid = validation("email", email);
        setEmailValid(isValid);
        return isValid;
    };

    const validatePassword = () => {
        const isValid = validation("password", password);
        setPasswordValid(isValid);
        return isValid;
    };

    const onSignIn = (e) => {
        e.preventDefault();

        const isEmailValid = validateEmail();
        const isPasswordValid = validatePassword();

        if (!isEmailValid || !isPasswordValid || !password) {
            return;
        }


        if (!isEmailValid || !isPasswordValid) {
            return;
        }

        if (page) {
            signInWithEmailAndPassword(auth, email, password)
                .then((auth) => {
                    if (auth) {
                        navigate("/netflixclone/dashboard");
                    }
                })
                .catch((e) => {
                    setUser(true);
                });
        } else {
            createUserWithEmailAndPassword(auth, email, password)
                .then((auth) => {
                    if (auth) {
                        navigate("/netflixclone/dashboard");
                    }
                })
                .catch((error) => {
                    setEmailUsed(true);
                });
        }
    };

    const emailChange = (e) => {
        setEmail(e.target.value);
        setEmailTouched(true);
    };

    const passwordChange = (p) => {
        setPassword(p.target.value);
        setPasswordTouched(true);
    };

    useEffect(() => {
        setUser(false);
        setEmailUsed(false);
    }, [location]);

    return (
        <div className="login">
            <div className="holder">
                <h1 className="text-white">{page ? "Sign In" : "Register"}</h1>
                <br />
                <form>
                    <input
                        className="form-control"
                        value={email}
                        type="email"
                        placeholder="Email"
                        onChange={emailChange}
                    />
                    {!emailValid && emailTouched && (
                        <p className="text-danger">Email is invalid</p>
                    )}
                    <input
                        className="form-control"
                        value={password}
                        type="password"
                        placeholder="Password"
                        onChange={passwordChange}
                    />
                    {user && (
                        <p className="text-danger">
                            Sorry, we can't find an account with this email
                            address. Please try again
                        </p>
                    )}
                    {!passwordValid && passwordTouched && (
                        <p className="text-danger">Password is invalid</p>
                    )}
                    <button
                        className="btn btn-danger btn-block"
                        onClick={onSignIn}
                    >
                        {page ? "Sign In" : "Register"}
                    </button>
                    <br />
                    {page && (
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="flexCheckDefault"
                            />
                            <label
                                className="form-check-label text-white"
                                htmlFor="flexCheckDefault"
                            >
                                Remember Me
                            </label>
                        </div>
                    )}
                </form>

                {emailUsed && (
                    <p className="text-danger">Email already in use</p>
                )}
                <div className="login-form-other">
                    <div className="login-signup-now">
                        {page ? "New to Netflix" : "Existing User"} &nbsp;
                        <Link className=" " to={page ? "/netflixclone/register" : "/netflixclone/login"}>
                            {page ? "Sign up now" : "Sign In"}
                        </Link>
                    </div>
                </div>
            </div>
            <div className="shadow"></div>
            <img
                className="concord-img vlv-creative"
                src="https://assets.nflxext.com/ffe/siteui/vlv3/6e32b96a-d4be-4e44-a19b-1bd2d2279b51/ee068656-14b9-4821-89b4-53b4937d9f1c/IN-en-20220516-popsignuptwoweeks-perspective_alpha_website_small.jpg"
                alt=""
            />
        </div>
    );
};

export default Login;
