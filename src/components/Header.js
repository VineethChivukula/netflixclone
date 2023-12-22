import { useNavigate, Link } from "react-router-dom";

/**
 * Represents the Header component of the Netflix clone.
 * @param {Object} props - The props object containing the component's properties.
 * @returns {JSX.Element} The rendered Header component.
 */
const Header = (props) => {
    const navigate = useNavigate();

    const onSignIn = (e) => {
        e.preventDefault();
        navigate("/netflixclone/login");
    };

    return (
        <header className="topNav">
            <nav className="navbar navbar-expand-md navbar-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/netflixclone/">
                        <img
                            className="nav__logo"
                            src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
                            alt="Netflix Logo"
                        ></img>
                    </Link>
                    <div className="navbar">
                        <form className="d-flex" role="search">
                            <select>
                                <option>English</option>
                                <option>Hindi</option>
                            </select>
                            <button
                                className="btn btn-danger"
                                onClick={onSignIn}
                            >
                                {props.buttonText}
                            </button>
                        </form>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
