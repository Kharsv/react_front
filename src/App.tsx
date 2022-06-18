import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import AppBar from './main/AppBar';
import Footer from './main/Footer';
import Login from './pages/Login';
import Registration from './pages/Registration';
import Page404 from './pages/Page404';

// const Home = () => {
//     return (
//         <div>
//             <h2>Home</h2>
//         </div>
//     );
// }
//
// const About = () => {
//     return (
//         <div>
//             <h2>About</h2>
//         </div>
//     );
// }
//
// const Dashboard = () => {
//     return (
//         <div>
//             <h2>Dashboard</h2>
//         </div>
//     );
// }

function Home() {
    return (
        <div>
            <h2>Home</h2>
        </div>
    );
}

// function Login () {
//     return (
//         <div>
//             <h2>About</h2>
//         </div>
//     );
// }

// function Registration() {
//     return (
//         <div>
//             <h2>Registration</h2>
//         </div>
//     );
// }

function About () {
    return (
        <div>
            <h2>About</h2>
        </div>
    );
}


function Dashboard() {
    return (
        <div>
            <h2>Dashboard</h2>
        </div>
    );
}


function App() {

    return (
        <Router>
            <div className="App">
                <AppBar/>
                     <header className="App-header">
                         <a
                             className="App-link"
                             href="http://localhost:3000"
                             target="_blank"
                             rel="noopener noreferrer"
                         >
                             <img src={logo} className="App-logo" alt="logo" />
                         </a>

                         <p>
                             Edit <code>src/App.tsx</code> and save to reload.
                         </p>
                        {/* <a*/}
                        {/*    className="App-link"*/}
                        {/*    href="https://reactjs.org"*/}
                        {/*    target="_blank"*/}
                        {/*    rel="noopener noreferrer"*/}
                        {/*>*/}
                        {/*    Learn React*/}
                        {/*</a>*/}
                         <ul>
                             <li>
                                 <Link to="/">Home</Link>
                             </li>
                             <li>
                                 <Link to="/Login">Login</Link>
                             </li>
                             <li>
                                 <Link to="/Registration">Registration</Link>
                             </li>
                             <li>
                                 <Link to="/Page404">Page404</Link>
                             </li>
                             <li>
                                 <Link to="/about">About</Link>
                             </li>
                             <li>
                                 <Link to="/dashboard">Dashboard</Link>
                             </li>
                         </ul>
                    </header>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/registration" element={<Registration/>}/>
                    <Route path="/Page404" element={<Page404/>}/>
                    <Route path="/Dashboard" element={<Dashboard/>}/>
                </Routes>
                <Footer/>
            </div>
        </Router>
        // <div className="App">
        //     <header className="App-header">
        //         <img src={logo} className="App-logo" alt="logo" />
        //         <p>
        //             Edit <code>src/App.tsx</code> and save to reload.
        //         </p>
        //         <a
        //             className="App-link"
        //             href="https://reactjs.org"
        //             target="_blank"
        //             rel="noopener noreferrer"
        //         >
        //             Learn React
        //         </a>
        //     </header>
        // </div>
    );
}

export default App;