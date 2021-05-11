import React from 'react';
 import {BrowserRouter, Route, Link} from "react-router-dom";
 import HomeScreen from "./screen/HomeScreen"
import ProductScreen from './screen/ProductScreen';

function App() {
    const OpenMenu = () => {
        document.querySelector(".sidebar").classList.add("open")
    }
    const CloseMenu = () => {
        document.querySelector(".sidebar").classList.remove("open")
    }
    return (
        <BrowserRouter>
        <div className="grid_container">
        <header className="header">
           <div className="brand">
               <button onClick={OpenMenu}>&#9776;</button>
                <Link to="/">Msignature Klothing</Link>
            </div>
           <div className="header_link">
                <a href="#">Carts</a>
                <a href="#">Sign In</a>
            </div>
        </header>
        <aside className="sidebar">
            <button className="closebar" onClick={CloseMenu}>x</button>
            <h3>Items Categories</h3>
            <ul>
                <li><a href="index.html">Headwears</a></li>
                <li><a href="index.html">Shirts</a></li>
                <li><a href="index.html">Snickers</a></li>
                <li><a href="index.html">trouses</a></li>
            </ul>
        </aside>
        <main className="main">
            <div className="main">
                <Route path="/product/:id" component={ProductScreen}/>
                <Route path="/" exact={true} component={HomeScreen}/>
        </div>
        </main>
        <footer className="footer">
            All right are reserved
        </footer>
    </div>
    </BrowserRouter>
    )
}

export default App;
// function OpenMenu(){
//     document.querySelector(".sidebar").classList.add("open")
// }
// function CloseMenu(){
//     document.querySelector(".sidebar").classList.remove("open")
// }
