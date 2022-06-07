import './App.css';
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
function App() {
  return (
    <div className="App">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="about" element={<About />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    </div>
  );
}

function Home() {
    return (
        <>
            <main>
                <h2>Welcome to Finflow!</h2>
                <p>You can do this, I believe in you.</p>
            </main>
            <nav>
                <Link to="/login">Login</Link>
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/about">About</Link>
            </nav>
        </>
    );
}

function About() {
    return (
        <>
            <main>
                <h2>Who are we?</h2>
                <p>
                    That feels like an existential question, don't you
                    think?
                </p>
            </main>
            <nav>
                <Link to="/">Home</Link>
            </nav>
        </>
    );
}
function NotFound() {
    return (
        <>
            <main>
                <h2>404</h2>
                <p>
                    The page was not found
                </p>
            </main>
            <nav>
                <Link to="/">Home</Link>
                <Link to="about">About</Link>
            </nav>
        </>
    );
}

export default App;
