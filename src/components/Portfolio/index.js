import React, { useState } from 'react';
import Project from '../Project';

function Portfolio() {
    const [projects] = useState([
        {
            name: 'Photo Port',
            description: "An application to showcase a client's photography portfolio using React.js",
            deployed: 'https://stephont.github.io/Photo-Port/',
            repository: 'https://github.com/StephonT/Photo-Port',
            technology: ['React | Bootstrap | Tailwind.css'],
            image: require('../../assets/images/photoPort.jpg'),
        },
        {
            name: 'Note Taker',
            description: "This application was created to allow users to read and write notes. This application uses Express.js to connect the client-side server and back-end server and Node.js for it's file system",
            deployed: 'https://not3-t4ker.herokuapp.com/',
            repository: 'https://github.com/StephonT/Note-Taker',
            technology: ['Node.js | Express.js'],
            image: require('../../assets/images/noteTaker.jpg'),
        },
        {
            name: 'Run Buddy',
            description: 'A website that offers fitness training services.',
            deployed: 'https://stephont.github.io/run-buddy/',
            repository: 'https://github.com/StephonT/run-buddy',
            technology: ['HTML | CSS'],
            image: require('../../assets/images/runBuddy.jpg'),
        },
        {
            name: 'Pizza Hunt',
            description: 'Pizza Hunt is a web application that allows users to create new pizza recipes or comment on and reply to comments on existing recipes. Create or find the pizza of your dreams.',
            deployed: 'https://fast-sierra-37446.herokuapp.com/',
            repository: 'https://github.com/StephonT/Pizza-Hunt',
            technology: ['Node', 'Express', 'NoSQL', 'MongoDB', 'Mongoose'],
            image: require('../../assets/images/pizzaHunt.jpg'),
        },
        {
            name: 'Watch It Later',
            description: 'Full-stack application using TheMovieDatabase API to view and search movies and television shows. Users can create an account to then rate and leave comments on their favorite movies or television shows and even create a personal watchlist.',
            deployed: 'https://watch-it-later.herokuapp.com/',
            repository: 'https://github.com/StephonT/watch-it-later',
            technology: ['Node | Express | MySQL | Sequelize ORM | Bulma | BCrypt | Axios | Express-Session'],
            image: require('../../assets/images/watchList.jpg'),
        },
        {
            name: 'The Tech Blog',
            description: 'A blog where developers can publish their blog posts and comment on other developers post and can create sign up or login into an account.',
            deployed: 'https://mysterious-headland-04769.herokuapp.com/',
            repository: 'https://github.com/StephonT/The-Tech-Blog',
            technology: ['Handlebars | Sequelize | Express | API | MVC | ORM'],
            image: require('../../assets/images/techBlog.jpg'),
        },
    ])
    return (
        <section className="content-section container my-5">
            <h2 className='text-center text-light'>Portfolio</h2>
            <p className='text-center fs-4 mb-5'>Here are a few of my recent projects
            </p>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5">
                {projects.map(project => (
                    <Project project={project} key={project.name} />
                ))}
            </div>
        </section>
    )
}

export default Portfolio;