import React from 'react';

function Nav(props) {
    const {
        setContactSelected,
        setAboutSelected,
        setProjectSelected,
        setResumeSelected
    } = props;

    function contactClick() {
        setContactSelected(true);
        setAboutSelected(false);
        setProjectSelected(false);
        setResumeSelected(false);
    }

    function aboutClick() {
        setContactSelected(false);
        setAboutSelected(true);
        setProjectSelected(false);
        setResumeSelected(false);
    }

    function projectClick() {
        setContactSelected(false);
        setAboutSelected(false);
        setProjectSelected(true);
        setResumeSelected(false);
    }

    function resumeClick() {
        setContactSelected(false);
        setAboutSelected(false);
        setProjectSelected(false);
        setResumeSelected(true);
    }


    return(
    <header className="card rounded-larger m-1">
        <h1 id="header" className="card-title text-light p-2 px-4 font-weight-bold">
        <a href="/r-portfolio">@fancibleunicorn</a>
        </h1>
            <ul className="nav">
                <li className="nav-item">
                    <a className="nav-link text-light" href="#header" 
                    onClick={() => 
                       aboutClick()
                    }
                    >About</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-light" href="#header" 
                    onClick={() => 
                    projectClick()
                    }
                    >Projects</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-light" href="#header" 
                    onClick={() => 
                   resumeClick()
                    }
                    >Resume</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-light" href="#header" 
                    onClick={()=> 
                    contactClick()
                    }
                    >Contact</a>
                </li>
            </ul>
    </header>
    )
}

export default Nav;