import React from 'react';

function About() {
    return (
        <section id="about-me" class="about card text-light p-2 m-1">
            <div class="border-bottom">
                <h2 class="section-header card-title text-center">
                    About Me
                </h2>
            </div>
            <div class="card-text pt-2 px-5 bio">
                <p>
                    Adam is a graduate of the University of Tennessee's theatre program.  
                    Since graduation, he has worked locally with many different performing arts groups, including serving as Director of Performing Arts for Sundress Academy for the Arts as well as serving as in-house playwright for Knoxville Gay Men's Chorus.  
                    <br/>
                    <br/>
                    He is currently enrolled in Vanderbilt University's coding bootcamp, and it is currently kicking his butt (in a good way).
                </p>
            </div>
        </section>
    )
}

export default About;