import React from 'react';

function Resume() {
    return (
        <section id="resume" className="resume card text-light p-2 m-1 pb-5">
            <div className="border-bottom">
                <h2 className="section-header card-title text-center">
                    Resume
                </h2>
            </div>
            <div className="card-text pt-2 px-5 bio">
                <h3>
                    <a className="nav-link text-light text-center" href="https://docs.google.com/document/d/139QfRD6q5hSWBXx9iobHREKhlNAKWJmTQWqhM5_HHuE/edit?usp=sharing">📄 Click Here to view my full resume 📄</a> 
                </h3>
                <br/>
                <br/>
                <div className="row">
                    <div className="col">
                        <h2 className="section-header card-title">
                            Front-end Proficiencies
                        </h2>
                        <ul className="prof">
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Javascript</li>
                            <li>jQuery</li>
                            <li>React</li>
                            <li>Boostrap</li>
                            <li>Handlebars</li>
                            <li>Progressive Web Apps (PWA's)</li>
                        </ul>
                    </div>
                    <div className="col">
                        <h2 className="section-header card-title">
                            Back-end Proficiencies
                        </h2>
                        <ul className='prof'>
                            <li>API's</li>
                            <li>Node</li>
                            <li>Express</li>
                            <li>MySQL/Sequelize</li>
                            <li>NoSQL/MongoDB/Mongoose</li>
                        </ul>
                    </div>
                </div>    
            </div>
        </section>
    )
}

export default Resume;