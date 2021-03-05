import React from 'react';

function Nav() {
    return(
    <header className="card rounded-larger m-1">
        <h1 className="card-title text-light p-2 px-4 font-weight-bold">
        @fancibleunicorn
        </h1>
            <ul className="nav">
                <li className="nav-item">
                    <a className="nav-link text-light" href="#about-me">About</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-light" href="#work">Projects</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-light" href="#work">Resume</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-light" href="#contact-me">Contact</a>
                </li>
            </ul>
    </header>
    )
}

export default Nav;