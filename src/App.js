import React from "react";
import "./App.scss";
import Header from "./components/Header.js";
import HomeBanner from "./components/HomeBanner";
import Login from "./components/Login";
import Banner from "./components/Banner";
import List from "./components/List";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

/**
 * Renders the main application component.
 * @returns {JSX.Element} The rendered App component.
 */
function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route
                        path="/netflixclone"
                        element={
                            <>
                                <Header buttonText="Sign In"/>
                                <HomeBanner />
                            </>
                        }
                    />
                    <Route
                        path="/netflixclone/login"
                        element={
                            <>
                                <Header buttonText="Sign In" />
                                <Login />
                            </>
                        }
                    />
                    <Route
                        path="/netflixclone/register"
                        element={
                            <>
                                <Header buttonText="Sign In"/>
                                <Login />
                            </>
                        }
                    />
                    <Route
                        path="/netflixclone/dashboard"
                        element={
                            <>
                                <Header buttonText="Sign out" />
                                <Banner />
                                <List
                                    title="Netflix Originals"
                                    param="originals"
                                />
                                <List title="Trending Now" param="trending" />
                                <List title="Now Playing" param="now_playing" />
                                <List title="Popular" param="popular" />
                                <List title="Top Rated" param="top_rated" />
                                <List title="Upcoming" param="upcoming" />
                            </>
                        }
                    />
                </Routes>
            </Router>
        </>
    );
}

export default App;
