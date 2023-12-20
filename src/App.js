import React from "react";
import "./App.scss";
import Header from "./components/Header";
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
                                <Login  />
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
                                <List />
                            </>
                        }
                    />
                </Routes>
            </Router>
        </>
    );
}

export default App;
