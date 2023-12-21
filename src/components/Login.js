import { Link, useNavigate, useLocation } from "react-router-dom";
import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
} from "firebase/auth";
import { firebaseConfig } from "./firebaseConfig";
import { useState, useEffect } from "react";

const Login = () => {
    const app = initializeApp(firebaseConfig);
    const navigate = useNavigate();
    const location = useLocation();
    const page = location.pathname === "/login" ? true : false;
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [user, setUser] = useState(false);
    const [emailUsed, setEmailUsed] = useState(false);
    const [emailValid, setEmailValid] = useState(true);
    const [passwordValid, setPasswordValid] = useState(true);
    const auth = getAuth();

    const validation = (fn, val) => {
        switch (fn) {
            case "email":
                return val.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
            case "password":
                return val.length >= 6;
            default:
                break;
        }
    };

    const onSignIn = (e) => {
        e.preventDefault();

        if (!validation("email", email) || !validation("password", password)) {
            setEmailValid(validation("email", email));
            setPasswordValid(validation("password", password));
            return;
        }

        if (page) {
            signInWithEmailAndPassword(auth, email, password)
                .then((auth) => {
                    if (auth) {
                        navigate("/dashboard");
                    }
                })
                .catch((e) => {
                    setUser(true);
                });
        } else {
            createUserWithEmailAndPassword(auth, email, password)
                .then((auth) => {
                    if (auth) {
                        navigate("/dashboard");
                    }
                })
                .catch((error) => {
                    setEmailUsed(true);
                });
        }
    };

    const emailChange = (e) => {
        setEmail(e.target.value);
    };

    const passwordChange = (p) => {
        setPassword(p.target.value);
    };

    useEffect(() => {
        setUser(false);
        setEmailUsed(false);
    }, [location]);

    return (
        <div className="login">
            <div className="holder">
                <h1 className="text-white">{page ? "Sign in" : "Register"}</h1>
                <br />
                <form>
                    <input
                        className="form-control"
                        value={email}
                        type="email"
                        placeholder="Email"
                        onChange={emailChange}
                    />
                    {!emailValid && (
                        <p className="text-danger">Email is invalid</p>
                    )}
                    <input
                        className="form-control"
                        value={password}
                        type="password"
                        placeholder="Password"
                        onChange={passwordChange}
                    />
                    {!passwordValid && (
                        <p className="text-danger">Password is invalid</p>
                    )}
                    <button
                        className="btn btn-danger btn-block"
                        onClick={onSignIn}
                    >
                        {page ? "Sign in" : "Register"}
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
                {user && <p className="text-danger">User does not exist</p>}
                {emailUsed && (
                    <p className="text-danger">Email already in use</p>
                )}
                <div className="login-form-other">
                    <div className="login-signup-now">
                        {page ? "New to Netflix" : "Existing User"} &nbsp;
                        <Link className=" " to={page ? "/register" : "/login"}>
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
