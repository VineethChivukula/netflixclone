import React from "react";
import "./App.scss";
import Header from "./components/Header.js";
import HomeBanner from "./components/HomeBanner";
import Login from "./components/Login";
import Banner from "./components/Banner";
import List from "./components/List";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                                <Header />
                                <HomeBanner />
                            </>
                        }
                    />
                    <Route
                        path="/login"
                        element={
                            <>
                                <Header />
                                <Login />
                            </>
                        }
                    />
                    <Route
                        path="/register"
                        element={
                            <>
                                <Header />
                                <Login />
                            </>
                        }
                    />
                    <Route
                        path="/dashboard"
                        element={
                            <>
                                <Header />
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
