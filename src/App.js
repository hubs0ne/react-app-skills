import React, { useEffect, useState } from 'react';
import './styles/App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import Navbar from './components/UI/navbar/Navbar';
import { AuthContext } from './context/index';

function App() {
    const [isAuth, setIsAuth] = useState(false)
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        if (localStorage.getItem('auth')) {
            setIsAuth(true)
        }
        setLoading(false)
    }, [])

    return (
        <div className="App">
            <AuthContext.Provider value={{
                isAuth,
                setIsAuth,
                isLoading
            }}>
                <Router>
                    <Navbar />
                    <AppRouter />
                </Router>
            </AuthContext.Provider>
        </div>
    )
}

export default App;
