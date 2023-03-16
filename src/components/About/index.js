import React from 'react'
import face from '../../assets/projects/face.png'

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-slate-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-amber-300">
              About
            </p>
          </div>
          <div></div>

        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div  className="sm:text-right text-4xl font-bold flex ">
            <p>
            Hi. I'm Stephon. Nice to meet you! Please take a look around.
            </p>
            <img src={face} alt="Picture of Treadwell" className="ml-10 border-double border-4" />
          </div>
          <div>
            <p className="text-lg">I graduated from Ramapo College of New Jersey in 2013, having majored in Business Administration concentrated in Management. Of course, I don't get a job in business. That makes too much sense! I became a Police Officer two years after graduating college and never looked back. I excelled as a Patrol Officer and became a Police Sergeant and currently occupying that position. Within those years in Law Enforcement, I've been sharpening my programming sword until I decided to take it further by attending the Rutgers Coding Bootcamp. While obtaining my Full-Stack Web Development Certification, I realized that the tech career is for me! It's so rewarding, challenging and fun to code. If I am not coding, I am playing basketball and videogames or I'm singing "Baby Shark" with my daughter and wife.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About