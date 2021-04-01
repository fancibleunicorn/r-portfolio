import React from 'react';
import GoaldenPic from '../../images/SLP Goalden-resize.png'
import WeatherDashboardPic from '../../images/weather-dashboard.png';
import GitItDonePic from '../../images/git-it-done.PNG';
import RunBuddyPic from '../../images/run-buddy.png';
import WorkDaySchedulerPic from '../../images/work-day-scheduler.PNG';
import CodingWithCockailsPic from '../../images/coding-with-cocktails.PNG';
import CritterTailPic from '../../images/CritterTail.jpeg';

function Projects() {
    return(
        <section id="work" className="work card text-light p-2 m-1">
            <div className="border-bottom">
                <h2 className="section-header card-title text-center">
                    Projects
                </h2>
            </div>
        <div className="container projects pt-3">
            <div className="row pb-3">
            <div className="col-md-6 project pb-2">
                    <a className="card bg-dark text-white" href="https://crittertails.herokuapp.com/" >
                        <img src={`${CritterTailPic}`} className=" card-img" width='cover' height='cover' alt="CritterTails Website"/>
                        <div className="card-img-overlay">
                            <h3 className="card-title">CritterTails</h3>
                            <a href="https://github.com/Craig5117/critter" class="text-white "><i class="fab fa-github fa-2x"></i></a>
                        </div>
                    </a>
                </div>
                <div className="col-md-6 project pb-2">
                    <a className="card bg-dark text-white" href="https://mighty-falls-97052.herokuapp.com/" >
                        <img src={`${GoaldenPic}`} className=" card-img" width='cover' height='cover' alt="SLP Goalden Website"/>
                        <div className="card-img-overlay">
                            <h3 className="card-title">SLP Goalden</h3>
                            <a href="https://github.com/Craig5117/slp-goalden" class="text-white "><i class="fab fa-github fa-2x"></i></a>
                        </div>
                    </a>
                </div>
                
                {/* <div className="col-md-6 project pb-2">
                    <a className="card bg-dark text-white" href="https://fancibleunicorn.github.io/weather-dashboard/" >
                        <img src={`${WeatherDashboardPic}`} className="card-img" width='cover' height='cover' alt="Run-Buddy Website"/>
                        <div className="card-img-overlay">
                            <h3 className="card-title">Weather-Dashboard</h3>
                            <a href="https://github.com/FancibleUnicorn/weather-dashboard" class="text-white "><i class="fab fa-github fa-2x"></i></a>
                        </div>
                    </a>
                </div> */}
            </div> 
            <div className="row pb-3">                   
                <div className="col-md-6 project pb-2">
                    <a className="card bg-dark text-white" href="https://fancibleunicorn.github.io/git-it-done/" >
                        <img src={`${GitItDonePic}`} className="card-img" width='cover' height='cover' alt="Run-Buddy Website"/>
                        <div className="card-img-overlay">
                            <h3 className="card-title">Git-it-Done</h3>
                            <a href="https://github.com/FancibleUnicorn/git-it-done" class="text-white "><i class="fab fa-github fa-2x"></i></a>
                        </div>
                    </a>
                </div>
             
                <div className="project col-md-6 pb-2">
                    <a className="card bg-dark text-white" href="https://fancibleunicorn.github.io/run-buddy/" >
                        <img src={`${RunBuddyPic}`} className="card-img" width='cover' height='cover' alt="Run-Buddy Website"/>
                        <div className="card-img-overlay">
                            <h3 className="card-title">Run-Buddy</h3>
                            <a href="https://github.com/FancibleUnicorn/run-buddy" class="text-white "><i class="fab fa-github fa-2x"></i></a>
                        </div>
                    </a>
                </div>
            </div>
            <div className="row">   
                <div className="col-md-6 project pb-2">
                    <a className="card bg-dark text-white" href="https://fancibleunicorn.github.io/work-day-scheduler/" >
                        <img src={`${WorkDaySchedulerPic}`} className="card-img" width='cover' height='cover' alt="Run-Buddy Website"/>
                        <div className="card-img-overlay">
                            <h3 className="card-title">Work-Day-Scheduler</h3>
                            <a href="https://github.com/FancibleUnicorn/work-day-scheduler" class="text-white "><i class="fab fa-github fa-2x"></i></a>
                        </div>
                    </a>
                </div>
                <div className="col-md-6 project pb-2">
                    <a className="card bg-dark text-white" href="https://ondayko14.github.io/coding-with-cocktails/" >
                        <img src={`${CodingWithCockailsPic}`} className=" card-img" width='cover' height='cover' alt="Run-Buddy Website"/>
                        <div className="card-img-overlay">
                            <h3 className="card-title">Coding-with-Cocktails</h3>
                            <a href="https://github.com/Ondayko14/coding-with-cocktails" class="text-white "><i class="fab fa-github fa-2x"></i></a>
                        </div>
                    </a>
                </div>
            </div>
        </div>  
    </section>
    )
}

export default Projects;